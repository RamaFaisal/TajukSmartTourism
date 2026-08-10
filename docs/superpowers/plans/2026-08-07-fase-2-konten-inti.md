# Fase 2 — Konten Inti ke Database Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Memindahkan 11 profil dusun dan 4 destinasi dari berkas JSX ke database, sehingga admin desa dapat mengubahnya lewat panel dan 15 berkas salinan runtuh menjadi 2 template.

**Architecture:** Dua tabel dengan bentuk serupa — `hamlets` dan `destinations` — masing-masing dengan sumber daya Filament sendiri. Setiap halaman dirender oleh satu template Inertia yang menerima data lewat props, dengan route model binding berbasis slug. URL lama dialihkan permanen agar tautan yang sudah tersebar tidak mati. Pasangan kolom gambar dua mode dari Fase 1 diangkat menjadi trait bersama.

**Tech Stack:** PHP 8.3, Laravel 10, Filament 3, Inertia.js, React 18, PHPUnit 10.

**Spec:** [docs/superpowers/specs/2026-08-06-tajuk-smart-tourism-v2-prd.md](../specs/2026-08-06-tajuk-smart-tourism-v2-prd.md) — Fase 2 pada Bagian 11, model data pada Bagian 8, routing pada Bagian 9.1.

## Global Constraints

- **Jangan menjalankan `git commit` tanpa izin eksplisit dari user.** (CLAUDE.md § Rules 3)
- **Jalankan setiap perintah PHP dengan `php83`, bukan `php`.**
- **Format pesan commit: Conventional Commits.**
- **Tidak ada penyebutan Claude, AI, atau co-author generatif** di kode maupun pesan commit. (CLAUDE.md § Rules 1)
- **Tidak menulis komentar di kode.** (CLAUDE.md § Rules 2)
- **Prinsip: KISS, YAGNI, DRY, FAIL FAST, Readability > Cleverness.** (CLAUDE.md § Rules 4)
- **Penamaan tabel dan kolom dalam bahasa Inggris; seluruh teks yang dilihat pengguna dalam bahasa Indonesia.** (PRD keputusan D6)
- **Batas unggahan: 2 MB, lebar maksimum 1920 px, format JPG/PNG/WebP.** (PRD Bagian 9.4)

## Keadaan awal yang sudah diverifikasi

- **11 halaman Dusun seragam sempurna:** masing-masing 2 gambar (hero + banner ajakan), 5–12 paragraf isi, lalu carousel `<Dusun />`. Satu template cukup.
- **4 halaman Destinasi lebih kaya dan tidak seragam penuh:** hero dengan judul dan tagline, paragraf pengantar berdampingan dengan gambar galeri, banner ajakan, lalu blok detail berisi jam buka, harga tiket, "Tentang Destinasi", "Daya Tarik Utama", dan daftar fasilitas berikon. **Ngaduman tidak punya jam buka maupun harga tiket** — kolom-kolom itu harus nullable.
- **Banner ajakan identik di seluruh 15 halaman** — gambar, kalimat, dan tombol "Lihat Paket" sama persis. Diangkat menjadi satu komponen bersama.
- **Peta Leaflet berada di `Components/Destinasi.jsx`**, bukan di halaman destinasi, dengan 4 penanda berkoordinat. Koordinat ikut dipindah ke tabel.
- **Cacat konten yang harus diperbaiki saat seeding, bukan disalin:** bagian "Tentang Destinasi" pada `DungKluruk.jsx` berisi teks tentang G-Pass, dan `alt` gambar heronya tertulis "Wisata Gedong Pass".

---

### Task 1: Trait gambar bersama, tabel `hamlets`, dan panel dusun

Accessor gambar dua mode kini dipakai tiga model (`Article`, `Hamlet`, `Destination`), sehingga logikanya diangkat ke trait. Ini refactor yang dibenarkan oleh kebutuhan nyata, bukan spekulasi.

**Files:**
- Create: `app/Models/Concerns/HasDualImage.php`
- Create: `database/migrations/2026_08_07_000004_create_hamlets_table.php`
- Create: `app/Models/Hamlet.php`
- Create: `database/factories/HamletFactory.php`
- Create: `app/Filament/Resources/HamletResource.php`
- Create: `app/Filament/Resources/HamletResource/Pages/ListHamlets.php`
- Create: `app/Filament/Resources/HamletResource/Pages/CreateHamlet.php`
- Create: `app/Filament/Resources/HamletResource/Pages/EditHamlet.php`
- Modify: `app/Models/Article.php`
- Test: `tests/Feature/HamletTest.php`

**Interfaces:**
- Consumes: Kolom gambar dua mode dan `Setting` dari Fase 1.
- Produces:
  - `App\Models\Concerns\HasDualImage::resolveImage(string $pathAttribute, string $urlAttribute): ?string` — mengembalikan URL storage bila kolom jalur terisi, selain itu isi kolom URL, selain itu `null`.
  - Tabel `hamlets`: `slug`, `name`, `hero_headline`, `hero_image_path`, `hero_image_url`, `body`, `card_image_path`, `card_image_url`, `sort_order`, `is_published`.
  - `App\Models\Hamlet` dengan accessor `hero_image_src` dan `card_image_src`, serta scope `published()`.
  - `Database\Factories\HamletFactory`.

- [ ] **Step 1: Write the failing test**

Buat `tests/Feature/HamletTest.php`:

```php
<?php

namespace Tests\Feature;

use App\Models\Hamlet;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class HamletTest extends TestCase
{
    use RefreshDatabase;

    public function test_hero_image_prefers_upload_over_external_url(): void
    {
        $hamlet = Hamlet::factory()->create([
            'hero_image_path' => 'images/hamlets/hero.jpg',
            'hero_image_url' => 'https://drive.google.com/thumbnail?id=ABC',
        ]);

        $this->assertSame(
            config('app.url').'/storage/images/hamlets/hero.jpg',
            $hamlet->hero_image_src
        );
    }

    public function test_card_image_falls_back_to_external_url(): void
    {
        $url = 'https://drive.google.com/thumbnail?id=ABC';

        $hamlet = Hamlet::factory()->create([
            'card_image_path' => null,
            'card_image_url' => $url,
        ]);

        $this->assertSame($url, $hamlet->card_image_src);
    }

    public function test_published_scope_hides_drafts(): void
    {
        Hamlet::factory()->count(2)->create();
        Hamlet::factory()->count(3)->create(['is_published' => false]);

        $this->assertSame(2, Hamlet::published()->count());
    }

    public function test_article_still_resolves_its_image_through_the_trait(): void
    {
        $url = 'https://drive.google.com/thumbnail?id=XYZ';

        $article = \App\Models\Article::factory()->create([
            'image_path' => null,
            'image_url' => $url,
        ]);

        $this->assertSame($url, $article->image_src);
    }

    public function test_admin_can_open_the_hamlet_list(): void
    {
        $admin = User::factory()->admin()->create();

        $this->actingAs($admin)->get('/admin/hamlets')->assertSuccessful();
    }
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `php83 artisan test --filter=HamletTest`
Expected: FAIL — `Class "App\Models\Hamlet" not found`.

- [ ] **Step 3: Buat trait HasDualImage**

Buat `app/Models/Concerns/HasDualImage.php`:

```php
<?php

namespace App\Models\Concerns;

use Illuminate\Support\Facades\Storage;

trait HasDualImage
{
    public function resolveImage(string $pathAttribute, string $urlAttribute): ?string
    {
        if (filled($this->{$pathAttribute})) {
            return Storage::disk('public')->url($this->{$pathAttribute});
        }

        return $this->{$urlAttribute};
    }
}
```

- [ ] **Step 4: Pakai trait itu di Article**

Pada `app/Models/Article.php`, tambahkan `use App\Models\Concerns\HasDualImage;` di bagian import, tambahkan `HasDualImage` ke daftar `use` di dalam kelas sehingga menjadi `use HasDualImage, HasFactory;`, lalu ganti isi method `imageSrc`:

```php
    protected function imageSrc(): Attribute
    {
        return Attribute::get(fn (): ?string => $this->resolveImage('image_path', 'image_url'));
    }
