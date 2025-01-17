import { Icon } from '@iconify/vue'
import { NIcon } from 'naive-ui'

export function renderIcon(icon?: string) {
  if (!icon)
    return undefined

  return () => h(NIcon, null, { default: () => h(Icon, { icon }) })
}
