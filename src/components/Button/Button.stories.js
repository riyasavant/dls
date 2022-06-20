import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      option: ['filled', 'outlined', 'link'],
      control: { type: 'radio' }
    },
    label: 'This is filled'
  },
};

const Template  = (args) => (
  <Button variant={args.variant} onClick={() => console.log('clicked')}>{args.label}</Button>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'filled',
  label: 'This is filled',
}