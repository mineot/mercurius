<?php

namespace App\View\Components;

use App\Models\Profile as ProfileModel;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Profile extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct(
        public ProfileModel $profile,
        public bool $isSidebar = false,
    ) {}

    public function sidebar()
    {
        return $this->isSidebar ? ' sidebar' : '';
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.profile');
    }
}
