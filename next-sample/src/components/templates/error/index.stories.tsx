import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { ErrorTemp, ErrorProps } from ".";

export default {
  title: "templates/error",
  component: ErrorTemp,
} as Meta;

const Template: Story<ErrorProps> = (props) => <ErrorTemp {...props} />; //ここはpropsでもargsでもいい
export const error = Template.bind({});
error.args = {
  //ここはpropsだとだめ。理由は知らない。
  text: "エラーです",
};
