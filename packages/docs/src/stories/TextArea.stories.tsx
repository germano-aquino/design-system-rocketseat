import type { StoryObj, Meta} from "@storybook/react-vite"

import { Box, Text, TextArea } from "@germano-ignite-ui/react"
import type { TextAreaProps } from "@germano-ignite-ui/react"

export default {
  title: 'Typography/Text Area',
  component: TextArea,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as='label' css={{ display: 'flex', flexDirection: 'column', gap: '$2'}}>
          <Text size='sm'>Observations</Text>
          {Story()}
        </Box>
      )
    }
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type any observations'
  }
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
