export function initials(name: string): string {
  return name.replace(/[^A-Za-z ]/g, '').trim().split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() || '?';
}

export function clsx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

export function isUnassigned(driver: string): boolean {
  return driver.includes('Unassigned');
}
