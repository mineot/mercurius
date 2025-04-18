<div class="form-control">
    <label for="{{ $id }}">{{ $label }}</label>
    <input type="{{ $type }}" name="{{ $name }}" id="{{ $id }}" value="{{ $value ?? '' }}"/>
    @error($name)
    <div class="message">{{ $message }}</div>
    @enderror
</div>
