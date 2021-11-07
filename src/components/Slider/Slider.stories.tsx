import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {Slider} from "./Slider";

export default {
  title: "Slider",
  component: Slider,
} as Meta;

export const Enabled: Story = (args) => (
    <Slider variant="enabled" min={0} max={100} step={1} value={40} />
);

export const Disabled: Story = (args) => (
    <Slider variant="disabled" min={0} max={100} step={1} value={80} />
);

