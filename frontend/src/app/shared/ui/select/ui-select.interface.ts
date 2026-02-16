export interface UISelectOption<T = string> {
  label: string | string[]
  value: T
  disabled?: boolean
}
