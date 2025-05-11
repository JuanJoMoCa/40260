export function getText(parent, tagName) {
  const el = parent.getElementsByTagName(tagName)[0];
  return el && el.textContent ? el.textContent : '';
}

export function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return !isNaN(date.getTime())
    ? date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
    : dateStr;
}
