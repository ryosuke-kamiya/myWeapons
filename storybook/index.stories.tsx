import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, ButtonProps } from ".";

export default {
  title: "Atoms/Button",
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

//↓これを追加する度にstorybookで確認できるコンポーネントが増える。渡したいpropsを.argsで指定できる。
export const Orange = Template.bind({});
Orange.args = {
  backgroundColor: "orange",
  label: "OrangeButton",
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "DisabledButton",
};
