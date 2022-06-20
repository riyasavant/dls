import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ThreeDShape } from "./ThreeDShape";

export default {
  title: "ThreeDShape",
  component: ThreeDShape,
} as Meta;

export const Default: Story = (args) => <ThreeDShape />;