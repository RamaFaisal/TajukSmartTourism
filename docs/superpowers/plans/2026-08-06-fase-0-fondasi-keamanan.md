# Fase 0 — Fondasi & Keamanan Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Menutup empat lubang keamanan pada Tajuk Smart Tourism, menghapus kode mati, dan menerbitkan aplikasi ke Railway sebagai fondasi bagi fase-fase berikutnya.

**Architecture:** Perubahan dilakukan di tempat pada basis kode Laravel 10 + Inertia + Filament yang ada. Akses panel admin dipindahkan dari "siapa pun yang terdaftar" menjadi kolom `is_admin` eksplisit, dan satu-satunya jalan membuat akun admin adalah perintah artisan. Registrasi publik beserta seluruh alur reset password dan verifikasi email dihapus, bukan sekadar disembunyikan. Query artikel publik dibatasi lewat scope pada model agar tidak bergantung pada kedisiplinan tiap controller.

**Tech Stack:** PHP 8.1+ (lingkungan pengembang menjalankan 8.4), Laravel 10, Filament 3, Inertia.js + React 18, PHPUnit 10, Vite 5, Docker (Railway).

**Spec:** [docs/superpowers/specs/2026-08-06-tajuk-smart-tourism-v2-prd.md](../specs/2026-08-06-tajuk-smart-tourism-v2-prd.md) — Fase 0 pada Bagian 11, dengan detail pada Bagian 9.3, 9.5, 9.6, dan 12.

## Global Constraints

- **Jangan menjalankan `git commit` tanpa izin eksplisit dari user.** Langkah commit di setiap task tetap ditulis lengkap, tetapi berhenti dan minta izin lebih dulu. (CLAUDE.md § Rules 3)
- **Format pesan commit: Conventional Commits** — `feat:`, `fix:`, `chore:`, `refactor:`, `test:`, `build:`.
- **Tidak ada penyebutan Claude, AI, atau co-author generatif** di kode, komentar, maupun pesan commit. (CLAUDE.md § Rules 1)
- **Tidak menulis komentar di kode.** Kode harus menjelaskan dirinya sendiri lewat penamaan. (CLAUDE.md § Rules 2)
- **Prinsip: KISS, YAGNI, DRY, FAIL FAST, Readability > Cleverness.** (CLAUDE.md § Rules 4)
- **Penamaan tabel dan kolom dalam bahasa Inggris; teks yang dilihat pengguna dalam bahasa Indonesia.** (PRD keputusan D6)
- **Jalankan setiap perintah PHP dengan `php83`, bukan `php`.** Herd menyetel PHP 8.4 sebagai default, sedangkan `inertiajs/inertia-laravel` v0.6.11 dan `openspout/openspout` mensyaratkan maksimal PHP 8.3. Di bawah 8.4 test runner crash dan `composer update` tidak dapat me-resolve. Perintah `php artisan ...` di seluruh rencana ini berarti `php83 artisan ...`.
- **Jalankan `./vendor/bin/pint` sebelum setiap commit.**
- Jika ada requirement yang ambigu dan berdampak pada arsitektur, berhenti dan tanyakan. (CLAUDE.md § Rules 5)

---

### Task 1: Mengisolasi database pengujian

Seluruh task berikutnya bergantung pada kemampuan menjalankan tes dengan aman. Saat ini `phpunit.xml` mengomentari baris koneksi SQLite, sehingga tes berjalan pada database MySQL di `.env` dan `RefreshDatabase` **menghapus isi database pengembangan**. Task ini harus selesai lebih dulu.

**Files:**
- Modify: `phpunit.xml:22-23`
- Test: `tests/Feature/TestDatabaseIsolationTest.php`

**Interfaces:**
- Consumes: —
- Produces: Jaminan bahwa seluruh test berikutnya berjalan pada SQLite in-memory. Tidak ada API yang diekspor.

- [ ] **Step 1: Write the failing test**

Buat `tests/Feature/TestDatabaseIsolationTest.php`:

```php
<?php

namespace Tests\Feature;

use Tests\TestCase;

class TestDatabaseIsolationTest extends TestCase
{
    public function test_test_suite_uses_in_memory_sqlite(): void
    {
        $this->assertSame('sqlite', config('database.default'));
        $this->assertSame(':memory:', config('database.connections.sqlite.database'));
    }
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `php artisan test --filter=TestDatabaseIsolationTest`
Expected: FAIL — `Failed asserting that 'mysql' is identical to 'sqlite'`.

- [ ] **Step 3: Aktifkan koneksi SQLite di phpunit.xml**

Pada `phpunit.xml`, ganti dua baris yang dikomentari:

```xml
        <!-- <env name="DB_CONNECTION" value="sqlite"/> -->
        <!-- <env name="DB_DATABASE" value=":memory:"/> -->
```

menjadi:

```xml
        <env name="DB_CONNECTION" value="sqlite"/>
        <env name="DB_DATABASE" value=":memory:"/>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `php artisan test --filter=TestDatabaseIsolationTest`
Expected: PASS.

- [ ] **Step 5: Pastikan seluruh suite yang ada masih hijau**

Run: `php artisan test`
Expected: Semua tes lulus. Jika ada kegagalan karena ekstensi `pdo_sqlite` tidak aktif, aktifkan ekstensi tersebut di `php.ini` sebelum melanjutkan — jangan mengembalikan `phpunit.xml` ke keadaan semula.

- [ ] **Step 6: Perbarui CLAUDE.md**

