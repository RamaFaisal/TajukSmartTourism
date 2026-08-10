# Fase 1 — Fondasi CMS Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Membangun pola CMS yang dipakai ulang seluruh fase berikutnya — panel berbahasa Indonesia, kolom gambar dua mode, tabel pengaturan situs, dan artikel yang tertata.

**Architecture:** Panel Filament dialihkan ke bahasa Indonesia lewat locale aplikasi, memanfaatkan terjemahan yang sudah dibawa Filament. Setiap gambar disimpan dalam dua kolom terpisah — `image_path` untuk berkas terunggah dan `image_url` untuk tautan Google Drive yang sudah ada — dengan satu accessor yang memutuskan mana yang dipakai. Pengaturan situs memakai tabel satu baris dengan halaman Filament khusus, tanpa paket pihak ketiga.

**Tech Stack:** PHP 8.3, Laravel 10, Filament 3, Livewire 3, PHPUnit 10.

**Spec:** [docs/superpowers/specs/2026-08-06-tajuk-smart-tourism-v2-prd.md](../specs/2026-08-06-tajuk-smart-tourism-v2-prd.md) — Fase 1 pada Bagian 11, dengan detail pada Bagian 8 dan 9.4.

**Ditunda dari Fase 1:** Railway Volume. Bergantung pada Task 9 Fase 0 yang ditahan user. Unggahan dikerjakan dan diuji di disk lokal; volume baru relevan saat aplikasi berjalan di Railway.

## Global Constraints

- **Jangan menjalankan `git commit` tanpa izin eksplisit dari user.** Langkah commit ditulis lengkap, tetapi berhenti dan minta izin lebih dulu. (CLAUDE.md § Rules 3)
- **Jalankan setiap perintah PHP dengan `php83`, bukan `php`.** Herd menyetel PHP 8.4 sebagai default, sedangkan `inertiajs/inertia-laravel` dan `openspout/openspout` mensyaratkan maksimal PHP 8.3.
- **Format pesan commit: Conventional Commits** — `feat:`, `fix:`, `chore:`, `refactor:`, `test:`.
- **Tidak ada penyebutan Claude, AI, atau co-author generatif** di kode maupun pesan commit. (CLAUDE.md § Rules 1)
- **Tidak menulis komentar di kode.** (CLAUDE.md § Rules 2)
- **Prinsip: KISS, YAGNI, DRY, FAIL FAST, Readability > Cleverness.** (CLAUDE.md § Rules 4)
- **Penamaan tabel dan kolom dalam bahasa Inggris; seluruh teks yang dilihat pengguna dalam bahasa Indonesia.** (PRD keputusan D6)
- **Batas unggahan: 2 MB, lebar maksimum 1920 px, format JPG/PNG/WebP.** (PRD Bagian 9.4)
- **Jalankan `./vendor/bin/pint` pada berkas yang disentuh sebelum commit.**

## Keadaan awal yang sudah diverifikasi

- `doctrine/dbal` terpasang, sehingga `renameColumn` dapat dipakai di Laravel 10.
- Tabel `articles`, `contact_messages`, dan `users` kosong kecuali satu akun admin. Tidak ada data yang berisiko.
- Filament membawa terjemahan Indonesia lengkap untuk kelima paketnya di `vendor/filament/*/resources/lang/id`.
- Tidak ada paket settings pihak ketiga. Tabel pengaturan dibangun sendiri.

---

### Task 1: Panel Filament berbahasa Indonesia

**Files:**
- Modify: `config/app.php:86` (`locale`), `config/app.php:112` (`faker_locale`)
- Create: `lang/id/validation.php`
- Modify: `app/Filament/Resources/ArticleResource.php`
- Modify: `app/Filament/Resources/ContactMessageResource.php`
- Test: `tests/Feature/Filament/PanelLocaleTest.php`

**Interfaces:**
- Consumes: —
- Produces: `config('app.locale') === 'id'`. Seluruh label sumber daya Filament berbahasa Indonesia. Task berikutnya menulis label form dalam bahasa Indonesia mengikuti pola ini.

Laravel tidak membawa terjemahan validasi bahasa Indonesia. Karena `fallback_locale` bernilai `en`, kunci yang tidak ada di `lang/id/validation.php` otomatis jatuh ke bahasa Inggris — jadi berkas parsial berisi aturan yang benar-benar dipakai sudah cukup, tanpa perlu menerjemahkan seluruh berkas validasi Laravel.

