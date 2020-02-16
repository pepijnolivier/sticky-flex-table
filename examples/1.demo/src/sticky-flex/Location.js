import React from 'react';
import LocationContext from './LocationContext';

const Location = ({columns, data, slice, theadChildren, tbodyChildren}) => {

    return (
        <LocationContext.Provider value={{columns,data,slice}}>
            <table>
                {theadChildren}
                {tbodyChildren}
            </table>
        </LocationContext.Provider>
    )

}

export default Location;