```

Hapus import `Illuminate\Support\Facades\Storage` dari `Article.php` karena tidak lagi dipakai di sana.

- [ ] **Step 5: Buat migration hamlets**

Buat `database/migrations/2026_08_07_000004_create_hamlets_table.php`:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('hamlets', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('name');
            $table->text('hero_headline')->nullable();
            $table->string('hero_image_path')->nullable();
            $table->string('hero_image_url')->nullable();
            $table->longText('body')->nullable();
            $table->string('card_image_path')->nullable();
            $table->string('card_image_url')->nullable();
            $table->unsignedSmallInteger('sort_order')->default(0);
            $table->boolean('is_published')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('hamlets');
    }
};
```

- [ ] **Step 6: Buat model Hamlet**

Buat `app/Models/Hamlet.php`:

```php
<?php

namespace App\Models;

use App\Models\Concerns\HasDualImage;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hamlet extends Model
{
    use HasDualImage, HasFactory;

    protected $fillable = [
        'slug',
        'name',
        'hero_headline',
        'hero_image_path',
        'hero_image_url',
        'body',
        'card_image_path',
        'card_image_url',
        'sort_order',
        'is_published',
    ];

    protected $casts = [
        'is_published' => 'boolean',
        'sort_order' => 'integer',
    ];

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('is_published', true);
    }

    protected function heroImageSrc(): Attribute
    {
        return Attribute::get(fn (): ?string => $this->resolveImage('hero_image_path', 'hero_image_url'));
    }

    protected function cardImageSrc(): Attribute
    {
        return Attribute::get(fn (): ?string => $this->resolveImage('card_image_path', 'card_image_url'));
    }
}
```

- [ ] **Step 7: Buat HamletFactory**

Buat `database/factories/HamletFactory.php`:

```php
<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class HamletFactory extends Factory
{
    public function definition(): array
    {
        $name = fake()->unique()->city();

        return [
            'slug' => Str::slug($name),
            'name' => 'Dusun '.$name,
            'hero_headline' => fake()->sentence(),
            'hero_image_path' => null,
            'hero_image_url' => null,
            'body' => '<p>'.fake()->paragraph().'</p>',
            'card_image_path' => null,
            'card_image_url' => null,
            'sort_order' => 0,
            'is_published' => true,
        ];
    }
}
```

- [ ] **Step 8: Buat sumber daya Filament**

Buat `app/Filament/Resources/HamletResource.php`:

```php
<?php

namespace App\Filament\Resources;

use App\Filament\Resources\HamletResource\Pages;
use App\Models\Hamlet;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class HamletResource extends Resource
{
    protected static ?string $model = Hamlet::class;

    protected static ?string $navigationIcon = 'heroicon-o-home-modern';

    protected static ?string $modelLabel = 'Dusun';

    protected static ?string $pluralModelLabel = 'Dusun';

    protected static ?string $navigationLabel = 'Dusun';

    protected static ?string $navigationGroup = 'Konten';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Identitas')
                    ->schema([
                        TextInput::make('name')
                            ->label('Nama dusun')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('slug')
                            ->label('Slug URL')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->maxLength(255),
                        Textarea::make('hero_headline')
                            ->label('Kalimat pembuka di gambar utama')
                            ->rows(2),
                    ]),
                Section::make('Gambar Utama')
                    ->schema([
                        FileUpload::make('hero_image_path')
                            ->label('Unggah gambar')
                            ->image()
                            ->disk('public')
                            ->directory('images/hamlets')
                            ->maxSize(2048)
                            ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp'])
                            ->imageResizeMode('contain')
                            ->imageResizeTargetWidth('1920')
                            ->imageResizeTargetHeight('1920'),
                        TextInput::make('hero_image_url')
                            ->label('Atau tempel tautan gambar')
                            ->url()
                            ->maxLength(2048),
                    ]),
                Section::make('Gambar Kartu')
                    ->description('Dipakai pada daftar dusun di bagian bawah halaman.')
                    ->schema([
                        FileUpload::make('card_image_path')
                            ->label('Unggah gambar')
                            ->image()
                            ->disk('public')
                            ->directory('images/hamlets')
                            ->maxSize(2048)
                            ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp'])
                            ->imageResizeMode('contain')
                            ->imageResizeTargetWidth('1920')
                            ->imageResizeTargetHeight('1920'),
                        TextInput::make('card_image_url')
                            ->label('Atau tempel tautan gambar')
                            ->url()
                            ->maxLength(2048),
                    ]),
                RichEditor::make('body')
                    ->label('Isi profil')
                    ->columnSpanFull(),
                TextInput::make('sort_order')
                    ->label('Urutan tampil')
                    ->numeric()
                    ->default(0),
                Toggle::make('is_published')
                    ->label('Tampilkan di situs')
                    ->default(true),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('sort_order')->label('Urutan')->sortable(),
                TextColumn::make('name')->label('Nama')->searchable(),
                TextColumn::make('slug')->label('Slug'),
                IconColumn::make('is_published')->label('Tampil')->boolean(),
            ])
            ->defaultSort('sort_order')
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListHamlets::route('/'),
            'create' => Pages\CreateHamlet::route('/create'),
            'edit' => Pages\EditHamlet::route('/{record}/edit'),
        ];
    }
}
```

- [ ] **Step 9: Buat tiga halaman sumber daya**

Buat `app/Filament/Resources/HamletResource/Pages/ListHamlets.php`:

```php
<?php

namespace App\Filament\Resources\HamletResource\Pages;

use App\Filament\Resources\HamletResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListHamlets extends ListRecords
{
    protected static string $resource = HamletResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
```

Buat `app/Filament/Resources/HamletResource/Pages/CreateHamlet.php`:

```php
<?php

namespace App\Filament\Resources\HamletResource\Pages;

use App\Filament\Resources\HamletResource;
use Filament\Resources\Pages\CreateRecord;

class CreateHamlet extends CreateRecord
{
    protected static string $resource = HamletResource::class;
}
```

Buat `app/Filament/Resources/HamletResource/Pages/EditHamlet.php`:

```php
<?php

namespace App\Filament\Resources\HamletResource\Pages;

use App\Filament\Resources\HamletResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditHamlet extends EditRecord
{
    protected static string $resource = HamletResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
```

- [ ] **Step 10: Jalankan migration**

Run: `php83 artisan migrate`
Expected: Migration `create_hamlets_table` berhasil.

- [ ] **Step 11: Run test to verify it passes**

Run: `php83 artisan test --filter=HamletTest`
Expected: PASS — lima tes lulus.

- [ ] **Step 12: Pastikan seluruh suite masih hijau**

Run: `php83 artisan test`
Expected: Semua tes lulus, termasuk `ArticleImageSourceTest` yang kini melewati trait.

- [ ] **Step 13: Commit** *(minta izin user lebih dulu)*

```bash
./vendor/bin/pint app database
git add -A
git commit -m "feat: tambah tabel dan panel dusun"
```

---

### Task 2: Seeder isi 11 dusun

Memindahkan tulisan yang sudah ada ke database. Berkas JSX lama masih utuh saat task ini dikerjakan dan menjadi satu-satunya sumber kebenaran — jangan mengarang ulang teks.

Risiko R5 pada PRD berlaku di sini: salah salin berarti kehilangan tulisan yang sudah dibuat. Karena itu Step 3 mewajibkan pencocokan jumlah paragraf per dusun sebelum berkas lama boleh dihapus di Task 3.

**Files:**
- Create: `database/seeders/HamletSeeder.php`
- Modify: `database/seeders/DatabaseSeeder.php`
- Test: `tests/Feature/HamletSeederTest.php`

**Interfaces:**
- Consumes: Model `Hamlet` dari Task 1.
- Produces: 11 baris pada tabel `hamlets` dengan slug `pulihan`, `tajuk`, `puyang`, `cingklok`, `ngaduman`, `macanan`, `ngroto`, `banaran`, `sokowolu`, `gedong`, `kaliajeng` — urutan sama dengan array kartu di `resources/js/Components/Dusun.jsx`.

- [ ] **Step 1: Write the failing test**

Buat `tests/Feature/HamletSeederTest.php`:

```php
<?php

namespace Tests\Feature;

use App\Models\Hamlet;
use Database\Seeders\HamletSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class HamletSeederTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_seeds_eleven_hamlets(): void
    {
        $this->seed(HamletSeeder::class);

        $this->assertSame(11, Hamlet::count());
    }

    public function test_every_hamlet_has_content_and_images(): void
    {
        $this->seed(HamletSeeder::class);

        foreach (Hamlet::all() as $hamlet) {
            $this->assertNotEmpty($hamlet->name, "Nama kosong: {$hamlet->slug}");
            $this->assertNotEmpty($hamlet->hero_headline, "Headline kosong: {$hamlet->slug}");
            $this->assertNotEmpty($hamlet->body, "Isi kosong: {$hamlet->slug}");
            $this->assertNotNull($hamlet->hero_image_src, "Gambar hero kosong: {$hamlet->slug}");
            $this->assertNotNull($hamlet->card_image_src, "Gambar kartu kosong: {$hamlet->slug}");
        }
    }

    public function test_seeding_twice_does_not_duplicate(): void
    {
        $this->seed(HamletSeeder::class);
        $this->seed(HamletSeeder::class);

        $this->assertSame(11, Hamlet::count());
    }

    public function test_banaran_keeps_its_full_text(): void
    {
        $this->seed(HamletSeeder::class);

        $banaran = Hamlet::where('slug', 'banaran')->firstOrFail();

        $this->assertSame(12, substr_count($banaran->body, '<p>'));
        $this->assertStringContainsString('Topeng Ireng', $banaran->body);
    }
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `php83 artisan test --filter=HamletSeederTest`
Expected: FAIL — `Class "Database\Seeders\HamletSeeder" not found`.

- [ ] **Step 3: Kumpulkan isi dari berkas JSX lama**

Untuk setiap berkas `resources/js/Pages/Dusun/Dusun*.jsx`, catat lima nilai:

| Nilai | Letak di berkas JSX |
|---|---|
| `name` | Judul dari route di `routes/web.php`, contoh "Dusun Banaran" |
| `hero_headline` | Isi `<h1>` di dalam blok hero, contoh "Dusun Banaran dengan pesona kekayaan alam dan juga kelestarian budaya yang berdampingan" |
| `hero_image_url` | `src` gambar pertama, berbentuk `https://drive.google.com/thumbnail?id=...&sz=w2000` |
| `body` | Seluruh `<p>` pada blok `text-justify`, digabung apa adanya menjadi satu string HTML |
| `card_image_url` | `imageUrl` dusun bersangkutan pada array `cards` di `resources/js/Components/Dusun.jsx` |

Verifikasi jumlah paragraf sebelum melanjutkan:

```bash
for f in resources/js/Pages/Dusun/Dusun*.jsx; do echo "$(basename $f .jsx) $(grep -c '<p>' $f)"; done
```

Jumlah `<p>` pada kolom `body` tiap dusun harus sama persis dengan keluaran perintah ini. Bila berbeda, ada paragraf yang hilang atau terduplikasi.

- [ ] **Step 4: Buat seeder**

Buat `database/seeders/HamletSeeder.php` dengan bentuk berikut. Isi array `$hamlets` dengan seluruh 11 dusun memakai nilai yang dikumpulkan pada Step 3. Satu entri ditulis lengkap di bawah sebagai acuan bentuk; sepuluh sisanya mengikuti struktur yang sama.

```php
<?php

namespace Database\Seeders;

use App\Models\Hamlet;
use Illuminate\Database\Seeder;

class HamletSeeder extends Seeder
{
    public function run(): void
    {
        foreach ($this->hamlets() as $order => $hamlet) {
            Hamlet::updateOrCreate(
                ['slug' => $hamlet['slug']],
                [...$hamlet, 'sort_order' => $order, 'is_published' => true]
            );
        }
    }

    private function hamlets(): array
    {
        return [
            [
                'slug' => 'banaran',
                'name' => 'Dusun Banaran',
                'hero_headline' => 'Dusun Banaran dengan pesona kekayaan alam dan juga kelestarian budaya yang berdampingan',
                'hero_image_url' => 'https://drive.google.com/thumbnail?id=1_GAOlMWVmPq7s_rfKoqZ1DYGpgWycRgs&sz=w2000',
                'card_image_url' => 'https://drive.google.com/thumbnail?id=1XBEW_Q-5DtOiEYmfDFHe6-4oA2peGJt-&sz=w2000',
                'body' => '<p>Dusun Banaran, sebuah tempat yang seakan menyimpan pesona tersendiri di Desa Tajuk...</p>',
            ],
        ];
    }
}
```

`updateOrCreate` berdasarkan `slug` membuat seeder aman dijalankan berulang — inilah yang diuji `test_seeding_twice_does_not_duplicate`.

Urutan array menentukan `sort_order`, dan harus mengikuti urutan array `cards` pada `resources/js/Components/Dusun.jsx` agar susunan kartu di situs tidak berubah.

- [ ] **Step 5: Daftarkan seeder**

Pada `database/seeders/DatabaseSeeder.php`, isi method `run` menjadi:

```php
    public function run(): void
    {
        $this->call(HamletSeeder::class);
    }
```

`SeederSecurityTest` dari Fase 0 tetap lulus karena seeder ini tidak membuat akun pengguna.

- [ ] **Step 6: Run test to verify it passes**

Run: `php83 artisan test --filter=HamletSeederTest`
Expected: PASS — empat tes lulus.

- [ ] **Step 7: Jalankan seeder pada database pengembangan**

Run: `php83 artisan db:seed --class=HamletSeeder`
Expected: 11 baris masuk ke tabel `hamlets`.

- [ ] **Step 8: Commit** *(minta izin user lebih dulu)*

```bash
./vendor/bin/pint database
git add -A
git commit -m "feat: pindahkan isi 11 dusun ke database"
```

---

### Task 3: Halaman dusun berbasis data

Meruntuhkan 11 berkas JSX menjadi satu template, mengganti array kartu di `Components/Dusun.jsx` dengan data, dan mengalihkan URL lama secara permanen.

Banner ajakan yang identik di 15 halaman diangkat menjadi komponen `PromoBanner` agar tidak disalin ulang di template destinasi pada Task 6.

**Files:**
- Create: `app/Http/Controllers/HamletController.php`
- Create: `resources/js/Pages/Dusun/Show.jsx`
- Create: `resources/js/Components/PromoBanner.jsx`
- Modify: `resources/js/Components/Dusun.jsx`
- Modify: `resources/js/Components/Navbar.jsx`
- Modify: `routes/web.php`
- Delete: 11 berkas `resources/js/Pages/Dusun/Dusun*.jsx`
- Test: `tests/Feature/HamletPageTest.php`

**Interfaces:**
- Consumes: Model `Hamlet` dan seeder dari Task 1 dan 2.
- Produces:
  - Route bernama `hamlets.show` pada `/dusun/{hamlet:slug}`.
  - Props yang diterima `Dusun/Show.jsx`: `title`, `description`, `hamlet` (objek berisi `name`, `heroHeadline`, `heroImage`, `body`), `hamlets` (array `{imageUrl, title, link}` untuk kartu).

Bentuk array `hamlets` sengaja mengikuti nama field yang sudah dipakai `Components/Dusun.jsx` — `imageUrl`, `title`, `link`. Dengan begitu perubahan di dalam komponen itu cukup menghapus deklarasi array dan mengganti tanda tangannya, tanpa menyentuh bagian render.
  - Komponen `PromoBanner` tanpa props, dipakai ulang di Task 6.

- [ ] **Step 1: Write the failing test**

Buat `tests/Feature/HamletPageTest.php`:

```php
<?php

namespace Tests\Feature;

use App\Models\Hamlet;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class HamletPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_published_hamlet_page_renders(): void
    {
        $hamlet = Hamlet::factory()->create(['slug' => 'banaran', 'name' => 'Dusun Banaran']);

        $this->get('/dusun/banaran')->assertOk();
    }

    public function test_unpublished_hamlet_returns_not_found(): void
    {
        Hamlet::factory()->create(['slug' => 'banaran', 'is_published' => false]);

        $this->get('/dusun/banaran')->assertNotFound();
    }

    public function test_unknown_slug_returns_not_found(): void
    {
        $this->get('/dusun/tidak-ada')->assertNotFound();
    }

    public function test_legacy_url_redirects_permanently(): void
    {
        Hamlet::factory()->create(['slug' => 'banaran']);

        $this->get('/Dusun/DusunBanaran')
            ->assertStatus(301)
            ->assertRedirect('/dusun/banaran');
    }

    public function test_route_is_named(): void
    {
        Hamlet::factory()->create(['slug' => 'banaran']);

        $this->assertSame(
            config('app.url').'/dusun/banaran',
            route('hamlets.show', 'banaran')
        );
    }
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `php83 artisan test --filter=HamletPageTest`
Expected: FAIL — `/dusun/banaran` mengembalikan 404.

- [ ] **Step 3: Buat controller**

Buat `app/Http/Controllers/HamletController.php`:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Hamlet;
use Inertia\Inertia;
use Inertia\Response;

class HamletController extends Controller
{
    public function show(Hamlet $hamlet): Response
    {
        abort_unless($hamlet->is_published, 404);

        return Inertia::render('Dusun/Show', [
            'title' => 'Profil '.$hamlet->name,
            'description' => 'Profil '.$hamlet->name.' Desa Tajuk',
            'hamlet' => [
                'name' => $hamlet->name,
                'heroHeadline' => $hamlet->hero_headline,
                'heroImage' => $hamlet->hero_image_src,
                'body' => $hamlet->body,
            ],
            'hamlets' => Hamlet::published()
                ->orderBy('sort_order')
                ->get()
                ->map(fn (Hamlet $item): array => [
                    'imageUrl' => $item->card_image_src,
                    'title' => $item->name,
                    'link' => '/dusun/'.$item->slug,
                ]),
        ]);
    }
}
```

- [ ] **Step 4: Daftarkan route dan pengalihan**

Pada `routes/web.php`, hapus kesebelas blok `Route::get('/Dusun/Dusun...')` beserta komentar `// Dusun` di atasnya, lalu tambahkan sebagai gantinya:

```php
Route::get('/dusun/{hamlet:slug}', [HamletController::class, 'show'])->name('hamlets.show');

Route::get('/Dusun/{legacy}', function (string $legacy) {
    return redirect()->route('hamlets.show', Str::slug(Str::after($legacy, 'Dusun')), 301);
});
```

Tambahkan import berikut di bagian atas berkas:

```php
use App\Http\Controllers\HamletController;
use Illuminate\Support\Str;
```

Pengalihan mekanis ini menangani kesebelas URL lama sekaligus: `DusunBanaran` menjadi `banaran`, `DusunKaliajeng` menjadi `kaliajeng`, dan seterusnya.

- [ ] **Step 5: Buat komponen PromoBanner**

Buat `resources/js/Components/PromoBanner.jsx`:

```jsx
import { Link } from "@inertiajs/react";

export default function PromoBanner() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 h-auto relative overflow-hidden rounded-lg">
            <img
                className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover rounded-lg transform transition-transform duration-500 hover:scale-110"
                src="https://drive.google.com/thumbnail?id=1XBEW_Q-5DtOiEYmfDFHe6-4oA2peGJt-&sz=w2000"
                alt="Pemandangan pegunungan Desa Tajuk"
            />

            <div className="absolute inset-0 mx-4 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg p-4">
                <span className="text-white text-center text-xs lg:text-2xl mb-4 tracking-wide">
                    Langit yang biru, gunung yang megah, dan dusun kaya budaya
                    menanti Anda untuk dijelajahi
                </span>
                <Link
                    href="/Paket"
                    className="btn bg-white text-black text-xs py-1 px-2 sm:text-sm sm:py-2 sm:px-4 rounded hover:scale-105 transition duration-200 font-sans"
                >
                    Lihat Paket
                </Link>
            </div>
        </div>
    );
}
```

- [ ] **Step 6: Buat template Dusun/Show.jsx**

Buat `resources/js/Pages/Dusun/Show.jsx`:

```jsx
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import PromoBanner from "@/Components/PromoBanner";
import Dusun from "@/Components/Dusun";

export default function Show({ title, hamlet, hamlets }) {
    return (
        <div className="w-full h-full bg-white text-lg lg:text-xl flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25">
            <Head title={title} />
            <Navbar />

            <div className="w-full relative">
                <img
                    className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
                    src={hamlet.heroImage}
                    alt={`Pemandangan ${hamlet.name}`}
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full text-center">
                    <h1 className="lg:text-4xl text-xl font-bold">
                        {hamlet.heroHeadline}
                    </h1>
                </div>
            </div>

            <div
                className="w-full max-w-6xl mx-auto px-6 md:px-8 text-justify space-y-6 leading-relaxed text-black"
                dangerouslySetInnerHTML={{ __html: hamlet.body }}
            />

            <PromoBanner />

            <div className="w-full h-full">
                <Dusun hamlets={hamlets} />
            </div>

            <Footer />
        </div>
    );
}
```

`dangerouslySetInnerHTML` dipakai karena `body` berisi HTML yang dihasilkan RichEditor Filament dan hanya dapat disunting admin terautentikasi — bukan masukan dari publik.

- [ ] **Step 7: Ubah Components/Dusun.jsx menjadi berbasis data**

Pada `resources/js/Components/Dusun.jsx`, hapus seluruh deklarasi `const cards = [...]` yang ditulis manual, lalu ubah tanda tangan komponen:

```jsx
const Dusun = ({ hamlets = [] }) => {
    const cards = hamlets;
```

Menyalin props ke variabel `cards` membuat seluruh bagian render di bawahnya — yang sudah memakai `cards.map(...)` dengan field `imageUrl`, `title`, dan `link` — tidak perlu disentuh sama sekali. Ini penyesuaian sengaja untuk menekan risiko pada berkas 154 baris.

Verifikasi tidak ada sisa data yang ditulis manual:

```bash
grep -n "drive.google.com" resources/js/Components/Dusun.jsx
```

Keluaran harus kosong.

- [ ] **Step 8: Perbarui tautan dusun di Navbar**

Pada `resources/js/Components/Navbar.jsx`, ganti setiap `href="/Dusun/DusunX"` menjadi `href="/dusun/x"` dengan slug huruf kecil, misalnya `/Dusun/DusunBanaran` menjadi `/dusun/banaran`. Jalankan perintah berikut untuk memastikan tidak ada yang tertinggal:

```bash
grep -rn "/Dusun/Dusun" resources/js --include=*.jsx
```

Keluaran harus kosong.

- [ ] **Step 9: Hapus 11 berkas halaman lama**

Lakukan hanya setelah Step 6 dan 7 selesai dan tes Step 10 lulus pada template baru.

```bash
rm resources/js/Pages/Dusun/DusunBanaran.jsx \
   resources/js/Pages/Dusun/DusunCingklok.jsx \
   resources/js/Pages/Dusun/DusunGedong.jsx \
   resources/js/Pages/Dusun/DusunKaliajeng.jsx \
   resources/js/Pages/Dusun/DusunMacanan.jsx \
   resources/js/Pages/Dusun/DusunNgaduman.jsx \
   resources/js/Pages/Dusun/DusunNgroto.jsx \
   resources/js/Pages/Dusun/DusunPulihan.jsx \
   resources/js/Pages/Dusun/DusunPuyang.jsx \
   resources/js/Pages/Dusun/DusunSokowolu.jsx \
   resources/js/Pages/Dusun/DusunTajuk.jsx
```

- [ ] **Step 10: Run test to verify it passes**

Run: `php83 artisan test --filter=HamletPageTest`
Expected: PASS — lima tes lulus.

- [ ] **Step 11: Bangun aset dan periksa manual**

Run: `npm run build`
Expected: Build sukses tanpa modul yang hilang.

Jalankan `php83 artisan serve`, buka `/dusun/banaran`, dan pastikan gambar hero, judul, seluruh paragraf, banner, serta carousel kartu tampil. Buka `/Dusun/DusunBanaran` dan pastikan dialihkan ke URL baru.

- [ ] **Step 12: Commit** *(minta izin user lebih dulu)*

```bash
./vendor/bin/pint app routes
git add -A
git commit -m "feat: render halaman dusun dari database"
```

---

### Task 4: Tabel `destinations` dan panel destinasi

Bentuknya lebih kaya daripada dusun: jam buka, harga tiket, dua blok penjelasan, daftar fasilitas berikon, dan koordinat peta. Ngaduman tidak punya jam buka maupun harga, sehingga kolom-kolom itu nullable.