Perubahan locale ini juga memperbaiki situs publik: `app.blade.php` merender `lang="{{ str_replace('_', '-', app()->getLocale()) }}"`, yang selama ini menghasilkan `lang="en"` pada halaman berbahasa Indonesia. Setelah perubahan, nilainya menjadi `lang="id"` — benar bagi pembaca layar dan mesin pencari.

- [ ] **Step 1: Write the failing test**

Buat `tests/Feature/Filament/PanelLocaleTest.php`:

```php
<?php

namespace Tests\Feature\Filament;

use App\Filament\Resources\ArticleResource;
use App\Filament\Resources\ContactMessageResource;
use Tests\TestCase;

class PanelLocaleTest extends TestCase
{
    public function test_application_locale_is_indonesian(): void
    {
        $this->assertSame('id', config('app.locale'));
    }

    public function test_filament_interface_strings_are_indonesian(): void
    {
        $this->assertSame('Dasbor', trans('filament-panels::pages/dashboard.title'));
    }

    public function test_validation_messages_are_indonesian(): void
    {
        $this->assertSame('Kolom :attribute wajib diisi.', trans('validation.required'));
    }

    public function test_resource_labels_are_indonesian(): void
    {
        $this->assertSame('Berita', ArticleResource::getModelLabel());
        $this->assertSame('Berita', ArticleResource::getPluralModelLabel());
        $this->assertSame('Pesan Masuk', ContactMessageResource::getModelLabel());
    }
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `php83 artisan test --filter=PanelLocaleTest`
Expected: FAIL — `Failed asserting that 'en' is identical to 'id'`.

- [ ] **Step 3: Ubah locale aplikasi**

Pada `config/app.php`, ubah baris 86 dari `'locale' => 'en',` menjadi:

```php
    'locale' => 'id',
```

dan baris 112 dari `'faker_locale' => 'en_US',` menjadi:

```php
    'faker_locale' => 'id_ID',
```

- [ ] **Step 4: Buat terjemahan validasi**

Direktori `lang/` belum ada di proyek ini dan harus dibuat lebih dulu. Laravel tetap memuat berkas dari `lang_path()` meski hanya berisi satu berkas.

Buat `lang/id/validation.php`:

```php
<?php

return [
    'boolean' => 'Kolom :attribute harus bernilai benar atau salah.',
    'date' => 'Kolom :attribute bukan tanggal yang valid.',
    'email' => 'Kolom :attribute harus berupa alamat email yang valid.',
    'image' => 'Kolom :attribute harus berupa gambar.',
    'max' => [
        'array' => 'Kolom :attribute tidak boleh lebih dari :max item.',
        'file' => 'Kolom :attribute tidak boleh lebih dari :max kilobyte.',
        'numeric' => 'Kolom :attribute tidak boleh lebih dari :max.',
        'string' => 'Kolom :attribute tidak boleh lebih dari :max karakter.',
    ],
    'mimes' => 'Kolom :attribute harus berupa berkas bertipe: :values.',
    'min' => [
        'array' => 'Kolom :attribute harus memiliki minimal :min item.',
        'file' => 'Kolom :attribute minimal :min kilobyte.',
        'numeric' => 'Kolom :attribute minimal :min.',
        'string' => 'Kolom :attribute minimal :min karakter.',
    ],
    'numeric' => 'Kolom :attribute harus berupa angka.',
    'required' => 'Kolom :attribute wajib diisi.',
    'string' => 'Kolom :attribute harus berupa teks.',
    'unique' => 'Kolom :attribute sudah digunakan.',
    'url' => 'Format :attribute tidak valid.',
];
```

- [ ] **Step 5: Beri label Indonesia pada ArticleResource**

Pada `app/Filament/Resources/ArticleResource.php`, tambahkan properti berikut tepat di bawah `protected static ?string $navigationIcon`:

```php
    protected static ?string $modelLabel = 'Berita';

    protected static ?string $pluralModelLabel = 'Berita';

    protected static ?string $navigationLabel = 'Berita';

    protected static ?string $navigationGroup = 'Konten';
```

- [ ] **Step 6: Beri label Indonesia pada ContactMessageResource**

Pada `app/Filament/Resources/ContactMessageResource.php`, tambahkan properti berikut tepat di bawah `protected static ?string $navigationIcon`:

```php
    protected static ?string $modelLabel = 'Pesan Masuk';

    protected static ?string $pluralModelLabel = 'Pesan Masuk';

    protected static ?string $navigationLabel = 'Pesan Masuk';

    protected static ?string $navigationGroup = 'Komunikasi';
