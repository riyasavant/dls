import Accordian from "./Accordian";

export default {
    title: 'Accordian',
    argTypes: {
        variant: {
          options: ['large', 'medium', 'small'],
          control: { type: 'radio' },
        },
      },
};

const Template = (args) => {
    const widthObj = {
        large: '100%',
        medium: '50%',
        small: '30%',
    }
    return (
        <div style={{width: widthObj[args.variant]}}>
            <Accordian
                data={[
                    {content: 'Some content here', title: 'Title 1'},
                    {content: 'Some content here', title: 'Title 2'},
                ]}
            />
        </div>
    )
}

export const Basic = Template.bind({});
Basic.args = {
  variant: 'large',
};