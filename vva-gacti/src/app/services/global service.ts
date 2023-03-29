export function convertDate(date: string | undefined): string {
  if (date !== undefined) {
    const dateParts = date.split('-');
    const day = dateParts[2];
    const month = dateParts[1];
    const year = dateParts[0];
    return `${day}/${month}/${year}`;
  }
  return '';
}