```

- [ ] **Step 7: Run test to verify it passes**

Run: `php83 artisan test --filter=PanelLocaleTest`
Expected: PASS — empat tes lulus.

- [ ] **Step 8: Pastikan seluruh suite masih hijau**

Run: `php83 artisan test`
Expected: Semua tes lulus. Perhatian khusus pada `ArticleVisibilityTest` dan `CreateAdminUserCommandTest` — keduanya memakai `fake()`, yang kini memakai locale `id_ID`.

- [ ] **Step 9: Commit** *(minta izin user lebih dulu)*

```bash
./vendor/bin/pint config/app.php lang app/Filament
git add config/app.php lang app/Filament tests/Feature/Filament
git commit -m "feat: alihkan panel admin ke bahasa indonesia"
```

---

### Task 2: Kolom gambar dua mode

Gambar disimpan dalam dua kolom terpisah, bukan satu kolom dengan dua bentuk nilai. Dua kolom membuat form Filament menjadi dua kontrol biasa tanpa logika kondisional, tanpa state virtual, dan langsung dapat diuji — jauh lebih sederhana daripada satu kolom yang harus menebak apakah isinya jalur berkas atau URL. PRD Bagian 9.4 menyebut satu kolom; penyimpangan ini disengaja dan memberi hasil yang sama bagi pengguna.

Berkas terunggah menang atas tautan eksternal. Ini mendukung tujuan PRD "ganti bertahap jadi unggahan": begitu admin mengunggah gambar, tautan Drive lama otomatis berhenti dipakai tanpa perlu dihapus manual.

**Files:**
- Create: `database/migrations/2026_08_07_000001_split_article_image_into_path_and_url.php`
- Modify: `app/Models/Article.php`
- Modify: `app/Http/Resources/ArticleResource.php`
- Modify: `routes/web.php` (route detail berita)
- Modify: `app/Filament/Resources/ArticleResource.php`
- Modify: `database/factories/ArticleFactory.php`
- Test: `tests/Feature/ArticleImageSourceTest.php`

**Interfaces:**
- Consumes: Label Indonesia dari Task 1.
- Produces:
  - Kolom `articles.image_path` (nullable string) dan `articles.image_url` (nullable string). Kolom `articles.image` tidak lagi ada.
  - `App\Models\Article::$image_src` — accessor bertipe `?string`. Mengembalikan `Storage::disk('public')->url($image_path)` bila `image_path` terisi, selain itu `image_url`, selain itu `null`.
  - `Database\Factories\ArticleFactory` menghasilkan `image_path` dan `image_url` bernilai `null`.

- [ ] **Step 1: Write the failing test**

Buat `tests/Feature/ArticleImageSourceTest.php`:

```php
<?php

namespace Tests\Feature;

