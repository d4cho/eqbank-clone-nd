import React from 'react';
import './FilterButton.css';

function FilterButton({
    Label,
    width,
    backgroundColor,
    border,
    color,
    marginTop,
    cursor,
    icon,
    onClick,
    id
}) {
    return (
        <button
            onClick={() => onClick(id)}
            className='filter-button'
            style={{
                width: width,
                backgroundColor:backgroundColor,
                border: border,
                color: color,
                marginTop: marginTop,
                cursor: cursor,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    justifyContent: 'center',
                    fontWeight:'bold'
                }}
            >
                {' '}
                {icon}
                {Label}
            </div>
        </button>
    );
}

export default FilterButton;
