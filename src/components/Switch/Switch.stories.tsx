import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {Switch} from "./Switch";

export default {
  title: "Switch",
  component: Switch,
} as Meta;

export const Default: Story = (args) => (
    <Switch />
);