use App\Models\Article;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ArticleImageSourceTest extends TestCase
{
    use RefreshDatabase;

    public function test_uploaded_path_is_resolved_through_storage(): void
    {
        $article = Article::factory()->create([
            'image_path' => 'images/articles/foto.jpg',
            'image_url' => null,
        ]);

        $this->assertSame(
            config('app.url').'/storage/images/articles/foto.jpg',
            $article->image_src
        );
    }

    public function test_external_url_is_returned_unchanged(): void
    {
        $url = 'https://drive.google.com/thumbnail?id=ABC123&sz=w2000';

        $article = Article::factory()->create([
            'image_path' => null,
            'image_url' => $url,
        ]);

        $this->assertSame($url, $article->image_src);
    }

    public function test_upload_takes_precedence_over_external_url(): void
    {
        $article = Article::factory()->create([
            'image_path' => 'images/articles/foto.jpg',
            'image_url' => 'https://drive.google.com/thumbnail?id=ABC123',
        ]);

        $this->assertSame(
            config('app.url').'/storage/images/articles/foto.jpg',
            $article->image_src
        );
    }

    public function test_image_src_is_null_when_both_columns_are_empty(): void
    {
        $article = Article::factory()->create([
            'image_path' => null,
            'image_url' => null,
        ]);

        $this->assertNull($article->image_src);
    }

    public function test_api_exposes_the_resolved_image(): void
    {
        $url = 'https://drive.google.com/thumbnail?id=ABC123';

        Article::factory()->create([
            'image_path' => null,
            'image_url' => $url,
        ]);

        $this->getJson('/api/articles')->assertJsonPath('data.0.image', $url);
    }
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `php83 artisan test --filter=ArticleImageSourceTest`
Expected: FAIL — kolom `image_path` tidak ada pada tabel `articles`.

- [ ] **Step 3: Buat migration**

Buat `database/migrations/2026_08_07_000001_split_article_image_into_path_and_url.php`:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('articles', function (Blueprint $table) {
            $table->renameColumn('image', 'image_path');
        });

        Schema::table('articles', function (Blueprint $table) {
            $table->string('image_url')->nullable()->after('image_path');
        });

        DB::table('articles')
            ->where('image_path', 'like', 'http%')
            ->update([
                'image_url' => DB::raw('image_path'),
                'image_path' => null,
            ]);
    }

    public function down(): void
    {
        DB::table('articles')
            ->whereNotNull('image_url')
            ->update(['image_path' => DB::raw('image_url')]);

        Schema::table('articles', function (Blueprint $table) {
            $table->dropColumn('image_url');
        });

        Schema::table('articles', function (Blueprint $table) {
            $table->renameColumn('image_path', 'image');
        });
    }
};
```

Tabel `articles` saat ini kosong, sehingga blok `DB::table(...)->update(...)` tidak mengubah apa pun hari ini. Blok itu tetap ditulis agar migration benar bila kelak dijalankan pada database yang sudah berisi tautan Drive — misalnya saat deploy pertama ke Railway dari basis data hasil impor.

- [ ] **Step 4: Perbarui model Article**

Ganti seluruh isi `app/Models/Article.php`:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'category',
        'image_path',
        'image_url',
        'is_published',
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('is_published', true);
    }

    protected function imageSrc(): Attribute
    {
        return Attribute::get(function (): ?string {
            if (filled($this->image_path)) {
                return Storage::disk('public')->url($this->image_path);
            }

            return $this->image_url;
        });
    }
}
```

- [ ] **Step 5: Perbarui ArticleFactory**

Pada `database/factories/ArticleFactory.php`, ganti baris `'image' => null,` menjadi:

```php
            'image_path' => null,
            'image_url' => null,
```

- [ ] **Step 6: Pakai accessor pada API**

Ganti isi method `toArray` pada `app/Http/Resources/ArticleResource.php` sehingga baris `image` berbunyi:

```php
            'image' => $this->image_src,
```

Hapus juga baris lama `'image' => $this->image ? url('storage/' . $this->image) : null,`.

- [ ] **Step 7: Pakai accessor pada route detail berita**

Pada `routes/web.php`, di dalam route `/Informasi/Berita/{id}`, ganti baris:

```php
            'image' => $article->image ? url('storage/' . $article->image) : null,
```

menjadi:

```php
            'image' => $article->image_src,
```

- [ ] **Step 8: Perbarui form Filament**

Pada `app/Filament/Resources/ArticleResource.php`, ganti `FileUpload::make('image')` dengan dua kontrol berikut:

```php
                FileUpload::make('image_path')
                    ->label('Unggah gambar')
                    ->image()
                    ->disk('public')
                    ->directory('images/articles')
                    ->maxSize(2048)
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp'])
                    ->imageResizeMode('contain')
                    ->imageResizeTargetWidth('1920')
                    ->imageResizeTargetHeight('1920')
                    ->helperText('Maksimal 2 MB. Gambar diperkecil otomatis ke lebar 1920 piksel.'),
                TextInput::make('image_url')
                    ->label('Atau tempel tautan gambar')
                    ->url()
                    ->maxLength(2048)
                    ->helperText('Dipakai bila tidak ada gambar yang diunggah.'),
```

`maxSize(2048)` menambahkan aturan validasi di sisi server, bukan hanya batas di browser — ini yang dituntut PRD Bagian 9.4.

- [ ] **Step 9: Jalankan migration dan buat symlink storage**

Run: `php83 artisan migrate`
Expected: Migration `split_article_image_into_path_and_url` berhasil.

Run: `php83 artisan storage:link`
Expected: Tautan `public/storage` dibuat, atau pesan bahwa tautan sudah ada. Tanpa ini gambar yang diunggah tidak akan tampil.

- [ ] **Step 10: Run test to verify it passes**

Run: `php83 artisan test --filter=ArticleImageSourceTest`
Expected: PASS — lima tes lulus.

- [ ] **Step 11: Pastikan seluruh suite masih hijau**

