import React from 'react';
import List from './List';

export default {
    title: 'List'
};

export const Default = () => {
    const items = ['List item 1', 'List item 2', 'List item 3']
    return (
        <List data={items}/>
    )
}