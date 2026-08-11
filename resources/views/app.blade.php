<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="google-site-verification" content="mZHvhJ8l2uc7lCrW4jxad5KXu0yrwsBdyIvoJICIRSQ" />

    @php
        $pageTitle = $page['props']['title'] ?? config('app.name');
        $pageDescription = $page['props']['description']
            ?? 'Desa Wisata Tajuk, Kecamatan Getasan, Kabupaten Semarang — wisata alam, budaya, dan agrowisata di lereng Gunung Merbabu.';
        $pageUrl = url()->current();

        $jsonLd = [json_encode([
            '@context' => 'https://schema.org',
            '@type' => 'WebSite',
            'name' => config('app.name'),
            'url' => url('/'),
            'inLanguage' => 'id-ID',
        ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE)];

        if (($page['component'] ?? null) === 'Homepage') {
            $jsonLd[] = json_encode([
                '@context' => 'https://schema.org',
                '@type' => 'TouristAttraction',
                'name' => 'Desa Wisata Tajuk',
                'description' => 'Desa wisata di Kecamatan Getasan, Kabupaten Semarang dengan wisata alam, budaya, dan agrowisata di lereng Gunung Merbabu.',
                'url' => url('/'),
                'address' => [
                    '@type' => 'PostalAddress',
                    'addressLocality' => 'Getasan',
                    'addressRegion' => 'Jawa Tengah',
                    'addressCountry' => 'ID',
                ],
            ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
        }
    @endphp

    <title inertia>{{ $pageTitle }}</title>
    <meta name="description" content="{{ $pageDescription }}">
    <link rel="canonical" href="{{ $pageUrl }}">

    <meta property="og:type" content="website">
    <meta property="og:site_name" content="{{ config('app.name') }}">
    <meta property="og:title" content="{{ $pageTitle }}">
    <meta property="og:description" content="{{ $pageDescription }}">
    <meta property="og:url" content="{{ $pageUrl }}">

    @foreach ($jsonLd as $block)
        <script type="application/ld+json">{!! $block !!}</script>
    @endforeach

    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=poppins:400,500,600,700&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
