import React from 'react';
import './FilterButton.css';

function FilterButton({
    Label,
    width,
    backgroundColor,
    color,
    marginTop,
    cursor,
    icon,
    onClick,
    id,
    borderBottom,
    borderRadius,
    borderBottomMobile,
    matches,
    borderLeft,
    borderRight,
    borderTop
}) {
    return (
        <button
            onClick={() => onClick(id)}
            className='filter-button'
            style={{
                width: width,
                backgroundColor: backgroundColor,
                borderTop:matches? borderTop: null,
                borderLeft:matches? borderLeft: null,
                borderRight: matches? borderRight: null,
                color: color,
                marginTop: marginTop,
                cursor: cursor,
                borderBottom: matches ? borderBottom : borderBottomMobile,
                borderRadius: borderRadius,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    justifyContent: 'center',
                    fontWeight: 'bold',
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
