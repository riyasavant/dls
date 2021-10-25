import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {Button} from "./Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

export const Filled: Story = (args) => (
  <Button variant="filled" onClick={() => console.log('clicked')}>Click me!</Button>
);

export const Outline: Story = (args) => (
    <Button variant="outline" onClick={() => console.log('clicked')}>Click me!</Button>
);

export const Link: Story = (args) => (
    <Button variant="link" onClick={() => console.log('clicked')}>Click me!</Button>
);