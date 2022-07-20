export function copyToClipboard(value: string, addToast: any): void {
  // Creates a dummy element, so we can copy it's value to clipboard
  const dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.value = value;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);

  addToast({
    type: 'success',
    title: 'Chave copiada!',
    description: 'Chave já foi copiada em seu clipboard.',
  });
}
