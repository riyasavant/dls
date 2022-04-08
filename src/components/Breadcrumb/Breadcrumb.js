import React from 'react';

export default function Breadcrumb({ items, onClick }) {
    return (
        <div style={{display: 'flex'}}>
        {items.map((item, index) => {
            return (
                <div style={{display: 'flex'}}>
                    <div
                        style={{
                            cursor: `${!(index !== items.length - 1) ? 'none' : 'pointer'}`,
                            color: `${!(index !== items.length - 1) ? 'grey' : 'blue'}`
                        }}
                        onClick={() => onClick(item)}
                    >
                        {item}
                    </div>
                    {(index !== items.length - 1) && <span style={{margin: '0 8px'}}>/</span>}
                </div>
            )
        })}
        </div>
    );
};