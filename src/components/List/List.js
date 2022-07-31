import React from 'react';
import "./List.css"
const List = ({children}) => {
    return (
        <ul className='list flex flex-col'>
            {children}            
        </ul>
    );
};

export default List;