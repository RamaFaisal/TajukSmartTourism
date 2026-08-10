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