Run: `php83 artisan test`
Expected: Semua tes lulus, termasuk `ArticleVisibilityTest` yang menyentuh API yang sama.

- [ ] **Step 12: Commit** *(minta izin user lebih dulu)*

```bash
./vendor/bin/pint app database routes
git add -A
git commit -m "feat: pisahkan gambar artikel jadi unggahan dan tautan eksternal"
```

---

### Task 3: Tabel pengaturan situs

Menggantikan teks yang tertanam di `Footer.jsx` dan `Navbar.jsx` — alamat, nomor WhatsApp, tautan media sosial, dan tautan AR eksternal. Fase 5 memakai `site_description` dan gambar OG untuk meta tag.

Halaman Filament berupa `Page`, bukan `Resource`, karena pengaturan hanya punya satu baris — daftar, tombol buat, dan tombol hapus tidak masuk akal di sini.

**Files:**
- Create: `database/migrations/2026_08_07_000002_create_settings_table.php`
- Create: `app/Models/Setting.php`
- Create: `app/Filament/Pages/ManageSettings.php`
- Create: `resources/views/filament/pages/manage-settings.blade.php`
- Test: `tests/Feature/Filament/ManageSettingsTest.php`

**Interfaces:**
- Consumes: `UserFactory::admin()` dari Fase 0 Task 2, kolom gambar dua mode dari Task 2.
- Produces:
  - Tabel `settings` dengan kolom `site_name`, `site_description`, `address`, `whatsapp`, `instagram_url`, `tiktok_url`, `youtube_url`, `ar_url`, `og_image_path`, `og_image_url`.
  - `App\Models\Setting::current(): self` — mengembalikan satu-satunya baris pengaturan, membuatnya bila belum ada.
  - Halaman `/admin/manage-settings` dengan method `save()`. State form berada di properti publik `$data`.

- [ ] **Step 1: Write the failing test**

Buat `tests/Feature/Filament/ManageSettingsTest.php`:

```php
<?php

namespace Tests\Feature\Filament;

use App\Filament\Pages\ManageSettings;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;
use Tests\TestCase;

class ManageSettingsTest extends TestCase
{
    use RefreshDatabase;

    public function test_current_always_returns_the_same_single_row(): void
    {
        $first = Setting::current();
        $second = Setting::current();

        $this->assertSame($first->id, $second->id);
        $this->assertSame(1, Setting::count());
    }

    public function test_settings_page_is_reachable_by_admin(): void
    {
        $admin = User::factory()->admin()->create();

        $this->actingAs($admin)->get('/admin/manage-settings')->assertSuccessful();
    }

    public function test_settings_page_is_forbidden_for_non_admin(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)->get('/admin/manage-settings')->assertForbidden();
    }

    public function test_admin_can_save_settings(): void
    {
        $admin = User::factory()->admin()->create();
        $this->actingAs($admin);

        Livewire::test(ManageSettings::class)
            ->set('data.site_name', 'Desa Wisata Tajuk')
            ->set('data.whatsapp', '6283831597088')
            ->set('data.ar_url', 'https://feby-akliji23.github.io/AR-BETA_V01/')
            ->call('save');

        $settings = Setting::current();

        $this->assertSame('Desa Wisata Tajuk', $settings->site_name);
        $this->assertSame('6283831597088', $settings->whatsapp);
        $this->assertSame('https://feby-akliji23.github.io/AR-BETA_V01/', $settings->ar_url);
    }
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `php83 artisan test --filter=ManageSettingsTest`
Expected: FAIL — `Class "App\Models\Setting" not found`.

- [ ] **Step 3: Buat migration**

Buat `database/migrations/2026_08_07_000002_create_settings_table.php`:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string('site_name')->default('Tajuk Smart Tourism');
            $table->text('site_description')->nullable();
            $table->text('address')->nullable();
            $table->string('whatsapp')->nullable();
            $table->string('instagram_url')->nullable();
            $table->string('tiktok_url')->nullable();
            $table->string('youtube_url')->nullable();
            $table->string('ar_url')->nullable();
            $table->string('og_image_path')->nullable();
            $table->string('og_image_url')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
```

- [ ] **Step 4: Buat model Setting**

