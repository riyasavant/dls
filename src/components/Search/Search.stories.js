import { useState } from 'react';
import Search from "./Search";

export default {
    title: 'Search Bar'
};

export const Basic = () => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
    };

    return (
        <Search setQuery={handleChange}/>
    )
}