Pada `CLAUDE.md`, ganti paragraf peringatan yang diawali `**Tests run against the database in `.env`.**` menjadi:

```markdown
Tests run against an in-memory SQLite database configured in `phpunit.xml`. They never touch the database in `.env`. Requires the `pdo_sqlite` PHP extension.
```

- [ ] **Step 7: Commit** *(minta izin user lebih dulu)*

```bash
git add phpunit.xml tests/Feature/TestDatabaseIsolationTest.php CLAUDE.md
git commit -m "test: isolasi suite pengujian ke sqlite in-memory"
```

---

### Task 2: Kolom `is_admin` dan pembatasan akses panel

Menutup temuan keamanan nomor 1: `User::canAccessPanel()` mengembalikan `true` tanpa syarat, sehingga setiap pengguna terdaftar memperoleh akses penuh `/admin`.

**Files:**
- Create: `database/migrations/2026_08_06_000001_add_is_admin_to_users_table.php`
- Modify: `app/Models/User.php`
- Modify: `database/factories/UserFactory.php`
- Test: `tests/Feature/AdminPanelAccessTest.php`

**Interfaces:**
- Consumes: Isolasi database pengujian dari Task 1.
- Produces:
  - Kolom `users.is_admin` — `boolean`, default `false`, tidak nullable.
  - `App\Models\User::$fillable` memuat `'is_admin'`.
  - `App\Models\User::canAccessPanel(Panel $panel): bool` mengembalikan nilai `is_admin`.
  - `Database\Factories\UserFactory::admin(): static` — state yang menghasilkan pengguna dengan `is_admin = true`.

- [ ] **Step 1: Write the failing test**

Buat `tests/Feature/AdminPanelAccessTest.php`:

```php
<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AdminPanelAccessTest extends TestCase
{
    use RefreshDatabase;

    public function test_guest_is_redirected_to_panel_login(): void
    {
        $this->get('/admin')->assertRedirect('/admin/login');
    }

    public function test_non_admin_user_is_forbidden(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)->get('/admin')->assertForbidden();
    }

    public function test_admin_user_can_open_the_panel(): void
    {
        $admin = User::factory()->admin()->create();

        $this->actingAs($admin)->get('/admin')->assertSuccessful();
    }

    public function test_new_users_are_not_admin_by_default(): void
    {
        $user = User::factory()->create();

        $this->assertFalse($user->is_admin);
    }
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `php artisan test --filter=AdminPanelAccessTest`
Expected: FAIL — `Call to undefined method Database\Factories\UserFactory::admin()`.

- [ ] **Step 3: Buat migration**

Buat `database/migrations/2026_08_06_000001_add_is_admin_to_users_table.php`:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->boolean('is_admin')->default(false)->after('password');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('is_admin');
        });
    }
};
```

- [ ] **Step 4: Perbarui model User**

Pada `app/Models/User.php`, tambahkan `'is_admin'` ke `$fillable`:

```php
    protected $fillable = [
        'name',
        'email',
        'password',
        'is_admin',
    ];
```

Tambahkan cast pada `$casts`:

```php
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'is_admin' => 'boolean',
    ];
```

Ganti seluruh blok `canAccessPanel` beserta docblock-nya menjadi:

```php
    public function canAccessPanel(Panel $panel): bool
    {
        return $this->is_admin;
    }
```

- [ ] **Step 5: Tambahkan state `admin()` pada UserFactory**

Pada `database/factories/UserFactory.php`, tambahkan method berikut setelah `unverified()`:

```php
    public function admin(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_admin' => true,
        ]);
    }
```

- [ ] **Step 6: Run test to verify it passes**

Run: `php artisan test --filter=AdminPanelAccessTest`
Expected: PASS — empat tes lulus.

- [ ] **Step 7: Jalankan migration pada database pengembangan**

Run: `php artisan migrate`
Expected: Migration `add_is_admin_to_users_table` berhasil dijalankan.

Setelah ini, seluruh akun yang sudah ada di database pengembangan kehilangan akses `/admin` karena `is_admin` bernilai `false`. Akun admin dibuat pada Task 3.

- [ ] **Step 8: Commit** *(minta izin user lebih dulu)*

```bash
./vendor/bin/pint
git add database/migrations app/Models/User.php database/factories/UserFactory.php tests/Feature/AdminPanelAccessTest.php
git commit -m "feat: batasi akses panel admin lewat kolom is_admin"
```

---

### Task 3: Perintah artisan pembuat akun admin

Setelah registrasi publik ditutup pada Task 4, ini menjadi satu-satunya cara membuat akun admin.

**Files:**
- Create: `app/Console/Commands/CreateAdminUser.php`
- Test: `tests/Feature/CreateAdminUserCommandTest.php`

**Interfaces:**
- Consumes: `users.is_admin` dan `UserFactory::admin()` dari Task 2.
- Produces: Perintah `app:create-admin` dengan opsi `--name`, `--email`, `--password`. Mengembalikan `Command::SUCCESS` (0) bila akun dibuat, `Command::FAILURE` (1) bila validasi gagal.

- [ ] **Step 1: Write the failing test**

Buat `tests/Feature/CreateAdminUserCommandTest.php`:

