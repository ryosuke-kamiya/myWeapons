import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Footer } from ".";

export default {
  title: "Organisms/Footer",
  component: Footer,
} as Meta;

const Template: Story = () => <Footer />;

export const PC = Template.bind({});
