<a href="{{ $href }}" class="nav-link" title="{{ $title ?? $label ?? '' }}">
    <i class="{{ $icon ?? '' }} nav-link-icon"></i>
    @isset($label)
    <span class="nav-link-label">{{ $label }}</span>
    @endisset
</a>
