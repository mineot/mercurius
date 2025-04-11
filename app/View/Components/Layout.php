<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Layout extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct
    (
        public $brand = "Brand",
        public $nav = "Nav",
        public $footer = "Footer",
        public $sidebarHead = "Sidebar Head",
        public $sidebarSocialMedia = "Sidebar Social Media",
        public $sidebarNav = "Sidebar Nav",
        public $sidebarContent = "Sidebar Content",
    ) {}

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.layout');
    }
}