```php
<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class CreateAdminUserCommandTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_creates_an_admin_user(): void
    {
        $this->artisan('app:create-admin', [
            '--name' => 'Admin Desa',
            '--email' => 'admin@tajuk.test',
            '--password' => 'rahasia123',
        ])->assertSuccessful();

        $user = User::where('email', 'admin@tajuk.test')->first();

        $this->assertNotNull($user);
        $this->assertTrue($user->is_admin);
        $this->assertTrue(Hash::check('rahasia123', $user->password));
    }

    public function test_it_rejects_a_duplicate_email(): void
    {
        User::factory()->create(['email' => 'admin@tajuk.test']);

        $this->artisan('app:create-admin', [
            '--name' => 'Admin Kedua',
            '--email' => 'admin@tajuk.test',
            '--password' => 'rahasia123',
        ])->assertFailed();

        $this->assertSame(1, User::where('email', 'admin@tajuk.test')->count());
    }

    public function test_it_rejects_a_short_password(): void
    {
        $this->artisan('app:create-admin', [
            '--name' => 'Admin Desa',
            '--email' => 'baru@tajuk.test',
            '--password' => 'pendek',
        ])->assertFailed();

        $this->assertDatabaseMissing('users', ['email' => 'baru@tajuk.test']);
    }
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `php artisan test --filter=CreateAdminUserCommandTest`
Expected: FAIL — `The command "app:create-admin" does not exist.`

- [ ] **Step 3: Buat perintah**

Buat `app/Console/Commands/CreateAdminUser.php`:

```php
<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Validator;

class CreateAdminUser extends Command
{
    protected $signature = 'app:create-admin {--name=} {--email=} {--password=}';

    protected $description = 'Membuat akun admin yang dapat mengakses panel /admin';

    public function handle(): int
    {
        $data = [
            'name' => $this->option('name') ?: $this->ask('Nama'),
            'email' => $this->option('email') ?: $this->ask('Email'),
            'password' => $this->option('password') ?: $this->secret('Password'),
        ];

        $validator = Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'string', 'min:8'],
        ]);

        if ($validator->fails()) {
            foreach ($validator->errors()->all() as $message) {
                $this->error($message);
            }

            return self::FAILURE;
        }

        User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $data['password'],
            'is_admin' => true,
        ]);

        $this->info("Akun admin {$data['email']} berhasil dibuat.");

        return self::SUCCESS;
    }
}
```

`app/Console/Kernel.php` sudah memuat `$this->load(__DIR__.'/Commands')`, jadi perintah terdaftar otomatis tanpa perubahan lain. Password di-hash otomatis oleh cast `'password' => 'hashed'` pada model `User`.

- [ ] **Step 4: Run test to verify it passes**

Run: `php artisan test --filter=CreateAdminUserCommandTest`
Expected: PASS — tiga tes lulus.

- [ ] **Step 5: Buat akun admin pada database pengembangan**

Run: `php artisan app:create-admin`
Isi nama, email, dan password saat diminta. Buka `/admin` dan pastikan panel terbuka dengan akun tersebut.

- [ ] **Step 6: Commit** *(minta izin user lebih dulu)*

```bash
./vendor/bin/pint
git add app/Console/Commands/CreateAdminUser.php tests/Feature/CreateAdminUserCommandTest.php
git commit -m "feat: tambah perintah app:create-admin"
```

---

### Task 4: Menutup registrasi, reset password, dan verifikasi email

Menutup temuan keamanan nomor 1 bagian kedua. Route dihapus beserta controller, halaman, dan tesnya — bukan sekadar disembunyikan dari navigasi.

`resources/js/Pages/Welcome.jsx` memanggil `route('register')` dan `resources/views/welcome.blade.php` merupakan halaman bawaan Laravel yang tidak tertaut dari situs; keduanya ikut dihapus karena akan rusak begitu route `register` hilang.

Blok verifikasi email pada `UpdateProfileInformationForm.jsx` memanggil `route('verification.send')`. Blok itu tidak pernah tampil karena `User` tidak mengimplementasikan `MustVerifyEmail`, tetapi tetap dihapus bersama fiturnya.

**Files:**
- Modify: `routes/auth.php` (ganti seluruh isi)
- Modify: `routes/web.php` (hapus route `/welcome`)
- Modify: `app/Http/Controllers/ProfileController.php`
- Modify: `resources/js/Pages/Profile/Edit.jsx`
- Modify: `resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx`
- Delete: `app/Http/Controllers/Auth/RegisteredUserController.php`
- Delete: `app/Http/Controllers/Auth/PasswordResetLinkController.php`
- Delete: `app/Http/Controllers/Auth/NewPasswordController.php`
- Delete: `app/Http/Controllers/Auth/EmailVerificationPromptController.php`
- Delete: `app/Http/Controllers/Auth/EmailVerificationNotificationController.php`
- Delete: `app/Http/Controllers/Auth/VerifyEmailController.php`
- Delete: `resources/js/Pages/Auth/Register.jsx`, `ForgotPassword.jsx`, `ResetPassword.jsx`, `VerifyEmail.jsx`
- Delete: `resources/js/Pages/Welcome.jsx`
- Delete: `resources/views/welcome.blade.php`
- Delete: `tests/Feature/Auth/RegistrationTest.php`, `PasswordResetTest.php`, `EmailVerificationTest.php`
- Test: `tests/Feature/Auth/ClosedRegistrationTest.php`

**Interfaces:**
- Consumes: `UserFactory::admin()` dari Task 2 tidak dipakai di sini; hanya `User::factory()`.
- Produces: Route bernama yang masih tersedia setelah task ini — `login`, `logout`, `password.confirm`, `password.update`, `dashboard`, `profile.edit`, `profile.update`, `profile.destroy`. Nama route `register`, `password.request`, `password.email`, `password.reset`, `password.store`, `verification.notice`, `verification.verify`, `verification.send` **tidak lagi ada**; jangan memanggilnya dari PHP maupun JavaScript.

- [ ] **Step 1: Write the failing test**

Buat `tests/Feature/Auth/ClosedRegistrationTest.php`:

```php
<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ClosedRegistrationTest extends TestCase
{
    use RefreshDatabase;

    public function test_registration_screen_is_gone(): void
    {
        $this->get('/register')->assertNotFound();
    }

    public function test_registration_cannot_be_submitted(): void
    {
        $this->post('/register', [
            'name' => 'Penyusup',
            'email' => 'penyusup@example.com',
            'password' => 'password',
            'password_confirmation' => 'password',
        ])->assertNotFound();

        $this->assertDatabaseMissing('users', ['email' => 'penyusup@example.com']);
    }

    public function test_password_reset_routes_are_gone(): void
    {
        $this->get('/forgot-password')->assertNotFound();
        $this->post('/forgot-password', ['email' => 'admin@tajuk.test'])->assertNotFound();
        $this->get('/reset-password/some-token')->assertNotFound();
        $this->post('/reset-password', [])->assertNotFound();
    }

    public function test_email_verification_routes_are_gone(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)->get('/verify-email')->assertNotFound();
        $this->actingAs($user)->post('/email/verification-notification')->assertNotFound();
    }

    public function test_login_is_still_available(): void
    {
        $this->get('/login')->assertOk();
    }
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `php artisan test --filter=ClosedRegistrationTest`
Expected: FAIL — `test_registration_screen_is_gone` menerima 200, bukan 404.

