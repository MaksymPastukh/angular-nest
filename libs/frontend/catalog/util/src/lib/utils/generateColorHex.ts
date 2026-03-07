export const COLOR_MAP: Record<string, string> = {
  purple: '#8e44ad',
  black: '#000000',
  red: '#e74c3c',
  orange: '#e67e22',
  navy: '#2980b9',
  blue: '#00bcd4',
  white: '#ffffff',
  brown: '#d35400',
  broom: '#d35400',
  green: '#2ecc71',
  yellow: '#f1c40f',
  grey: '#bdc3c7',
  gray: '#bdc3c7',
  pink: '#e91e63',
  beige: '#f5f5dc',
  cream: '#fffdd0',
  indigo: '#4b0082',
  violet: '#8b00ff',
  cyan: '#00ffff',
  magenta: '#ff00ff',
  lime: '#00ff00',
  maroon: '#800000',
  olive: '#808000',
  teal: '#008080',
}

export const generateColorHex = (name: string): string => {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  const color = (hash & 0x00ffffff).toString(16).toUpperCase()
  return `#${'00000'.substring(0, 6 - color.length)}${color}`
}