Buat `app/Models/Setting.php`:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Setting extends Model
{
    protected $fillable = [
        'site_name',
        'site_description',
        'address',
        'whatsapp',
        'instagram_url',
        'tiktok_url',
        'youtube_url',
        'ar_url',
        'og_image_path',
        'og_image_url',
    ];

    public static function current(): self
    {
        return static::firstOrCreate([]);
    }

    protected function ogImageSrc(): Attribute
    {
        return Attribute::get(function (): ?string {
            if (filled($this->og_image_path)) {
                return Storage::disk('public')->url($this->og_image_path);
            }

            return $this->og_image_url;
        });
    }
}
```

- [ ] **Step 5: Buat halaman Filament**

Buat `app/Filament/Pages/ManageSettings.php`:

```php
<?php

namespace App\Filament\Pages;

use App\Models\Setting;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Pages\Page;

class ManageSettings extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';

    protected static string $view = 'filament.pages.manage-settings';

    protected static ?string $title = 'Pengaturan Situs';

    protected static ?string $navigationLabel = 'Pengaturan';

    protected static ?string $navigationGroup = 'Sistem';

    public ?array $data = [];

    public function mount(): void
    {
        $this->form->fill(Setting::current()->toArray());
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Identitas Situs')
                    ->schema([
                        TextInput::make('site_name')
                            ->label('Nama situs')
                            ->required()
                            ->maxLength(255),
                        Textarea::make('site_description')
                            ->label('Deskripsi singkat')
                            ->rows(3)
                            ->maxLength(300)
                            ->helperText('Dipakai sebagai deskripsi saat tautan dibagikan ke WhatsApp.'),
                    ]),
                Section::make('Kontak')
                    ->schema([
                        Textarea::make('address')
                            ->label('Alamat')
                            ->rows(2),
                        TextInput::make('whatsapp')
                            ->label('Nomor WhatsApp')
                            ->helperText('Format internasional tanpa tanda plus, contoh 6283831597088.')
                            ->maxLength(20),
                    ]),
                Section::make('Tautan')
                    ->schema([
                        TextInput::make('instagram_url')->label('Instagram')->url()->maxLength(2048),
                        TextInput::make('tiktok_url')->label('TikTok')->url()->maxLength(2048),
                        TextInput::make('youtube_url')->label('YouTube')->url()->maxLength(2048),
                        TextInput::make('ar_url')->label('Halaman AR')->url()->maxLength(2048),
                    ]),
                Section::make('Gambar Bagikan')
                    ->schema([
                        FileUpload::make('og_image_path')
                            ->label('Unggah gambar')
                            ->image()
                            ->disk('public')
                            ->directory('images/settings')
                            ->maxSize(2048)
                            ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp'])
                            ->imageResizeMode('contain')
                            ->imageResizeTargetWidth('1920')
                            ->imageResizeTargetHeight('1920'),
                        TextInput::make('og_image_url')
                            ->label('Atau tempel tautan gambar')
                            ->url()
                            ->maxLength(2048),
                    ]),
            ])
            ->statePath('data');
    }

    public function save(): void
    {
        Setting::current()->update($this->form->getState());

        Notification::make()
            ->success()
            ->title('Pengaturan berhasil disimpan.')
            ->send();
    }
}
```

- [ ] **Step 6: Buat view halaman**

Buat `resources/views/filament/pages/manage-settings.blade.php`:

```blade
<x-filament-panels::page>
    <form wire:submit="save">
        {{ $this->form }}

        <div class="mt-6">
            <x-filament::button type="submit">
                Simpan
            </x-filament::button>
        </div>
    </form>
