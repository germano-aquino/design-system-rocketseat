import type { StoryObj, Meta} from "@storybook/react-vite"

import { Text } from "@germano-ignite-ui/react"
import type { TextProps } from "@germano-ignite-ui/react"

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur inventore distinctio qui cum reprehenderit vero placeat voluptatibus sunt tempore recusandae, facilis, maiores corporis excepturi optio fugiat est, sapiente consequatur.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [ 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl' ],
      control: {
        type: 'inline-radio'
      }
    }
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
