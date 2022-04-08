import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
} as Meta;

export const Enabled: Story = (args) => (
    <Input name="username" label="Username"></Input>
);

export const Disabled: Story = (args) => (
  <Input name="username" label="Username" disabled></Input>
);
