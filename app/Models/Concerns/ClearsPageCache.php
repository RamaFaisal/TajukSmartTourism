<?php

namespace App\Models\Concerns;

use Illuminate\Support\Facades\Cache;

trait ClearsPageCache
{
    protected static function bootClearsPageCache(): void
    {
        static::saved(fn () => static::clearPageCache());
        static::deleted(fn () => static::clearPageCache());
    }

    protected static function clearPageCache(): void
    {
        Cache::forget('homepage_data');
        Cache::forget('sitemap_urls');
    }
}
