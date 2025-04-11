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
        public $nav = null,
        public $footer = null,
        public $sidebarHead = "Sidebar Head",
        public $sidebarSocialMedia = null,
        public $sidebarNav = null,
        public $sidebarContent = "",
    ) {}

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.layout');
    }
}
