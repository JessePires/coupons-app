export function customFormatDate(date: string): string {
  return date.replaceAll('-', '/');
}
