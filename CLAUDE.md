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

**Use PHP 8.3 — not the `php` on PATH.** `inertiajs/inertia-laravel` v0.6.11 and `openspout/openspout` (pulled in by Filament) both cap at PHP 8.3. Under 8.4 the test runner crashes inside Collision's error handler and `composer update` cannot resolve at all. Run every command with `php83` (`php83 artisan test`, `php83 artisan migrate`). On this dev machine the Laragon `php` on PATH is 8.3.10 but lacks `pdo_sqlite`, so tests must use Herd's PHP 8.3: `"$HOME/.config/herd/bin/php83/php.exe" artisan test`. Supporting PHP 8.4 would require upgrading Inertia to 1.x/2.x — a migration, not a config change.

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

### Content is DB-backed, rendered through Inertia

`articles`, `hamlets`, `destinations`, `tour_packages`, `videos`, `gallery_photos`, `products`, and `settings` are database-backed, each with a Filament CRUD resource (`app/Filament/Resources/*`) and a seeder (`database/seeders/*`). `Pages/Dusun/Show.jsx` and `Pages/Destinasi/Show.jsx` are single templates fed by props; `Components/Dusun.jsx` and `Components/Destinasi.jsx` are data-driven carousel/slider components; `Pages/Informasi/Gallery.jsx` and `Pages/Informasi/Produk.jsx` render `props.photos`/`props.products` from `PageController`.

Still hardcoded in JSX: the three legacy Live In forms (`Pages/Paket/FormLiveIn*.jsx` — slated for replacement in PRD Phase 3), and general page copy. Editing those means editing JSX and rebuilding.

Images are mostly hotlinked from Google Drive as `https://drive.google.com/thumbnail?id=<ID>&sz=w2000` (~90 references). New uploads go through Filament to disk `public` and resolve via `Storage::url()`.

### Admin

Filament (`/admin`) is the only admin panel — the legacy `ArticleController` + Blade views were removed. All uploads go through Filament to disk `public` and are read back via `Storage::url()`; the `HasDualImage` model concern resolves between an uploaded path and an external URL.

### Routing style

`routes/web.php` uses thin controllers — `HomeController`, `HamletController`, `DestinationController`, `PageController` (static pages), `SitemapController`. Nearly every route is named (so `php artisan route:cache` works for those); the exceptions are the `/Destinasi/{legacy}` and `/Dusun/{legacy}` 301-redirect routes, which don't need one. The `description` prop is passed everywhere and rendered server-side into the meta description by `app.blade.php`.

### Frontend conventions

Tailwind with DaisyUI, plus the Filament Tailwind preset — `tailwind.config.js` scans `app/Filament/**` and `vendor/filament/**` as well as `resources/js/**/*.jsx`. Custom theme colors are `primary` (`#115311`), `surface` (`#F1FADA`), `accent` (`#DEF9C4`) — defined in `tailwind.config.js`. Fonts are Poppins (sans) and Merriweather (serif).

## Security notes

Phase 0 of the PRD is done — keep these invariants intact:

- `/register`, `/forgot-password`, and `/reset-password` are removed; admin accounts are created via seeder or artisan command.
- `User::canAccessPanel()` requires `is_admin` — a plain registered user cannot open `/admin`.
- Every public query filters `is_published` through the `published()` scope on each model (web pages and `/api/articles`).

## Dead code

Most old dead code has been removed (route `/AR` + `resources/views/ARv1/`, `News`/`paketWisata` models and migration, `ArticleController` + Blade article views, `admin.blade copy.php`, merge-conflict remnants, the Blade dashboard). The AR feature actually in use is external — GitHub Pages, linked from `Components/Navbar.jsx`.

Still legacy, slated for removal in PRD Phase 3: the three `Paket/FormLiveIn*.jsx` forms, which post nowhere.

## Git

Do not run `git commit`, `git checkout -b`, or any history-modifying git operation without explicit permission from the user, even when a skill or workflow instructs you to commit.

The repository is 272 MB packed for ~300 tracked files — historical commits contain 7–15 MB photos that were later deleted. Expect slow clones.

## Rules
1. Jangan ada kalimat seperti claude atau by from Claude
2. Tidak perlu ada comment
3. Jangan commit kecuali ketika saya suruh, dan gunakan format Conventional Commits(feat:, fix:, chore:, dll).
4. Gunakan prinsip koding KISS, YAGNI, DRY, FAIL FAST, Readability > Cleverness
5. Kalau requirement ambigu, tanyakan dulu — jangan asumsikan sendiri untuk hal yang berdampak besar ke arsitektur.