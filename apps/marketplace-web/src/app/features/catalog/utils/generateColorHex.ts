export const COLOR_MAP: Record<string, string> = {
  Purple: '#8e44ad',
  Black: '#000000',
  Red: '#e74c3c',
  Orange: '#e67e22',
  Navy: '#2980b9',
  Blue: '#00bcd4',
  White: '#ffffff',
  Brown: '#d35400',
  Broom: '#d35400',
  Green: '#2ecc71',
  Yellow: '#f1c40f',
  Grey: '#bdc3c7',
  Gray: '#bdc3c7',
  Pink: '#e91e63',
  Beige: '#f5f5dc',
  Indigo: '#4b0082',
  Violet: '#8b00ff',
  Cyan: '#00ffff',
  Magenta: '#ff00ff',
  Lime: '#00ff00',
  Maroon: '#800000',
  Olive: '#808000',
  Teal: '#008080',
}

export const generateColorHex = (name: string): string => {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  const color = (hash & 0x00ffffff).toString(16).toUpperCase()
  return `#${'00000'.substring(0, 6 - color.length)}${color}`
}