</x-filament-panels::page>
```

- [ ] **Step 7: Jalankan migration**

Run: `php83 artisan migrate`
Expected: Migration `create_settings_table` berhasil.

- [ ] **Step 8: Run test to verify it passes**

Run: `php83 artisan test --filter=ManageSettingsTest`
Expected: PASS — empat tes lulus.

- [ ] **Step 9: Periksa halaman secara manual**

Jalankan `php83 artisan serve`, masuk ke `/admin/manage-settings` dengan akun `admin@tajuk.com`, isi nama situs dan nomor WhatsApp, lalu tekan Simpan. Pastikan notifikasi muncul dan nilainya bertahan setelah halaman dimuat ulang.

- [ ] **Step 10: Commit** *(minta izin user lebih dulu)*

```bash
./vendor/bin/pint app database
git add -A
git commit -m "feat: tambah halaman pengaturan situs"
```

---

### Task 4: Artikel yang tertata

Menambahkan `slug` dan `excerpt`, meluruskan `category`, dan mengisi tabel Filament yang saat ini hanya menampilkan satu kolom judul.

Kolom `category` saat ini diisi pilihan `draft`, `reviewing`, dan `published` — itu status, bukan kategori, dan bertabrakan dengan `is_published` yang sudah ada. Status ditangani sepenuhnya oleh `is_published`.

Daftar kategori yang dipakai: `berita`, `kegiatan`, `pengumuman`, `wisata`. Ini pilihan awal yang wajar untuk situs desa wisata dan mudah diubah admin kelak lewat panel bila daftarnya dipindah ke database.

**Files:**
- Create: `database/migrations/2026_08_07_000003_add_slug_and_excerpt_to_articles_table.php`
- Modify: `app/Models/Article.php`
- Modify: `app/Filament/Resources/ArticleResource.php`
- Modify: `database/factories/ArticleFactory.php`
- Test: `tests/Feature/ArticleSlugTest.php`

**Interfaces:**
- Consumes: Model `Article` dari Task 2 beserta accessor `image_src`.
- Produces:
  - Kolom `articles.slug` (string, unique, nullable) dan `articles.excerpt` (text, nullable).
  - `App\Models\Article::uniqueSlug(string $title): string` — menghasilkan slug unik dengan akhiran angka bila bentrok.
  - Slug terisi otomatis saat menyimpan bila dibiarkan kosong.

- [ ] **Step 1: Write the failing test**

Buat `tests/Feature/ArticleSlugTest.php`:

```php
<?php

namespace Tests\Feature;

use App\Models\Article;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ArticleSlugTest extends TestCase
{
    use RefreshDatabase;

    public function test_slug_is_generated_from_the_title(): void
    {
        $article = Article::factory()->create(['title' => 'Panen Raya di Dusun Banaran']);

        $this->assertSame('panen-raya-di-dusun-banaran', $article->slug);
    }

    public function test_duplicate_titles_produce_distinct_slugs(): void
    {
        $first = Article::factory()->create(['title' => 'Panen Raya']);
        $second = Article::factory()->create(['title' => 'Panen Raya']);

        $this->assertSame('panen-raya', $first->slug);
        $this->assertSame('panen-raya-2', $second->slug);
    }

    public function test_an_explicit_slug_is_kept(): void
    {
        $article = Article::factory()->create([
            'title' => 'Panen Raya',
            'slug' => 'panen-raya-2026',
        ]);

        $this->assertSame('panen-raya-2026', $article->slug);
    }

    public function test_excerpt_can_be_stored(): void
    {
        $article = Article::factory()->create(['excerpt' => 'Ringkasan singkat berita.']);

        $this->assertSame('Ringkasan singkat berita.', $article->fresh()->excerpt);
    }
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `php83 artisan test --filter=ArticleSlugTest`
Expected: FAIL — kolom `slug` tidak ada pada tabel `articles`.

- [ ] **Step 3: Buat migration**

Buat `database/migrations/2026_08_07_000003_add_slug_and_excerpt_to_articles_table.php`:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('articles', function (Blueprint $table) {
            $table->string('slug')->nullable()->unique()->after('title');
            $table->text('excerpt')->nullable()->after('slug');
        });
    }

    public function down(): void
    {
        Schema::table('articles', function (Blueprint $table) {
            $table->dropUnique(['slug']);
            $table->dropColumn(['slug', 'excerpt']);
        });
    }
};
```

- [ ] **Step 4: Tambahkan slug pada model Article**

Pada `app/Models/Article.php`, tambahkan `'slug'` dan `'excerpt'` ke `$fillable` sehingga menjadi:

```php
    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'category',
        'image_path',
        'image_url',
        'is_published',
    ];
```

Tambahkan import `use Illuminate\Support\Str;` di bagian atas berkas, lalu tambahkan dua method berikut di dalam kelas:

```php
    protected static function booted(): void
    {
        static::saving(function (self $article): void {
            if (blank($article->slug)) {
                $article->slug = static::uniqueSlug($article->title);
            }
        });
    }

    public static function uniqueSlug(string $title): string
    {
        $base = Str::slug($title);
        $slug = $base;
        $suffix = 2;

        while (static::where('slug', $slug)->exists()) {
            $slug = $base.'-'.$suffix;
            $suffix++;
        }

        return $slug;
    }
```

- [ ] **Step 5: Perbarui ArticleFactory**

Pada `database/factories/ArticleFactory.php`, ganti `'category' => 'umum',` menjadi:

```php
            'category' => 'berita',
