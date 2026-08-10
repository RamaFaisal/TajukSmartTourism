# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Tajuk Smart Tourism — situs desa wisata Tajuk (Getasan, Kabupaten Semarang). Laravel 10 + Inertia.js + React 18, panel admin Filament 3, auth Laravel Breeze. Konten dan komunikasi dengan pengguna berbahasa Indonesia.

A rebuild is planned and specified in [docs/superpowers/specs/2026-08-06-tajuk-smart-tourism-v2-prd.md](docs/superpowers/specs/2026-08-06-tajuk-smart-tourism-v2-prd.md). Read that PRD before making structural changes — several things that look like bugs are already accounted for there, and it records which ones are deliberately out of scope.

## Commands

```bash
# Development — both must run concurrently
php artisan serve
npm run dev

npm run build                              # production assets

php artisan test                           # all tests
php artisan test --filter=AuthenticationTest   # one test class
php artisan test tests/Feature/ProfileTest.php # one file

./vendor/bin/pint                          # PHP formatter (Laravel Pint, no config file — defaults apply)

php artisan migrate
php artisan storage:link                   # required for uploaded images to resolve
```

**Use PHP 8.3 — not the `php` on PATH.** Herd's default here is PHP 8.4, but `inertiajs/inertia-laravel` v0.6.11 and `openspout/openspout` (pulled in by Filament) both cap at PHP 8.3. Under 8.4 the test runner crashes inside Collision's error handler and `composer update` cannot resolve at all. Run every command with `php83` (`php83 artisan test`, `php83 artisan migrate`) or pin the site to 8.3 in Herd. Supporting PHP 8.4 would require upgrading Inertia to 1.x/2.x — a migration, not a config change.

Tests run against an in-memory SQLite database configured in `phpunit.xml`. They never touch the database in `.env`. Requires the `pdo_sqlite` PHP extension.

**Setelah menjalankan `php artisan test`, jalankan `php artisan db:seed` untuk mengisi ulang database development.** Test memakai `RefreshDatabase` yang menjalankan `migrate:fresh`. Jika variabel `.env` (mis. `DB_CONNECTION`, `APP_ENV`) ter-export ke environment shell, entri `<env>` di `phpunit.xml` tidak menimpanya dan suite justru menimpa database MySQL development — seluruh tabel menjadi kosong. Seed ulang wajib dilakukan setiap kali selesai menjalankan test suite. (Penyebab bocornya env vars: variabel `.env` ter-export di shell; amankan dengan `unset DB_* APP_*` sebelum menjalankan tes.)

## Architecture

### Inertia bridge

Routes return `Inertia::render('Path/Component', [...props])`; the component path maps to `resources/js/Pages/*.jsx`. There is no client-side router — Laravel routing is the only routing. `@/` resolves to `resources/js/` (configured in both `jsconfig.json` and Vite).

`resources/views/app.blade.php` loads a **per-page entry** alongside the main bundle:

```blade
@vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
```

This works because `import.meta.glob('./Pages/**/*.jsx')` in `app.jsx` puts every page in the manifest as a chunk. New pages need no Vite config change, but a renamed page breaks the manifest lookup at runtime rather than at build time.

SSR is not enabled, so `@inertiaHead` emits nothing on first paint and `<Head title>` only applies after JS runs. Anything that must be visible to non-JS crawlers (meta description, Open Graph tags) has to be rendered in `app.blade.php` from `$page['props']`.

### Content lives in JSX, not the database

The 11 hamlet pages (`Pages/Dusun/*.jsx`), 4 destination pages (`Pages/Destinasi/*.jsx`), tour packages (`Pages/Paket.jsx`), gallery, and products are hardcoded — copy-pasted files of 130–210 lines each, with card lists as literal arrays inside `Components/Dusun.jsx` and `Components/Destinasi.jsx`. Editing content means editing JSX and rebuilding.

Only `articles` and `contact_messages` are database-backed. `News` and `paketWisata` models, `NewsController`, and the `paket_wisatas` migration are empty scaffolding — no columns, no logic.

Images are hotlinked from Google Drive as `https://drive.google.com/thumbnail?id=<ID>&sz=w2000` (~90 references). Nothing is served from `public/` except logos and icons.

### Two admin systems

Article CRUD exists twice: `app/Filament/Resources/ArticleResource.php` and `ArticleController` + `resources/views/articles/*.blade.php`. They use **different storage disks** — Filament's `FileUpload` writes to the default disk (`local`) while `ArticleController` uses `store('images', 'public')`, and both are read back via `url('storage/'.$image)`. Images saved through Filament do not resolve.

`/admin` (Filament) is the panel actually linked from the site footer.

### Routing style

`routes/web.php` is ~30 closures that only render a page with `title` and `description` props. They have no names, so `php artisan route:cache` cannot be used. The `description` prop is passed everywhere but never rendered.

### Frontend conventions

Tailwind with DaisyUI, plus the Filament Tailwind preset — `tailwind.config.js` scans `app/Filament/**` and `vendor/filament/**` as well as `resources/js/**/*.jsx`. Theme colors are Indonesian-named (`hijauNew`, `putih`, `colorBg`); `hijauNew` (`#115311`) is the current primary. Fonts are Poppins (sans) and Merriweather (serif).

## Security notes

Two issues are load-bearing for any auth-related change:

- `User::canAccessPanel()` returns `true` unconditionally, and `/register` is open — any visitor who registers gets full Filament admin access.
- Public article queries (`routes/web.php` detail route and `Api\ArticleController`) do not filter `is_published`, so drafts are readable.

Both are addressed in Phase 0 of the PRD. Don't add features that depend on the current behaviour.

## Dead code

Route `/AR` renders `resources/views/ARv1/` (15 MB of assets) using relative paths that cannot resolve, since the directory is not web-served. The AR feature actually in use is external — GitHub Pages, linked from `Components/Navbar.jsx:388`. Also unused: `resources/views/layouts/admin.blade copy.php`, and merge-conflict remnants around `routes/web.php:242-246`.

`vite.config.js` sets `refresh: ["app/Livewire/**"]`, a directory that does not exist.

## Git

Do not run `git commit`, `git checkout -b`, or any history-modifying git operation without explicit permission from the user, even when a skill or workflow instructs you to commit.

The repository is 272 MB packed for ~300 tracked files — historical commits contain 7–15 MB photos that were later deleted. Expect slow clones.

## Rules
1. Jangan ada kalimat seperti claude atau by from Claude
2. Tidak perlu ada comment
3. Jangan commit kecuali ketika saya suruh, dan gunakan format Conventional Commits(feat:, fix:, chore:, dll).
4. Gunakan prinsip koding KISS, YAGNI, DRY, FAIL FAST, Readability > Cleverness
5. Kalau requirement ambigu, tanyakan dulu — jangan asumsikan sendiri untuk hal yang berdampak besar ke arsitektur.