**Files:**
- Create: `database/migrations/2026_08_07_000005_create_destinations_table.php`
- Create: `app/Models/Destination.php`
- Create: `database/factories/DestinationFactory.php`
- Create: `app/Filament/Resources/DestinationResource.php`
- Create: `app/Filament/Resources/DestinationResource/Pages/ListDestinations.php`
- Create: `app/Filament/Resources/DestinationResource/Pages/CreateDestination.php`
- Create: `app/Filament/Resources/DestinationResource/Pages/EditDestination.php`
- Test: `tests/Feature/DestinationTest.php`

**Interfaces:**
- Consumes: Trait `HasDualImage` dari Task 1.
- Produces:
  - Tabel `destinations` dengan kolom `slug`, `name`, `hero_headline`, `hero_tagline`, `hero_image_path`, `hero_image_url`, `intro`, `gallery_image_path`, `gallery_image_url`, `open_days`, `open_hours`, `ticket_price`, `about`, `main_attraction`, `facilities`, `latitude`, `longitude`, `card_image_path`, `card_image_url`, `sort_order`, `is_published`.
  - `App\Models\Destination` dengan accessor `hero_image_src`, `gallery_image_src`, `card_image_src`, cast `facilities` menjadi array, dan scope `published()`.
  - Struktur tiap entri `facilities`: `['icon' => 'fa-solid fa-mosque', 'label' => 'Mushola']`.

- [ ] **Step 1: Write the failing test**

Buat `tests/Feature/DestinationTest.php`:

```php
<?php

namespace Tests\Feature;

use App\Models\Destination;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DestinationTest extends TestCase
{
    use RefreshDatabase;

    public function test_facilities_are_stored_as_an_array(): void
    {
        $destination = Destination::factory()->create([
            'facilities' => [
                ['icon' => 'fa-solid fa-mosque', 'label' => 'Mushola'],
                ['icon' => 'fa-solid fa-restroom', 'label' => 'Toilet Umum'],
            ],
        ]);

        $this->assertIsArray($destination->fresh()->facilities);
        $this->assertSame('Mushola', $destination->fresh()->facilities[0]['label']);
    }

    public function test_optional_columns_may_be_empty(): void
    {
        $destination = Destination::factory()->create([
            'open_days' => null,
            'open_hours' => null,
            'ticket_price' => null,
        ]);

        $this->assertNull($destination->fresh()->open_days);
        $this->assertNull($destination->fresh()->ticket_price);
    }

    public function test_gallery_image_prefers_upload(): void
    {
        $destination = Destination::factory()->create([
            'gallery_image_path' => 'images/destinations/galeri.jpg',
            'gallery_image_url' => 'https://drive.google.com/thumbnail?id=ABC',
        ]);

        $this->assertSame(
            config('app.url').'/storage/images/destinations/galeri.jpg',
            $destination->gallery_image_src
        );
    }

    public function test_published_scope_hides_drafts(): void
    {
        Destination::factory()->count(2)->create();
        Destination::factory()->create(['is_published' => false]);

        $this->assertSame(2, Destination::published()->count());
    }

    public function test_admin_can_open_the_destination_list(): void
    {
        $admin = User::factory()->admin()->create();

        $this->actingAs($admin)->get('/admin/destinations')->assertSuccessful();
    }
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `php83 artisan test --filter=DestinationTest`
Expected: FAIL — `Class "App\Models\Destination" not found`.

- [ ] **Step 3: Buat migration**

Buat `database/migrations/2026_08_07_000005_create_destinations_table.php`:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('destinations', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('name');
            $table->text('hero_headline')->nullable();
            $table->text('hero_tagline')->nullable();
            $table->string('hero_image_path')->nullable();
            $table->string('hero_image_url')->nullable();
            $table->text('intro')->nullable();
            $table->string('gallery_image_path')->nullable();
            $table->string('gallery_image_url')->nullable();
            $table->string('open_days')->nullable();
            $table->string('open_hours')->nullable();
            $table->string('ticket_price')->nullable();
            $table->longText('about')->nullable();
            $table->longText('main_attraction')->nullable();
            $table->json('facilities')->nullable();
            $table->decimal('latitude', 10, 7)->nullable();
            $table->decimal('longitude', 10, 7)->nullable();
            $table->string('card_image_path')->nullable();
            $table->string('card_image_url')->nullable();
            $table->text('card_description')->nullable();
            $table->unsignedSmallInteger('sort_order')->default(0);
            $table->boolean('is_published')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('destinations');
    }
};
```

- [ ] **Step 4: Buat model Destination**

Buat `app/Models/Destination.php`:

```php
<?php

namespace App\Models;

use App\Models\Concerns\HasDualImage;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Destination extends Model
{
    use HasDualImage, HasFactory;

    protected $fillable = [
        'slug',
        'name',
        'hero_headline',
        'hero_tagline',
        'hero_image_path',
        'hero_image_url',
        'intro',
        'gallery_image_path',
        'gallery_image_url',
        'open_days',
        'open_hours',
        'ticket_price',
        'about',
        'main_attraction',
        'facilities',
        'latitude',
        'longitude',
        'card_image_path',
        'card_image_url',
        'card_description',
        'sort_order',
        'is_published',
    ];

    protected $casts = [
        'facilities' => 'array',
        'is_published' => 'boolean',
        'sort_order' => 'integer',
    ];

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('is_published', true);
    }

    protected function heroImageSrc(): Attribute
    {
        return Attribute::get(fn (): ?string => $this->resolveImage('hero_image_path', 'hero_image_url'));
    }

    protected function galleryImageSrc(): Attribute
    {
        return Attribute::get(fn (): ?string => $this->resolveImage('gallery_image_path', 'gallery_image_url'));
    }

    protected function cardImageSrc(): Attribute
    {
        return Attribute::get(fn (): ?string => $this->resolveImage('card_image_path', 'card_image_url'));
    }
}
```

- [ ] **Step 5: Buat DestinationFactory**

Buat `database/factories/DestinationFactory.php`:

```php
<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class DestinationFactory extends Factory
{
    public function definition(): array
    {
        $name = fake()->unique()->city();

        return [
            'slug' => Str::slug($name),
            'name' => 'Wisata '.$name,
            'hero_headline' => 'Selamat Datang di '.$name,
            'hero_tagline' => fake()->sentence(),
            'hero_image_path' => null,
            'hero_image_url' => null,
            'intro' => fake()->paragraph(),
            'gallery_image_path' => null,
            'gallery_image_url' => null,
            'open_days' => 'Setiap Hari',
            'open_hours' => '08:00 - 17:00',
            'ticket_price' => 'Rp 5.000,00',
            'about' => '<p>'.fake()->paragraph().'</p>',
            'main_attraction' => '<p>'.fake()->paragraph().'</p>',
            'facilities' => [['icon' => 'fa-solid fa-restroom', 'label' => 'Toilet Umum']],
            'latitude' => -7.4,
            'longitude' => 110.45,
            'card_image_path' => null,
            'card_image_url' => null,
            'card_description' => fake()->sentence(),
            'sort_order' => 0,
            'is_published' => true,
        ];
    }
}
```

- [ ] **Step 6: Buat sumber daya Filament**

Buat `app/Filament/Resources/DestinationResource.php`:

