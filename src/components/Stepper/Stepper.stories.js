import Stepper from "./Stepper";

export default {
    title: 'Stepper'
};

export const BasicTable = () => {
    return (
        <div style={{width: '50%'}}>
            <Stepper steps={['First', 'Second', 'Third']}/>
        </div>
    )
}