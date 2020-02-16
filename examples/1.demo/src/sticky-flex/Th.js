import React from 'react';

export default (props) => {

    const x = 'y';

    return (
        <th>
            <div>
                {props.children}
            </div>
        </th>
    )
}