```php
<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DestinationResource\Pages;
use App\Models\Destination;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class DestinationResource extends Resource
{
    protected static ?string $model = Destination::class;

    protected static ?string $navigationIcon = 'heroicon-o-map-pin';

    protected static ?string $modelLabel = 'Destinasi';

    protected static ?string $pluralModelLabel = 'Destinasi';

    protected static ?string $navigationLabel = 'Destinasi';

    protected static ?string $navigationGroup = 'Konten';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Identitas')
                    ->schema([
                        TextInput::make('name')->label('Nama destinasi')->required()->maxLength(255),
                        TextInput::make('slug')->label('Slug URL')->required()->unique(ignoreRecord: true)->maxLength(255),
                        Textarea::make('hero_headline')->label('Judul di gambar utama')->rows(2),
                        Textarea::make('hero_tagline')->label('Kalimat pendukung')->rows(2),
                        Textarea::make('intro')->label('Paragraf pengantar')->rows(4),
                    ]),
                Section::make('Informasi Kunjungan')
                    ->schema([
                        TextInput::make('open_days')->label('Hari buka')->maxLength(255),
                        TextInput::make('open_hours')->label('Jam buka')->maxLength(255),
                        TextInput::make('ticket_price')->label('Harga tiket masuk')->maxLength(255),
                    ]),
                Section::make('Penjelasan')
                    ->schema([
                        RichEditor::make('about')->label('Tentang destinasi')->columnSpanFull(),
                        RichEditor::make('main_attraction')->label('Daya tarik utama')->columnSpanFull(),
                    ]),
                Repeater::make('facilities')
                    ->label('Fasilitas')
                    ->schema([
                        TextInput::make('icon')
                            ->label('Kelas ikon')
                            ->default('fa-solid fa-circle-check')
                            ->helperText('Contoh: fa-solid fa-mosque'),
                        TextInput::make('label')->label('Nama fasilitas')->required(),
                    ])
                    ->columns(2)
                    ->defaultItems(0)
                    ->columnSpanFull(),
                Section::make('Lokasi Peta')
                    ->schema([
                        TextInput::make('latitude')->label('Lintang')->numeric(),
                        TextInput::make('longitude')->label('Bujur')->numeric(),
                    ]),
                Section::make('Gambar')
                    ->schema([
                        FileUpload::make('hero_image_path')
                            ->label('Unggah gambar utama')
                            ->image()->disk('public')->directory('images/destinations')
                            ->maxSize(2048)->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp'])
                            ->imageResizeMode('contain')->imageResizeTargetWidth('1920')->imageResizeTargetHeight('1920'),
                        TextInput::make('hero_image_url')->label('Atau tautan gambar utama')->url()->maxLength(2048),
                        FileUpload::make('gallery_image_path')
                            ->label('Unggah gambar galeri')
                            ->image()->disk('public')->directory('images/destinations')
                            ->maxSize(2048)->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp'])
                            ->imageResizeMode('contain')->imageResizeTargetWidth('1920')->imageResizeTargetHeight('1920'),
                        TextInput::make('gallery_image_url')->label('Atau tautan gambar galeri')->url()->maxLength(2048),
                        FileUpload::make('card_image_path')
                            ->label('Unggah gambar kartu')
                            ->image()->disk('public')->directory('images/destinations')
                            ->maxSize(2048)->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp'])
                            ->imageResizeMode('contain')->imageResizeTargetWidth('1920')->imageResizeTargetHeight('1920'),
                        TextInput::make('card_image_url')->label('Atau tautan gambar kartu')->url()->maxLength(2048),
                        Textarea::make('card_description')
                            ->label('Keterangan singkat pada kartu dan peta')
                            ->rows(2),
                    ]),
                TextInput::make('sort_order')->label('Urutan tampil')->numeric()->default(0),
                Toggle::make('is_published')->label('Tampilkan di situs')->default(true),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('sort_order')->label('Urutan')->sortable(),
                TextColumn::make('name')->label('Nama')->searchable(),
                TextColumn::make('slug')->label('Slug'),
                IconColumn::make('is_published')->label('Tampil')->boolean(),
            ])
            ->defaultSort('sort_order')
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDestinations::route('/'),
            'create' => Pages\CreateDestination::route('/create'),
            'edit' => Pages\EditDestination::route('/{record}/edit'),
        ];
    }
}
```

- [ ] **Step 7: Buat tiga halaman sumber daya**

Buat `app/Filament/Resources/DestinationResource/Pages/ListDestinations.php`:

```php
<?php

namespace App\Filament\Resources\DestinationResource\Pages;

use App\Filament\Resources\DestinationResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListDestinations extends ListRecords
{
    protected static string $resource = DestinationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
```

Buat `app/Filament/Resources/DestinationResource/Pages/CreateDestination.php`:

```php
<?php

namespace App\Filament\Resources\DestinationResource\Pages;

use App\Filament\Resources\DestinationResource;
use Filament\Resources\Pages\CreateRecord;

class CreateDestination extends CreateRecord
{
    protected static string $resource = DestinationResource::class;
}
```

Buat `app/Filament/Resources/DestinationResource/Pages/EditDestination.php`:

```php
<?php

namespace App\Filament\Resources\DestinationResource\Pages;

use App\Filament\Resources\DestinationResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditDestination extends EditRecord
{
    protected static string $resource = DestinationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
```

- [ ] **Step 8: Jalankan migration**

Run: `php83 artisan migrate`
Expected: Migration `create_destinations_table` berhasil.

- [ ] **Step 9: Run test to verify it passes**

Run: `php83 artisan test --filter=DestinationTest`
Expected: PASS — lima tes lulus.

- [ ] **Step 10: Commit** *(minta izin user lebih dulu)*

```bash
./vendor/bin/pint app database
git add -A
git commit -m "feat: tambah tabel dan panel destinasi"
```

---

### Task 5: Seeder isi 4 destinasi

**Files:**
- Create: `database/seeders/DestinationSeeder.php`
- Modify: `database/seeders/DatabaseSeeder.php`
- Test: `tests/Feature/DestinationSeederTest.php`

**Interfaces:**
- Consumes: Model `Destination` dari Task 4.
- Produces: 4 baris pada tabel `destinations` dengan slug `dung-kluruk`, `sokowolu`, `ngaduman`, `gedong-pass`, berkoordinat sama dengan array pada `resources/js/Components/Destinasi.jsx`.

- [ ] **Step 1: Write the failing test**

Buat `tests/Feature/DestinationSeederTest.php`:

