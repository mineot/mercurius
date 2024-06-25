<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    use HasUuids;

    function terms() {
        return $this->hasMany(Term::class, 'language', 'id');
    }
}
