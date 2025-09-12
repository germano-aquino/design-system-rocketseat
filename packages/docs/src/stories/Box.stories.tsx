import type { StoryObj, Meta} from "@storybook/react-vite"

import { Box, Text } from "@germano-ignite-ui/react"
import type { BoxProps } from "@germano-ignite-ui/react"

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (
      <Text>Testando o elemento box</Text>
    )
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
}
