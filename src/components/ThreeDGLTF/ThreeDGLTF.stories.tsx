import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ThreeDGLTF } from "./ThreeDGLTF";

export default {
  title: "ThreeDGLTF",
  component: ThreeDGLTF,
} as Meta;

export const Default: Story = (args) => <ThreeDGLTF />;