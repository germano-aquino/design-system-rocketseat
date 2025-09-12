import type { StoryObj, Meta} from "@storybook/react-vite"

import { Avatar } from "@ignite-ui/react"
import type { AvatarProps } from "@ignite-ui/react"

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/germano-aquino.png',
    alt: 'Germano Aquino'
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      }
    }
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  },
}
