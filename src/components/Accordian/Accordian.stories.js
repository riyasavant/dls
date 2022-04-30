import Accordian from "./Accordian";

export default {
    title: 'Accordian'
};

export const BasicAccordian = () => {
    return (
        <div style={{width: '30%'}}>
        <Accordian
            data={[
                {content: 'Some content here', title: 'Title 1'},
                {content: 'Some content here', title: 'Title 2'},
            ]}
        />
        </div>
    )
}