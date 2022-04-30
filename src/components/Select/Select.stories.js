import { useState } from 'react';
import Select from "./Select";

export default {
    title: 'Select'
};

export const SimpleSelect = () => {
    const [month, setMonth] = useState('Jan');
    return (
        <div style={{width: '30%'}}>
        <Select
            label="Month"
            onChange={(value) => setMonth(value)}
            data={[
                {value: 'Jan', name: 'January'},
                {value: 'Feb', name: 'February'},
                {value: 'Mar', name: 'March'},
                {value: 'Apr', name: 'April'},
                {value: 'May', name: 'May'},
                {value: 'Jun', name: 'June'},
                {value: 'Jul', name: 'July'},
                {value: 'Aug', name: 'August'},
                {value: 'Sep', name: 'September'},
                {value: 'Oct', name: 'October'},
                {value: 'Nov', name: 'November'},
                {value: 'Dec', name: 'December'},
            ]}
        />
        </div>
    )
}