- [ ] **Step 3: Ganti seluruh isi routes/auth.php**

```php
<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\PasswordController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);
});

Route::middleware('auth')->group(function () {
    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
        ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});
```

- [ ] **Step 4: Hapus controller, halaman, dan tes yang tidak lagi terpakai**

```bash
rm app/Http/Controllers/Auth/RegisteredUserController.php
rm app/Http/Controllers/Auth/PasswordResetLinkController.php
rm app/Http/Controllers/Auth/NewPasswordController.php
rm app/Http/Controllers/Auth/EmailVerificationPromptController.php
rm app/Http/Controllers/Auth/EmailVerificationNotificationController.php
rm app/Http/Controllers/Auth/VerifyEmailController.php
rm resources/js/Pages/Auth/Register.jsx
rm resources/js/Pages/Auth/ForgotPassword.jsx
rm resources/js/Pages/Auth/ResetPassword.jsx
rm resources/js/Pages/Auth/VerifyEmail.jsx
rm resources/js/Pages/Welcome.jsx
rm resources/views/welcome.blade.php
rm tests/Feature/Auth/RegistrationTest.php
rm tests/Feature/Auth/PasswordResetTest.php
rm tests/Feature/Auth/EmailVerificationTest.php
```

- [ ] **Step 5: Hapus route /welcome dari routes/web.php**

Hapus blok berikut seluruhnya dari `routes/web.php`:

```php
Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
```

Hapus juga baris `use Illuminate\Foundation\Application;` di bagian atas berkas, karena `Application::VERSION` tidak lagi dipakai.

- [ ] **Step 6: Buang prop mustVerifyEmail dari ProfileController**

Pada `app/Http/Controllers/ProfileController.php`, ubah method `edit` menjadi:

```php
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'status' => session('status'),
        ]);
    }
```

Hapus baris `use Illuminate\Contracts\Auth\MustVerifyEmail;` di bagian atas berkas.

- [ ] **Step 7: Buang mustVerifyEmail dari komponen profil**

Pada `resources/js/Pages/Profile/Edit.jsx`, ubah tanda tangan komponen dan pemanggilan formnya:

```jsx
export default function Edit({ auth, status }) {
```

```jsx
                        <UpdateProfileInformationForm
                            status={status}
                            className="max-w-xl"
                        />
```

Pada `resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx`, hapus `mustVerifyEmail` dari daftar props komponen, lalu hapus seluruh blok JSX yang diawali `{mustVerifyEmail && user.email_verified_at === null && (` sampai penutupnya `)}`. Jika `Link` dari `@inertiajs/react` tidak lagi dipakai di berkas itu setelah blok dihapus, hapus juga dari baris import.

- [ ] **Step 8: Run test to verify it passes**

Run: `php artisan test --filter=ClosedRegistrationTest`
Expected: PASS — lima tes lulus.

- [ ] **Step 9: Pastikan seluruh suite masih hijau dan aset masih terbangun**

Run: `php artisan test`
Expected: Semua tes lulus. `AuthenticationTest`, `PasswordConfirmationTest`, `PasswordUpdateTest`, dan `ProfileTest` harus tetap hijau.

Run: `npm run build`
Expected: Build sukses tanpa error modul yang hilang.

- [ ] **Step 10: Commit** *(minta izin user lebih dulu)*

```bash
./vendor/bin/pint
git add -A
git commit -m "feat: tutup registrasi publik, reset password, dan verifikasi email"
```

---

### Task 5: Membatasi artikel publik pada yang sudah terbit

Menutup temuan keamanan nomor 2: artikel draft dapat dibaca publik. Pembatasan diletakkan sebagai scope pada model agar berlaku seragam di web dan API.

**Files:**
- Modify: `app/Models/Article.php`
- Modify: `routes/web.php` (route detail berita)
- Modify: `app/Http/Controllers/Api/ArticleController.php`
- Create: `database/factories/ArticleFactory.php`
- Test: `tests/Feature/ArticleVisibilityTest.php`

