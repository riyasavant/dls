import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Grid from "../Grid/Grid";
import Vertical_Slider from "./Slider";


export default {
  title: "Grid",
  component: Grid,
} as Meta;

export const Basic: Story = (args) => (
  <div style={{ position: "relative" }}>
    <Grid
      container
      spacing="sm"
      alignItems="center"
      style={{ height: "100%" }}
      {...args}
    >
      <Grid item xs={12} sm={6} md={4} lg={3}>
          <Vertical_Slider variant="enabled" min={1} max={100} value={29} step={30}></Vertical_Slider>    
      </Grid>

     
    </Grid>
  </div>
);
