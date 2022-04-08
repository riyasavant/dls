import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
} as Meta;

export const Enabled: Story = (args) => (

    <Input name="Enter" label="Enter "></Input>

);
