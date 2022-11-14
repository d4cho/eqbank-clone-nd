import React from 'react';
import './SlideInSearchBar.css';
import SearchBar from '../../Atoms/SearchBar/SearchBar';

function SlideInSearchBar({slideInSearchBar, closeShow}) {
    return (
        <>
            <div className={slideInSearchBar}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <SearchBar />
                    <span className='search-close-button'>
                        <img
                            onClick={closeShow}
                            src='https://www.eqbank.ca/Assets/dist/images/search-close-icon.svg'
                            alt=''
                        />
                    </span>
                    <button className='Go-button'>Go</button>
                </div>
            </div>
        </>
    );
}

export default SlideInSearchBar;
