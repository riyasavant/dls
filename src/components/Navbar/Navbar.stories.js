import { useState } from 'react';
import Navbar from "./Navbar";

export default {
    title: 'Navbar'
};

export const Basic = () => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
    };

    return (
        <Navbar setQuery={handleChange} title="Navbar"/>
    )
}