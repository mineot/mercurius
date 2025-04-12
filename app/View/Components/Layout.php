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
    public function __construct(
        public $headerBrand = 'Brand',
        public $headerNav = null,
        public $sidebarHead = 'Sidebar Head',
        public $sidebarSocials = null,
        public $sidebarNav = null,
        public $sidebarContent = '',
        public $footer = null,
    ) {}

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.layout');
    }
}
