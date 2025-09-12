import type { StoryObj, Meta} from "@storybook/react-vite"

import { Box, Text, Checkbox } from "@germano-ignite-ui/react"
import type { CheckboxProps } from "@germano-ignite-ui/react"

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as='label' css={{ display: 'flex', flexDirection: 'row', gap: '$2'}}>
          {Story()}
          <Text size='sm'>Accept terms of use</Text>
        </Box>
      )
    }
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
}