```

- [ ] **Step 6: Luruskan form Filament**

Pada `app/Filament/Resources/ArticleResource.php`, ganti seluruh isi `->schema([...])` di dalam method `form` menjadi:

```php
                TextInput::make('title')
                    ->label('Judul')
                    ->required()
                    ->maxLength(255),
                TextInput::make('slug')
                    ->label('Slug URL')
                    ->maxLength(255)
                    ->unique(ignoreRecord: true)
                    ->helperText('Biarkan kosong untuk dibuat otomatis dari judul.'),
                Select::make('category')
                    ->label('Kategori')
                    ->options([
                        'berita' => 'Berita',
                        'kegiatan' => 'Kegiatan',
                        'pengumuman' => 'Pengumuman',
                        'wisata' => 'Wisata',
                    ])
                    ->default('berita')
                    ->required(),
                Textarea::make('excerpt')
                    ->label('Ringkasan')
                    ->rows(3)
                    ->maxLength(300)
                    ->columnSpanFull(),
                RichEditor::make('content')
                    ->label('Isi berita')
                    ->required()
                    ->columnSpanFull(),
                FileUpload::make('image_path')
                    ->label('Unggah gambar')
                    ->image()
                    ->disk('public')
                    ->directory('images/articles')
                    ->maxSize(2048)
                    ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp'])
                    ->imageResizeMode('contain')
                    ->imageResizeTargetWidth('1920')
                    ->imageResizeTargetHeight('1920')
                    ->helperText('Maksimal 2 MB. Gambar diperkecil otomatis ke lebar 1920 piksel.'),
                TextInput::make('image_url')
                    ->label('Atau tempel tautan gambar')
                    ->url()
                    ->maxLength(2048)
                    ->helperText('Dipakai bila tidak ada gambar yang diunggah.'),
                Toggle::make('is_published')
                    ->label('Terbitkan')
                    ->helperText('Berita yang belum diterbitkan tidak tampil di situs publik.'),
```

Tambahkan import berikut di bagian atas berkas:

```php
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
```

- [ ] **Step 7: Isi tabel Filament**

Pada `app/Filament/Resources/ArticleResource.php`, ganti isi `->columns([...])` dan `->filters([...])` di dalam method `table` menjadi:

```php
            ->columns([
                TextColumn::make('title')
                    ->label('Judul')
                    ->searchable()
                    ->limit(50),
                TextColumn::make('category')
                    ->label('Kategori')
                    ->badge(),
                IconColumn::make('is_published')
                    ->label('Terbit')
                    ->boolean(),
                TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->dateTime('d M Y')
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                TernaryFilter::make('is_published')
                    ->label('Status terbit')
                    ->trueLabel('Sudah terbit')
                    ->falseLabel('Belum terbit')
                    ->native(false),
            ])
```

Tambahkan import berikut di bagian atas berkas:

```php
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Filters\TernaryFilter;
```

- [ ] **Step 8: Jalankan migration**

Run: `php83 artisan migrate`
Expected: Migration `add_slug_and_excerpt_to_articles_table` berhasil.

- [ ] **Step 9: Run test to verify it passes**

Run: `php83 artisan test --filter=ArticleSlugTest`
Expected: PASS — empat tes lulus.

- [ ] **Step 10: Pastikan seluruh suite masih hijau**

Run: `php83 artisan test`
Expected: Semua tes lulus.

- [ ] **Step 11: Periksa panel secara manual**

Jalankan `php83 artisan serve`, buka `/admin/articles`, buat satu berita dengan gambar terunggah, terbitkan, lalu buka `/Informasi/Berita` di situs publik dan pastikan berita beserta gambarnya tampil.

- [ ] **Step 12: Commit** *(minta izin user lebih dulu)*

```bash
./vendor/bin/pint app database
git add -A
git commit -m "feat: tata ulang artikel dengan slug, ringkasan, dan kategori"
```

---

## Verifikasi akhir Fase 1

- [ ] `php83 artisan test` — seluruh suite hijau
- [ ] Panel `/admin` tampil dalam bahasa Indonesia, termasuk pesan validasi
- [ ] `/admin/manage-settings` dapat menyimpan dan memuat ulang nilainya
- [ ] Berita dapat dibuat dengan gambar terunggah, dan gambarnya tampil di situs publik
- [ ] Berita lama bertautan Drive tetap tampil setelah migration
- [ ] Pengguna non-admin menerima 403 di `/admin/manage-settings`

Belum termasuk Railway Volume — menyusul bersama Task 9 Fase 0.