**Interfaces:**
- Consumes: Isolasi database pengujian dari Task 1.
- Produces:
  - `App\Models\Article::$fillable` = `['title', 'content', 'category', 'image', 'is_published']`.
  - `App\Models\Article::scopePublished(Builder $query): Builder` — memfilter `is_published = true`.
  - `Database\Factories\ArticleFactory` dengan state `draft(): static`. Default factory menghasilkan artikel terbit.

- [ ] **Step 1: Write the failing test**

Buat `tests/Feature/ArticleVisibilityTest.php`:

```php
<?php

namespace Tests\Feature;

use App\Models\Article;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ArticleVisibilityTest extends TestCase
{
    use RefreshDatabase;

    public function test_api_returns_only_published_articles(): void
    {
        $published = Article::factory()->create(['title' => 'Berita Terbit']);
        Article::factory()->draft()->create(['title' => 'Berita Draft']);

        $response = $this->getJson('/api/articles');

        $response->assertOk();
        $this->assertCount(1, $response->json('data'));
        $this->assertSame($published->id, $response->json('data.0.id'));
    }

    public function test_published_article_detail_is_reachable(): void
    {
        $article = Article::factory()->create();

        $this->get("/Informasi/Berita/{$article->id}")->assertOk();
    }

    public function test_draft_article_detail_returns_not_found(): void
    {
        $article = Article::factory()->draft()->create();

        $this->get("/Informasi/Berita/{$article->id}")->assertNotFound();
    }

    public function test_published_scope_filters_drafts(): void
    {
        Article::factory()->count(2)->create();
        Article::factory()->draft()->count(3)->create();

        $this->assertSame(2, Article::published()->count());
    }
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `php artisan test --filter=ArticleVisibilityTest`
Expected: FAIL — `Class "Database\Factories\ArticleFactory" not found`.

- [ ] **Step 3: Buat ArticleFactory**

Buat `database/factories/ArticleFactory.php`:

```php
<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ArticleFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'content' => fake()->paragraphs(3, true),
            'category' => 'umum',
            'image' => null,
            'is_published' => true,
        ];
    }

    public function draft(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_published' => false,
        ]);
    }
}
```

- [ ] **Step 4: Perbarui model Article**

Ganti seluruh isi `app/Models/Article.php`:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'category',
        'image',
        'is_published',
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('is_published', true);
    }
}
```

- [ ] **Step 5: Terapkan scope pada API**

Ganti method `getData` pada `app/Http/Controllers/Api/ArticleController.php`:

```php
    public function getData()
    {
        return ArticleResource::collection(Article::published()->latest()->get());
    }
```

- [ ] **Step 6: Terapkan scope pada route detail berita**

Pada `routes/web.php`, ganti baris pencarian artikel di dalam route `/Informasi/Berita/{id}`:

```php
    $article = Article::findOrFail($id);
```

menjadi:

```php
    $article = Article::published()->findOrFail($id);
```

- [ ] **Step 7: Run test to verify it passes**

Run: `php artisan test --filter=ArticleVisibilityTest`
Expected: PASS — empat tes lulus.

- [ ] **Step 8: Commit** *(minta izin user lebih dulu)*

```bash
./vendor/bin/pint
git add app/Models/Article.php app/Http/Controllers/Api/ArticleController.php routes/web.php database/factories/ArticleFactory.php tests/Feature/ArticleVisibilityTest.php
git commit -m "fix: sembunyikan artikel draft dari halaman publik dan API"
```

---

### Task 6: Menghapus CRUD artikel ganda

Keputusan D9 pada PRD: Filament menjadi satu-satunya panel admin. `ArticleController` beserta view Blade-nya menyimpan gambar ke disk yang berbeda dari Filament dan menduplikasi fungsi yang sama.

`resources/views/layouts/admin.blade.php` **tetap dipertahankan** karena masih dipakai `resources/views/dashboard.blade.php`.

**Files:**
- Modify: `routes/web.php`
- Delete: `app/Http/Controllers/ArticleController.php`
- Delete: `resources/views/articles/index.blade.php`, `create.blade.php`, `edit.blade.php`
- Test: `tests/Feature/LegacyArticleCrudRemovedTest.php`

**Interfaces:**
- Consumes: `UserFactory::admin()` dari Task 2, `ArticleFactory` dari Task 5.
- Produces: Route bernama `articles.index`, `articles.create`, `articles.store`, `articles.edit`, `articles.update`, `articles.destroy` **tidak lagi ada**. Pengelolaan artikel sepenuhnya lewat `/admin/articles`.

- [ ] **Step 1: Write the failing test**

Buat `tests/Feature/LegacyArticleCrudRemovedTest.php`:

