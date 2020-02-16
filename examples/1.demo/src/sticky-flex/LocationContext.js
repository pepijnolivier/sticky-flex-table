import React from 'react';
    const LocationContext = React.createContext({
        addSpacer: false,
        columns: 0,
        data: [],
        slice: {
            from: 0,
            to: undefined,
        },
    });

    export default LocationContext;