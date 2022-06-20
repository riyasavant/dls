import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ThreeDBox } from "./ThreeDBox";

export default {
  title: "ThreeDBox",
  component: ThreeDBox,
} as Meta;

export const Default: Story = (args) => <ThreeDBox />;