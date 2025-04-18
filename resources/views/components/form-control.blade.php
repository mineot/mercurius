<div class="form-control">
    <label for="{{ $id }}">{{ $label }}</label>
    <input type="{{ $type }}" name="{{ $name }}" id="{{ $id }}" value="{{ $value ?? '' }}"/>
    @isset($message)
    <div class="message">{{ $message }}</div>
    @endisset
</div>
