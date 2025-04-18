<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class FormControl extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct
    (
        public string $id = 'id',
        public string $name = 'name',
        public string $type = 'text',
        public string $label = 'Label',
        public string $value = '',
        public string|null $message = null,
    ) {}

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.form-control');
    }
}
