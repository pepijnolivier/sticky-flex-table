import React from 'react';
import HeadOrBodyContext from './HeadOrBodyContext';

const TBody = (props) => {
    const {children} = props;
    return (
        <HeadOrBodyContext.Provider value={{tableElement: 'thead'}}>
            <tbody>
                {children}
            </tbody>
        </HeadOrBodyContext.Provider>
    )
}
export default TBody;