```php
<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LegacyArticleCrudRemovedTest extends TestCase
{
    use RefreshDatabase;

    public function test_legacy_article_index_is_gone(): void
    {
        $admin = User::factory()->admin()->create();

        $this->actingAs($admin)->get('/articles')->assertNotFound();
    }

    public function test_legacy_article_create_is_gone(): void
    {
        $admin = User::factory()->admin()->create();

        $this->actingAs($admin)->get('/articles/create')->assertNotFound();
    }

    public function test_filament_article_list_is_reachable(): void
    {
        $admin = User::factory()->admin()->create();

        $this->actingAs($admin)->get('/admin/articles')->assertSuccessful();
    }
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `php artisan test --filter=LegacyArticleCrudRemovedTest`
Expected: FAIL — `/articles` mengembalikan 200, bukan 404.

- [ ] **Step 3: Hapus route resource dan import yang menyertainya**

Pada `routes/web.php`, hapus baris berikut:

```php
Route::resource('articles', ArticleController::class)->middleware(['auth']);
```

Hapus juga baris import `use App\Http\Controllers\ArticleController;` di bagian atas berkas. Baris `use App\Models\Article;` **tetap dipertahankan** karena masih dipakai route detail berita.

- [ ] **Step 4: Hapus controller dan view lama**

```bash
rm app/Http/Controllers/ArticleController.php
rm -r resources/views/articles
```

- [ ] **Step 5: Run test to verify it passes**

Run: `php artisan test --filter=LegacyArticleCrudRemovedTest`
Expected: PASS — tiga tes lulus.

- [ ] **Step 6: Commit** *(minta izin user lebih dulu)*

```bash
./vendor/bin/pint
git add -A
git commit -m "refactor: hapus CRUD artikel ganda di luar Filament"
```

---

### Task 7: Menghapus kode mati dan memperbaiki konfigurasi Vite

Membersihkan sisa-sisa yang tercatat pada Bagian 9.6 PRD. Aset AR sebesar 15 MB dihapus karena fitur AR yang dipakai berada di GitHub Pages eksternal (keputusan D7).

**Files:**
- Modify: `routes/web.php` (hapus route `/AR` dan sisa merge conflict)
- Modify: `vite.config.js`
- Delete: `resources/views/ARv1/` (seluruh direktori)
- Delete: `app/Models/News.php`, `app/Models/paketWisata.php`
- Delete: `app/Http/Controllers/NewsController.php`
- Delete: `database/migrations/2024_09_01_124259_create_paket_wisatas_table.php`
- Delete: `resources/views/layouts/admin.blade copy.php`
- Delete: `resources/js/Pages/Auth/Login.jsx`
- Test: `tests/Feature/DeadRoutesRemovedTest.php`

**Interfaces:**
- Consumes: —
- Produces: Tabel `paket_wisatas` tidak lagi dibuat oleh migration. Fase 3 akan membuat tabel `tour_packages` yang baru; jangan mengandalkan `paket_wisatas`.

`resources/js/Pages/Auth/Login.jsx` dihapus karena `AuthenticatedSessionController::create()` mengembalikan `view('auth.login')`, bukan halaman Inertia — komponen itu tidak pernah dirender. Berkas `resources/views/auth/login.blade.php` **tetap dipertahankan** karena itulah halaman login yang aktif.

- [ ] **Step 1: Write the failing test**

Buat `tests/Feature/DeadRoutesRemovedTest.php`:

```php
<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DeadRoutesRemovedTest extends TestCase
{
    use RefreshDatabase;

    public function test_legacy_ar_route_is_gone(): void
    {
        $this->get('/AR')->assertNotFound();
    }

    public function test_homepage_still_renders(): void
    {
        $this->get('/')->assertOk();
    }
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `php artisan test --filter=DeadRoutesRemovedTest`
Expected: FAIL — `/AR` mengembalikan 200, bukan 404.

- [ ] **Step 3: Hapus route /AR dan sisa merge conflict dari routes/web.php**

Hapus blok berikut:

```php
//AR
Route::get('/AR', function () {
    return view('ARv1/index');
});
```

Hapus juga blok komentar sisa merge conflict:

```php
// <<<<<<< feature/article
// Route::get('/', function() {
//     return redirect('/Homepage');
// });
 // >>>>>>> main
```

dan blok komentar mati di atas route detail berita:

```php
// Route::get('/articles/{id}', [ArticleController::class, 'show'])->name('articles.show');

// public function show($id)
// {
//     $article = Article::findOrFail($id);
//     return Inertia::render('BeritaDetail', [
//         'article' => $article
//     ]);
// }
```

- [ ] **Step 4: Hapus berkas dan direktori mati**

```bash
rm -r resources/views/ARv1
rm app/Models/News.php
rm app/Models/paketWisata.php
rm app/Http/Controllers/NewsController.php
rm database/migrations/2024_09_01_124259_create_paket_wisatas_table.php
rm "resources/views/layouts/admin.blade copy.php"
rm resources/js/Pages/Auth/Login.jsx
```

- [ ] **Step 5: Perbaiki vite.config.js**

`refresh: ["app/Livewire/**"]` menunjuk direktori yang tidak ada. Ganti isi `vite.config.js` menjadi:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/js/app.jsx",
                "resources/css/app.css",
            ],
            refresh: true,
        }),
        react(),
    ],
});
```

- [ ] **Step 6: Run test to verify it passes**

Run: `php artisan test --filter=DeadRoutesRemovedTest`
Expected: PASS — dua tes lulus.

- [ ] **Step 7: Pastikan seluruh suite dan build masih hijau**

Run: `php artisan test`
Expected: Semua tes lulus.

Run: `npm run build`
Expected: Build sukses.

- [ ] **Step 8: Commit** *(minta izin user lebih dulu)*

```bash
./vendor/bin/pint
git add -A
git commit -m "chore: hapus kode mati dan perbaiki konfigurasi vite"
```

---

### Task 8: Memperketat konfigurasi produksi

Menutup temuan keamanan nomor 3 (`.cpanel.yml` menyalin seluruh source ke docroot) dan memperbaiki `APP_NAME` yang masih bernilai `Laravel` — nilai itulah yang muncul di pratinjau tautan WhatsApp.

**Files:**
- Modify: `.cpanel.yml`
- Modify: `.env.example`
- Test: `tests/Feature/ApplicationConfigTest.php`

**Interfaces:**
- Consumes: —
- Produces: `.env.example` sebagai acuan variabel lingkungan untuk Task 9.

- [ ] **Step 1: Write the failing test**

Buat `tests/Feature/ApplicationConfigTest.php`:

```php
<?php

