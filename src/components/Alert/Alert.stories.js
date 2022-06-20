import { TrendingUpRounded } from '@mui/icons-material';
import Alert from './Alert';

export default {
    title: 'Alert',
    argTypes: {
        variant: {
          options: ['warning', 'success', 'failure'],
          control: { type: 'radio' },
        },
        label: 'Warning Alert',
        isStatic: {
            options: [false, true],
          control: { type: 'radio' },
        },
        dismiss: {
            options: [2, 4, 6],
            control: {type: 'radio'}
        }
      },
};

const Template = (args) => {
    return <Alert 
        type={args.variant} 
        text={args.label} 
        isStatic={args.isStatic}
        dismiss={args.dismiss || 100}
    />
}

export const Basic = Template.bind({});
Basic.args = {
    variant: 'warning',
    label: 'Warning Alert',
    isStatic: true,
    dismiss: 100,
}