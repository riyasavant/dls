import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ThreeDObject } from "./ThreeDObject";

export default {
  title: "ThreeDObject",
  component: ThreeDObject,
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Default: Story = (args) => <ThreeDObject />;