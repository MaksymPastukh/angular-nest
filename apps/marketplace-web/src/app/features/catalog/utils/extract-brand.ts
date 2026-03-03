export const extractBrand = (key: string | null): string | null => {
  if (!key) return null
  const idx = key.indexOf(':')
  if (idx === -1 || idx === key.length - 1) return null
  return key.slice(idx + 1).trim() || null
}
