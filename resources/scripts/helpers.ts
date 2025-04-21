export function disableSubmit(form: HTMLFormElement): void {
  const submit = form.querySelector('button[type="submit"]');
  submit!.disabled = true;
}