```php
<?php

namespace Tests\Feature;

use App\Models\Destination;
use Database\Seeders\DestinationSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DestinationSeederTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_seeds_four_destinations(): void
    {
        $this->seed(DestinationSeeder::class);

        $this->assertSame(4, Destination::count());
    }

    public function test_every_destination_has_coordinates_and_images(): void
    {
        $this->seed(DestinationSeeder::class);

        foreach (Destination::all() as $destination) {
            $this->assertNotNull($destination->latitude, "Lintang kosong: {$destination->slug}");
            $this->assertNotNull($destination->longitude, "Bujur kosong: {$destination->slug}");
            $this->assertNotNull($destination->hero_image_src, "Gambar hero kosong: {$destination->slug}");
            $this->assertNotEmpty($destination->facilities, "Fasilitas kosong: {$destination->slug}");
        }
    }

    public function test_seeding_twice_does_not_duplicate(): void
    {
        $this->seed(DestinationSeeder::class);
        $this->seed(DestinationSeeder::class);

        $this->assertSame(4, Destination::count());
    }

    public function test_ngaduman_may_lack_visiting_information(): void
    {
        $this->seed(DestinationSeeder::class);

        $ngaduman = Destination::where('slug', 'ngaduman')->firstOrFail();

        $this->assertNull($ngaduman->ticket_price);
    }

    public function test_dung_kluruk_description_is_not_about_gedong_pass(): void
    {
        $this->seed(DestinationSeeder::class);

        $dungKluruk = Destination::where('slug', 'dung-kluruk')->firstOrFail();

        $this->assertStringNotContainsString('G-Pass', $dungKluruk->about);
    }
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `php83 artisan test --filter=DestinationSeederTest`
Expected: FAIL — `Class "Database\Seeders\DestinationSeeder" not found`.

- [ ] **Step 3: Kumpulkan isi dari berkas JSX lama**

Untuk setiap berkas `resources/js/Pages/Destinasi/*.jsx`, catat nilainya:

| Nilai | Letak di berkas JSX |
|---|---|
| `hero_headline` | `<h1>` di blok hero, contoh "Selamat Datang di Dungkluruk" |
| `hero_tagline` | `<p>` tepat di bawah `<h1>` hero |
| `hero_image_url` | `src` gambar pertama |
| `intro` | Paragraf panjang pada blok dua kolom setelah hero |
| `gallery_image_url` | `src` gambar pada blok dua kolom yang bertautan ke `/Informasi/Gallery` |
| `open_days`, `open_hours`, `ticket_price` | Baris "Buka:", "Waktu:", dan "Harga Tiket Masuk:" |
| `about` | Paragraf di bawah judul "Tentang Destinasi:" |
| `main_attraction` | Paragraf di bawah judul "Daya Tarik Utama:" |
| `facilities` | Setiap baris berikon di bawah "Fasilitas:", ambil kelas `<i className="...">` dan teksnya |
| `latitude`, `longitude` | Field `lat` dan `lng` pada array `destinations` di `resources/js/Components/Destinasi.jsx` baris 9–46 |
| `card_image_url` | Field `image` pada array yang sama |
| `card_description` | Field `description` pada array yang sama — blurb pendek untuk kartu dan popup peta, berbeda dari `intro` |

**Perbaiki dua cacat berikut alih-alih menyalinnya:**

1. Kolom `about` untuk `dung-kluruk` pada berkas lama berisi teks tentang G-Pass. Tulis ulang secara singkat berdasarkan isi halaman DungKluruk yang benar — jam buka 08:00–17:00 dan tiket Rp 5.000,00 — dan jangan menyebut G-Pass. Ini yang diuji `test_dung_kluruk_description_is_not_about_gedong_pass`.
2. Ngaduman tidak punya baris "Buka:", "Waktu:", maupun "Harga Tiket Masuk:". Biarkan ketiga kolomnya `null`; jangan mengarang nilai.

- [ ] **Step 4: Buat seeder**

Buat `database/seeders/DestinationSeeder.php` dengan bentuk berikut, diisi keempat destinasi memakai nilai dari Step 3:

```php
<?php

namespace Database\Seeders;

use App\Models\Destination;
use Illuminate\Database\Seeder;

class DestinationSeeder extends Seeder
{
    public function run(): void
    {
        foreach ($this->destinations() as $order => $destination) {
            Destination::updateOrCreate(
                ['slug' => $destination['slug']],
                [...$destination, 'sort_order' => $order, 'is_published' => true]
            );
        }
    }

    private function destinations(): array
    {
        return [
            [
                'slug' => 'dung-kluruk',
                'name' => 'Wisata Dung Kluruk',
                'hero_headline' => 'Selamat Datang di Dungkluruk',
                'hero_tagline' => 'Dung Kluruk menjadi destinasi wisata alam yang instragamable dan siap memanjakan mata kamu.',
                'hero_image_url' => 'https://drive.google.com/thumbnail?id=1tkS1gi8WDwDTXSOlzDkJrI2cvFKT173J&sz=w2000',
                'gallery_image_url' => 'https://drive.google.com/thumbnail?id=1_J3VAXJ5anX7IdwBPsvbI6kNDGV9CQXg&sz=w2000',
                'open_days' => 'Setiap Hari',
                'open_hours' => '08:00 - 17:00',
                'ticket_price' => 'Rp 5.000,00',
                'facilities' => [
                    ['icon' => 'fa-solid fa-mosque', 'label' => 'Mushola'],
                    ['icon' => 'fa-solid fa-couch', 'label' => 'Tempat Istirahat dan Bersantai'],
                    ['icon' => 'fa-solid fa-tree', 'label' => 'Area Piknik'],
                    ['icon' => 'fa-solid fa-restroom', 'label' => 'Toilet Umum'],
                    ['icon' => 'fa-solid fa-car', 'label' => 'Area Parkir'],
                    ['icon' => 'fa-solid fa-campground', 'label' => 'Area Camping'],
                ],
                'latitude' => -7.396035596890162,
                'longitude' => 110.45180818000935,
                'card_image_url' => 'https://drive.google.com/thumbnail?id=1tkS1gi8WDwDTXSOlzDkJrI2cvFKT173J&sz=w2000',
                'card_description' => 'Dung Kluruk menjadi destinasi wisata alam yang instragamable dan siap memanjakan mata kamu.',
            ],
        ];
    }
}
```

- [ ] **Step 5: Daftarkan seeder**

Pada `database/seeders/DatabaseSeeder.php`, ubah method `run` menjadi:

```php
    public function run(): void
    {
        $this->call([
            HamletSeeder::class,
            DestinationSeeder::class,
        ]);
    }
```

- [ ] **Step 6: Run test to verify it passes**

Run: `php83 artisan test --filter=DestinationSeederTest`
Expected: PASS — lima tes lulus.

- [ ] **Step 7: Jalankan seeder pada database pengembangan**

Run: `php83 artisan db:seed --class=DestinationSeeder`
Expected: 4 baris masuk ke tabel `destinations`.

- [ ] **Step 8: Commit** *(minta izin user lebih dulu)*

```bash
./vendor/bin/pint database
git add -A
git commit -m "feat: pindahkan isi 4 destinasi ke database"
```

---

### Task 6: Halaman destinasi berbasis data

**Files:**
- Create: `app/Http/Controllers/DestinationController.php`
- Create: `resources/js/Pages/Destinasi/Show.jsx`
- Modify: `resources/js/Components/Destinasi.jsx`
- Modify: `resources/js/Components/Navbar.jsx`
- Modify: `routes/web.php`
- Delete: 4 berkas `resources/js/Pages/Destinasi/*.jsx` lama
- Test: `tests/Feature/DestinationPageTest.php`

**Interfaces:**
- Consumes: Model `Destination` dan seeder dari Task 4 dan 5, komponen `PromoBanner` dari Task 3.
- Produces:
  - Route bernama `destinations.show` pada `/destinasi/{destination:slug}`.
  - Props `Destinasi/Show.jsx`: `title`, `description`, `destination` (objek lengkap termasuk `facilities`), `destinations` (array `{name, slug, cardImage, latitude, longitude}`).

- [ ] **Step 1: Write the failing test**

Buat `tests/Feature/DestinationPageTest.php`:

```php
<?php

namespace Tests\Feature;

use App\Models\Destination;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DestinationPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_published_destination_page_renders(): void
    {
        Destination::factory()->create(['slug' => 'dung-kluruk']);

        $this->get('/destinasi/dung-kluruk')->assertOk();
    }

    public function test_unpublished_destination_returns_not_found(): void
    {
        Destination::factory()->create(['slug' => 'dung-kluruk', 'is_published' => false]);

        $this->get('/destinasi/dung-kluruk')->assertNotFound();
    }

    public function test_legacy_urls_redirect_permanently(): void
    {
        Destination::factory()->create(['slug' => 'dung-kluruk']);
        Destination::factory()->create(['slug' => 'gedong-pass']);

        $this->get('/Destinasi/DungKluruk')
            ->assertStatus(301)
            ->assertRedirect('/destinasi/dung-kluruk');

        $this->get('/Destinasi/GPass')
            ->assertStatus(301)
            ->assertRedirect('/destinasi/gedong-pass');
    }

    public function test_route_is_named(): void
    {
        Destination::factory()->create(['slug' => 'dung-kluruk']);

        $this->assertSame(
            config('app.url').'/destinasi/dung-kluruk',
            route('destinations.show', 'dung-kluruk')
        );
    }
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `php83 artisan test --filter=DestinationPageTest`
Expected: FAIL — `/destinasi/dung-kluruk` mengembalikan 404.

- [ ] **Step 3: Buat controller**

Buat `app/Http/Controllers/DestinationController.php`:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Destination;
use Inertia\Inertia;
use Inertia\Response;

class DestinationController extends Controller
{
    public function show(Destination $destination): Response
    {
        abort_unless($destination->is_published, 404);

        return Inertia::render('Destinasi/Show', [
            'title' => $destination->name,
            'description' => 'Selamat Datang di '.$destination->name.', Tajuk, Getasan',
            'destination' => [
                'name' => $destination->name,
                'heroHeadline' => $destination->hero_headline,
                'heroTagline' => $destination->hero_tagline,
                'heroImage' => $destination->hero_image_src,
                'intro' => $destination->intro,
                'galleryImage' => $destination->gallery_image_src,
                'openDays' => $destination->open_days,
                'openHours' => $destination->open_hours,
                'ticketPrice' => $destination->ticket_price,
                'about' => $destination->about,
                'mainAttraction' => $destination->main_attraction,
                'facilities' => $destination->facilities ?? [],
            ],
            'destinations' => Destination::published()
                ->orderBy('sort_order')
                ->get()
                ->map(fn (Destination $item): array => [
                    'title' => $item->name,
                    'lat' => (float) $item->latitude,
                    'lng' => (float) $item->longitude,
                    'image' => $item->card_image_src,
                    'description' => $item->card_description,
                    'link' => '/destinasi/'.$item->slug,
                ]),
        ]);
    }
}
```

- [ ] **Step 4: Daftarkan route dan pengalihan**

Pada `routes/web.php`, hapus keempat blok `Route::get('/Destinasi/...')` beserta komentar `// Destinasi` di atasnya, lalu tambahkan:

```php
Route::get('/destinasi/{destination:slug}', [DestinationController::class, 'show'])->name('destinations.show');

Route::redirect('/Destinasi/DungKluruk', '/destinasi/dung-kluruk', 301);
Route::redirect('/Destinasi/Sokowolu', '/destinasi/sokowolu', 301);
Route::redirect('/Destinasi/Ngaduman', '/destinasi/ngaduman', 301);
Route::redirect('/Destinasi/GPass', '/destinasi/gedong-pass', 301);
```

Tambahkan import `use App\Http\Controllers\DestinationController;` di bagian atas berkas.

Pengalihan ditulis satu per satu, tidak mekanis seperti dusun, karena `GPass` tidak dapat diturunkan menjadi `gedong-pass` secara otomatis.

- [ ] **Step 5: Buat template Destinasi/Show.jsx**

Buat `resources/js/Pages/Destinasi/Show.jsx`:

```jsx
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import PromoBanner from "@/Components/PromoBanner";

export default function Show({ title, destination }) {
    return (
        <>
            <Head title={title}>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                />
            </Head>
            <Navbar />

            <div className="w-full relative">
                <img
                    className="w-full h-[350px] lg:h-[400px] object-cover"
                    src={destination.heroImage}
                    alt={destination.name}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-45">
                    <div className="text-center text-white px-10">
                        <h1 className="text-xl md:text-5xl font-bold mb-4 drop-shadow">
                            {destination.heroHeadline}
                        </h1>
                        <p className="text-sm md:text-xl">
                            {destination.heroTagline}
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white flex flex-col items-center gap-14 md:gap-20 pt-10">
                <div className="w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
                    <p className="w-full lg:w-1/2 text-black text-sm md:text-xl">
                        {destination.intro}
                    </p>
                    <div className="w-full lg:w-1/2 relative">
                        <img
                            className="w-full h-40 lg:h-80 object-cover rounded-[20px]"
                            src={destination.galleryImage}
                            alt={`Galeri ${destination.name}`}
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white py-2 px-4 rounded-full">
                            <Link
                                className="font-semibold text-black text-xs md:text-lg"
                                href="/Informasi/Gallery"
                            >
                                Lihat Semua Galeri
                            </Link>
                        </div>
                    </div>
                </div>

                <PromoBanner />

                <div className="w-full max-w-6xl mx-auto px-6 text-black text-xl">
                    <h1 className="text-4xl lg:text-7xl text-center font-bold mb-5 lg:mb-20 text-primary">
                        {destination.name}
                    </h1>

                    {destination.openDays && (
                        <p className="mb-4 text-sm lg:text-xl">
                            Buka: {destination.openDays}
                            <br />
                            Waktu: {destination.openHours}
                        </p>
                    )}

                    {destination.ticketPrice && (
                        <h2 className="text-sm lg:text-xl font-semibold mb-2">
                            Harga Tiket Masuk: {destination.ticketPrice}
                        </h2>
                    )}

                    {destination.about && (
                        <>
                            <h2 className="text-sm lg:text-xl font-semibold mb-2 mt-8">
                                Tentang Destinasi:
                            </h2>
                            <div
                                className="mb-4 text-sm lg:text-xl"
                                dangerouslySetInnerHTML={{
                                    __html: destination.about,
                                }}
                            />
                        </>
                    )}

                    {destination.mainAttraction && (
                        <>
                            <h2 className="text-sm lg:text-xl font-semibold mb-2 mt-8">
                                Daya Tarik Utama:
                            </h2>
                            <div
                                className="mb-4 text-sm lg:text-xl"
                                dangerouslySetInnerHTML={{
                                    __html: destination.mainAttraction,
                                }}
                            />
                        </>
                    )}

                    {destination.facilities.length > 0 && (
                        <>
                            <h2 className="text-xl lg:text-2xl font-semibold mb-2 mt-8">
                                Fasilitas:
                            </h2>
                            <div className="flex flex-col space-y-2">
                                {destination.facilities.map((facility) => (
                                    <div
                                        key={facility.label}
                                        className="flex items-center"
                                    >
                                        <i className={`${facility.icon} mr-6`} />
                                        {facility.label}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <Footer />
            </div>
        </>
    );
}
```

- [ ] **Step 6: Ubah Components/Destinasi.jsx menjadi berbasis data**

Pada `resources/js/Components/Destinasi.jsx`, hapus seluruh deklarasi `const destinations = [...]` pada baris 9–46, lalu ubah tanda tangan komponen agar menerima array itu sebagai props:

```jsx
const Destinasi = ({ destinations = [] }) => {
```

Bentuk props sengaja dibuat sama persis dengan array yang dihapus — `title`, `lat`, `lng`, `image`, `description`, `link` — sehingga seluruh bagian render di bawahnya, termasuk `destinations.map` untuk penanda peta, `groupedDestinations`, dan `truncateDescription`, tidak perlu disentuh sama sekali.

Perhatikan bahwa `groupedDestinations` dan pengelompokan slide dihitung dari `destinations`. Bila perhitungan itu berada di luar badan komponen, pindahkan ke dalamnya agar ikut membaca props.

Verifikasi tidak ada sisa data yang ditulis manual:

```bash
grep -n "drive.google.com\|lat:" resources/js/Components/Destinasi.jsx
```

Keluaran harus kosong.

- [ ] **Step 7: Perbarui tautan destinasi di Navbar**

Pada `resources/js/Components/Navbar.jsx`, ganti `/Destinasi/DungKluruk` menjadi `/destinasi/dung-kluruk`, `/Destinasi/Sokowolu` menjadi `/destinasi/sokowolu`, `/Destinasi/Ngaduman` menjadi `/destinasi/ngaduman`, dan `/Destinasi/GPass` menjadi `/destinasi/gedong-pass`.

Verifikasi:

```bash
grep -rn "/Destinasi/" resources/js --include=*.jsx
```

Keluaran harus kosong.

- [ ] **Step 8: Hapus 4 berkas halaman lama**

```bash
rm resources/js/Pages/Destinasi/DungKluruk.jsx \
   resources/js/Pages/Destinasi/GPass.jsx \
   resources/js/Pages/Destinasi/Ngaduman.jsx \
   resources/js/Pages/Destinasi/Sokowolu.jsx
```

- [ ] **Step 9: Run test to verify it passes**

Run: `php83 artisan test --filter=DestinationPageTest`
Expected: PASS — empat tes lulus.

- [ ] **Step 10: Pastikan seluruh suite dan build hijau**

Run: `php83 artisan test`
Expected: Semua tes lulus.

Run: `npm run build`
Expected: Build sukses tanpa modul yang hilang.

- [ ] **Step 11: Periksa manual**

Jalankan `php83 artisan serve`, buka `/destinasi/dung-kluruk` dan `/destinasi/ngaduman`. Pastikan Ngaduman tidak menampilkan blok jam buka maupun harga tiket, sedangkan Dung Kluruk menampilkannya. Pastikan ikon fasilitas tampil dan peta pada daftar destinasi menunjukkan empat penanda di posisi yang benar.

- [ ] **Step 12: Commit** *(minta izin user lebih dulu)*

```bash
./vendor/bin/pint app routes
git add -A
git commit -m "feat: render halaman destinasi dari database"
```

---

## Verifikasi akhir Fase 2

- [ ] `php83 artisan test` — seluruh suite hijau
- [ ] `npm run build` — sukses
- [ ] `grep -rn "/Dusun/Dusun\|/Destinasi/" resources/js --include=*.jsx` — keluaran kosong
- [ ] 15 berkas halaman lama terhapus, digantikan `Dusun/Show.jsx` dan `Destinasi/Show.jsx`
- [ ] Admin dapat mengubah nama, isi, dan gambar dusun lewat `/admin/hamlets` dan perubahannya langsung tampil
- [ ] URL lama `/Dusun/DusunBanaran` dan `/Destinasi/GPass` mengembalikan 301 ke URL baru
- [ ] `routes/web.php` tidak lagi memuat closure untuk dusun maupun destinasi

Setelah fase ini, sisa closure di `routes/web.php` tinggal halaman statis. `php artisan route:cache` baru dapat diaktifkan setelah seluruhnya berpindah ke controller — dikerjakan pada Fase 5.
