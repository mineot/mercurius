<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\App;

class Language extends Model
{
    use HasFactory, HasUuids;

    protected $keyType = 'string';

    protected $fillable = ['name', 'language', 'country'];

    public function profiles(): HasMany
    {
        return $this->hasMany(Profile::class, 'language_id');
    }

    public static function getCurrentLanguage()
    {
        $locale = App::getLocale();

        if (str_contains($locale, '-')) {
            [$code, $country] = explode('-', $locale, 2);

            return self::where('language', $code)->where('country', $country)->first()
                ?? self::where('language', $code)->first();
        }

        return self::where('language', $locale)->first();
    }
}
