import Input from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    variant: {
      option: [true, false],
      control: { type: 'radio' }
    }
  },
};

const Template = (args) => (
    <Input name="username" label="Username" disabled={args.variant}></Input>
);

export const Default = Template.bind({});
Default.args = {
  enabled: true
}