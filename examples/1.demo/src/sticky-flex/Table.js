import React from 'react';
import THead from './THead';
import TBody from './TBody';
import Content from './Content';
import StickyLeft from './StickyLeft';
import StickyRight from './StickyRight';
import LocationContext from './LocationContext';
import Location from './Location';

const getDataSlice = (data, from, till) => {
    return data.map((row) => {
        return row.slice(from, till);
    });
}

const getTheadChildren = (children) => {
    return children.filter((child) => {
        return child.type === THead;
    });
}
const getTbodyChildren = (children) => {
    return children.filter((child) => {
        return child.type === TBody;
    });
}

export default (props) => {

    const {
        stickyLeftColumnCount=0,
        stickyRightColumnCount=0,
        data=[],
        columns=[],
        styleProps={}
    } = props;

    const contentColumnCount=columns.length - stickyLeftColumnCount - stickyRightColumnCount;

    // split columns for: sticky-left-columns, content-columns, sticky-right-columns
    const stickyLeftColumns = columns.slice(0, stickyLeftColumnCount);
    const stickyRightColumns = columns.slice(stickyLeftColumnCount + contentColumnCount);
    const contentColumns = columns.slice(stickyLeftColumnCount, stickyLeftColumnCount+contentColumnCount)

    // split data for sticky-left-columns, content-columns, sticky-right-columns
    const stickyLeftData = getDataSlice(data, 0, stickyLeftColumnCount);
    const stickyRightData = getDataSlice(data, stickyLeftColumnCount + contentColumnCount)
    const contentData = getDataSlice(data, stickyLeftColumnCount, stickyLeftColumnCount+contentColumnCount);

    
    const theadChildren = getTheadChildren(props.children);
    const tbodyChildren = getTbodyChildren(props.children);


    return (
        <div className="sft-wrapper-wrapper">
            <div className="sft-wrapper">
                
                <div className="sft-sticky-left">
    {/* }
                    <Location 
                        columns={stickyLeftColumns}
                        data={stickyLeftData} 
                        slice={{from: 0, to: stickyLeftColumnCount}}
                        
                        theadChildren={theadChildren}
                        tbodyChildren={tbodyChildren}
                    />
    */}
                    <LocationContext.Provider value={{
                        columns: stickyLeftColumns,
                        data: stickyLeftData,
                        slice: {
                            from: 0,
                            to: stickyLeftColumnCount,
                        },
                    }}>
                        <table>
                            {theadChildren}
                            {tbodyChildren}
                        </table>
                    </LocationContext.Provider>
                </div>
                
                <div className="sft-content">
                    <LocationContext.Provider value={{
                        addSpacer: true,
                        columns: contentColumns,
                        data: contentData,
                        slice: {
                            from: stickyLeftColumnCount,
                            to:  stickyLeftColumnCount+contentColumnCount,
                        },
                    }}>
                        <table>
                            {theadChildren}
                            {tbodyChildren}
                        </table>
                    </LocationContext.Provider>
                </div>

                <div className="sft-sticky-right">
                    <LocationContext.Provider value={{
                        columns: stickyRightColumns,
                        data: stickyRightData,
                        slice: {
                            from: stickyLeftColumnCount+contentColumnCount,
                            to: undefined,
                        },
                    }}>
                        <table>
                            {theadChildren}
                            {tbodyChildren}
                        </table>
                    </LocationContext.Provider>
                </div>
            </div>
        </div>
    )
}