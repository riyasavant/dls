import Badge from "./Badge";

export default {
    title: 'Badge',
    argTypes: {
        variant: {
          options: ['warning', 'success', 'failure'],
          control: { type: 'radio' },
        },
        label: 'Warning',
    },
};

const Template = (args) => {
    return <Badge type={args.variant} text={args.label}/>
}

export const Default = Template.bind({});
Default.args = {
    variant: 'warning',
    label: 'Warning'
}