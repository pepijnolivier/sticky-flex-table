import React from 'react';
import HeadOrBodyContext from './HeadOrBodyContext';

const THead = (props) => {
    const {children} = props;
    return (
        <HeadOrBodyContext.Provider value={{tableElement: 'thead'}}>
            <thead>
                {children}
            </thead>
        </HeadOrBodyContext.Provider>
    )
}
export default THead;