namespace Tests\Feature;

use Tests\TestCase;

class ApplicationConfigTest extends TestCase
{
    public function test_env_example_sets_a_project_specific_app_name(): void
    {
        $contents = file_get_contents(base_path('.env.example'));

        $this->assertStringContainsString('APP_NAME="Tajuk Smart Tourism"', $contents);
        $this->assertStringNotContainsString('APP_NAME=Laravel', $contents);
    }

    public function test_cpanel_deployment_does_not_copy_the_whole_project(): void
    {
        $contents = file_get_contents(base_path('.cpanel.yml'));

        $this->assertStringNotContainsString('cp -r * $DEPLOYPATH', $contents);
    }
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `php artisan test --filter=ApplicationConfigTest`
Expected: FAIL — kedua tes gagal.

- [ ] **Step 3: Perbaiki .env.example**

Ganti tiga baris pertama `.env.example`:

```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
```

menjadi:

```
APP_NAME="Tajuk Smart Tourism"
APP_ENV=local
APP_KEY=
```

- [ ] **Step 4: Perbaiki .cpanel.yml**

Ganti seluruh isi `.cpanel.yml`:

```yaml
---
deployment:
  tasks:
    - export DEPLOYPATH=/home/wisg4857/tajuksmarttourism
    - export DOCROOT=/home/wisg4857/public_html
    - /bin/mkdir -p $DEPLOYPATH
    - /bin/rsync -a --delete --exclude='.git' --exclude='node_modules' --exclude='.env' ./ $DEPLOYPATH/
    - /bin/rsync -a --delete $DEPLOYPATH/public/ $DOCROOT/
```

Konfigurasi ini memisahkan source dari docroot: kode aplikasi berada di `tajuksmarttourism/`, dan hanya isi `public/` yang tersalin ke `public_html/`. `.env` dikecualikan agar kredensial produksi di server tidak tertimpa.

Setelah perubahan ini, deploy cPanel membutuhkan satu penyesuaian manual sekali saja: `public_html/index.php` harus menunjuk ke `../tajuksmarttourism/bootstrap/app.php` dan `../tajuksmarttourism/vendor/autoload.php`. Catat ini sebagai langkah operasional, bukan perubahan kode — cPanel bukan target Fase 0.

- [ ] **Step 5: Run test to verify it passes**

Run: `php artisan test --filter=ApplicationConfigTest`
Expected: PASS — dua tes lulus.

- [ ] **Step 6: Perbarui .env lokal**

Ubah `APP_NAME` di berkas `.env` lokal menjadi `"Tajuk Smart Tourism"`, lalu jalankan `php artisan config:clear`.

- [ ] **Step 7: Commit** *(minta izin user lebih dulu)*

```bash
./vendor/bin/pint
git add .cpanel.yml .env.example tests/Feature/ApplicationConfigTest.php
git commit -m "chore: perbaiki nama aplikasi dan konfigurasi deploy cpanel"
```

---

### Task 9: Deploy pertama ke Railway

Menerbitkan aplikasi ke Railway memakai Dockerfile agar lingkungan produksi eksplisit dan tidak bergantung pada deteksi otomatis. Volume untuk unggahan berkas **tidak** dipasang di fase ini — belum ada fitur unggah sampai Fase 1.

`php artisan route:cache` sengaja **tidak** dijalankan: `routes/web.php` masih berisi closure, dan caching route akan gagal. Perintah itu diaktifkan pada Fase 2 setelah closure diganti controller.

**Files:**
- Create: `Dockerfile`
- Create: `.dockerignore`
- Create: `docker/entrypoint.sh`
- Modify: `CLAUDE.md`

**Interfaces:**
- Consumes: `.env.example` dari Task 8 sebagai daftar variabel lingkungan.
- Produces: Aplikasi berjalan pada domain Railway. Tidak ada API kode yang diekspor.

**Prasyarat:** Task ini membutuhkan akun Railway milik user beserta akses ke dashboard-nya. Langkah 5 sampai 8 dilakukan user atau bersama user — jangan membuat akun, menghubungkan repositori, atau memasukkan kredensial tanpa persetujuan.

- [ ] **Step 1: Buat .dockerignore**

```
.git
.github
node_modules
vendor
storage/logs/*
storage/framework/cache/*
storage/framework/sessions/*
storage/framework/views/*
.env
.env.backup
.env.production
docs
tests
```

- [ ] **Step 2: Buat Dockerfile**

`tailwind.config.js` mengimpor `./vendor/filament/support/tailwind.config.preset` dan memindai `./app/Filament/**/*.php`. Karena itu tahap pembangunan aset membutuhkan `vendor/` dan `app/`, bukan hanya `resources/` — tanpa keduanya `npm run build` gagal pada baris import preset.

```dockerfile
FROM composer:2 AS vendor
WORKDIR /app
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader --prefer-dist --no-interaction

FROM node:20-alpine AS assets
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY --from=vendor /app/vendor ./vendor
COPY resources ./resources
COPY app ./app
COPY vite.config.js tailwind.config.js postcss.config.js jsconfig.json ./
RUN npm run build

FROM php:8.2-apache

RUN apt-get update && apt-get install -y --no-install-recommends \
        git unzip libzip-dev libpng-dev libonig-dev \
    && docker-php-ext-install pdo_mysql zip gd mbstring \
    && rm -rf /var/lib/apt/lists/*

RUN a2enmod rewrite

ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf \
    && sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader --prefer-dist --no-interaction

COPY . .
COPY --from=assets /app/public/build ./public/build

RUN composer dump-autoload --optimize --no-scripts --no-interaction \
    && chown -R www-data:www-data storage bootstrap/cache

COPY docker/entrypoint.sh /usr/local/bin/entrypoint
RUN chmod +x /usr/local/bin/entrypoint

CMD ["entrypoint"]
```

- [ ] **Step 3: Buat docker/entrypoint.sh**

```sh
#!/bin/sh
set -e

sed -i "s/^Listen 80$/Listen ${PORT:-80}/" /etc/apache2/ports.conf
sed -i "s/<VirtualHost \*:80>/<VirtualHost *:${PORT:-80}>/" /etc/apache2/sites-available/000-default.conf

php artisan package:discover --ansi
php artisan filament:upgrade
php artisan migrate --force
php artisan storage:link --force
php artisan config:cache
php artisan view:cache

exec apache2-foreground
```

- [ ] **Step 4: Uji image secara lokal sebelum menyentuh Railway**

```bash
docker build -t tajuk-smart-tourism .
```

Expected: Build selesai tanpa error. Jika Docker tidak tersedia di mesin pengembang, lewati langkah ini dan andalkan build pertama di Railway — catat bahwa kegagalan build akan muncul di sana.

- [ ] **Step 5: Siapkan proyek Railway** *(dilakukan user)*

Di dashboard Railway: buat proyek baru, tambahkan database **MySQL**, lalu tambahkan service dari repositori Git ini. Railway akan mendeteksi `Dockerfile` dan memakainya.

- [ ] **Step 6: Isi variabel lingkungan di Railway** *(dilakukan user)*

| Variabel | Nilai |
|---|---|
| `APP_NAME` | `Tajuk Smart Tourism` |
| `APP_ENV` | `production` |
| `APP_DEBUG` | `false` |
| `APP_KEY` | keluaran `php artisan key:generate --show` |
| `APP_URL` | domain Railway yang diberikan |
| `DB_CONNECTION` | `mysql` |
| `DB_HOST` | `${{MySQL.MYSQLHOST}}` |
| `DB_PORT` | `${{MySQL.MYSQLPORT}}` |
| `DB_DATABASE` | `${{MySQL.MYSQLDATABASE}}` |
| `DB_USERNAME` | `${{MySQL.MYSQLUSER}}` |
| `DB_PASSWORD` | `${{MySQL.MYSQLPASSWORD}}` |
| `SESSION_DRIVER` | `database` |
| `CACHE_DRIVER` | `file` |
| `QUEUE_CONNECTION` | `sync` |
| `LOG_CHANNEL` | `stderr` |

`SESSION_DRIVER=database` membutuhkan tabel sesi. Jika `php artisan session:table` belum pernah dijalankan di proyek ini, gunakan `SESSION_DRIVER=file` sampai tabel tersebut dibuat — jangan berasumsi tabelnya ada.

- [ ] **Step 7: Deploy dan verifikasi** *(dilakukan bersama user)*

Daftar periksa manual setelah deploy pertama:

- [ ] Halaman utama terbuka tanpa error
- [ ] `/admin/login` menampilkan form login Filament
- [ ] Log deploy menunjukkan migration berjalan sukses
- [ ] `/register` mengembalikan 404
- [ ] Halaman error tidak menampilkan stack trace, membuktikan `APP_DEBUG=false` aktif

- [ ] **Step 8: Buat akun admin di produksi** *(dilakukan user)*

Lewat Railway shell pada service aplikasi:

```bash
php artisan app:create-admin
```

Masuk ke `/admin/login` dengan akun tersebut untuk memastikan berhasil.

- [ ] **Step 9: Catat perintah deploy di CLAUDE.md**

Tambahkan bagian berikut pada `CLAUDE.md`, tepat sebelum bagian `## Architecture`:

```markdown
## Deployment

Production runs on Railway from the `Dockerfile` (PHP 8.2 + Apache, assets built in a Node stage). `docker/entrypoint.sh` runs migrations and caches config and views on every boot.

`php artisan route:cache` is deliberately absent — `routes/web.php` still contains closures and caching would fail. Enable it in Phase 2 once routes move to controllers.
```

- [ ] **Step 10: Commit** *(minta izin user lebih dulu)*

```bash
git add Dockerfile .dockerignore docker/entrypoint.sh CLAUDE.md
git commit -m "build: tambah dockerfile dan konfigurasi deploy railway"
```

---

## Verifikasi akhir Fase 0

- [ ] `php artisan test` — seluruh suite hijau
- [ ] `npm run build` — sukses
- [ ] `./vendor/bin/pint --test` — tidak ada pelanggaran gaya
- [ ] `/register`, `/forgot-password`, `/AR`, dan `/articles` seluruhnya mengembalikan 404
- [ ] Pengguna non-admin menerima 403 di `/admin`
- [ ] Artikel draft tidak muncul di `/api/articles`
- [ ] Aplikasi dapat diakses di domain Railway dengan `APP_DEBUG=false`

Setelah seluruh butir terpenuhi, Fase 0 selesai dan Fase 1 (Fondasi CMS) dapat dimulai dengan siklus spec dan rencana tersendiri.
