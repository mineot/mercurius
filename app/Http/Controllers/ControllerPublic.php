<?php

namespace App\Http\Controllers;

use App\Models\Profile;

abstract class ControllerPublic extends Controller
{
    public function getPublicData()
    {
        return [
            'profile' => Profile::where('lang', app()->getLocale())->first(),
            'headerNavLinks' => [
                ['href' => '#', 'label' => 'Home', 'icon' => 'bi bi-house-door-fill'],
                ['href' => '#', 'label' => 'About Me', 'icon' => 'bi bi-person-fill'],
                ['href' => '#', 'label' => 'Articles', 'icon' => 'bi bi-book'],
            ],
            'sidebarNavLinks' => [
                ['href' => '#', 'label' => 'Home', 'icon' => 'bi bi-house-door-fill'],
                ['href' => '#', 'label' => 'About Me', 'icon' => 'bi bi-person-fill'],
                ['href' => '#', 'label' => 'Articles', 'icon' => 'bi bi-book'],
            ],
            'socialMedia' => [
                ['href' => '#', 'label' => 'GitHub', 'icon' => 'bi bi-github'],
                ['href' => '#', 'label' => 'WhatsApp', 'icon' => 'bi bi-whatsapp'],
                ['href' => '#', 'label' => 'YouTube', 'icon' => 'bi bi-youtube'],
                ['href' => '#', 'label' => 'Email', 'icon' => 'bi bi-envelope-fill'],
            ],
        ];
    }
}
