import React from 'react';
import LocationContext from './LocationContext';
import HeadOrBodyContext from './HeadOrBodyContext';

const Tr = (props) => {
    const {children} = props;
    return (
        <tr>
            <HeadOrBodyContext.Consumer>
                {(headOrBodyContext) => {

                    const {tableElement} = headOrBodyContext;

                    const style = {width: '100%'};
                    const spacerElement = tableElement === 'thead' ? <th className="sft-spacer" style={style} /> : <td className="sft-spacer" style={style} />;

                    return (
                        <React.Fragment>
                            <LocationContext.Consumer>
                            {(context) => {
                                const {columns, slice, data, addSpacer, tableElement} = context;
                                const slicedChildren = children.slice(slice.from, slice.to);

                                slicedChildren.forEach((child, idx) => {
                                    // set column and data in prop
                                    // const _data = data[idx];
                                    // child.props.data = _data;
                                })

                                if(addSpacer) {
                                    slicedChildren.push(spacerElement);
                                }

                                return slicedChildren;
                            }}
                            </LocationContext.Consumer>
                        </React.Fragment>
                    )
                }}
            </HeadOrBodyContext.Consumer>
        </tr>
    )
}
export default Tr;