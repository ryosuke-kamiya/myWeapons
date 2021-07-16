import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { Modal } from '.'

export default {
	title: 'organisms/Modal',
	component: Modal,
} as Meta

const Template: Story = () => <Modal />

export const modal = Template.bind({})
