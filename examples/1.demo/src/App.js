import React from 'react';
import './App.css';

import getData from './utils/getData';
import stuff from './sticky-flex';
const {Table, THead, Tr, Th, TBody, Td} = stuff;

function MyTHeadCell(props) {
  return (
    <span style={{color: 'brown', float: props.column.align}}>{props.children}</span>
  )
}
function MyTBodyCell(props) {
  return (
    <span style={{color: '#111', float: props.column.align}}>{props.children}</span>
  )
}

function App() {
  const getColumns = () => {
    return [
        {id: 'date', label: 'Date', align: "right"},
        {id: 'age', label: 'Age', align: "right"},

        {id: 'oranges', label: 'Oranges', align: "right"},
        {id: 'apples', label: 'Apples', align: "right"},
        {id: 'kiwis', label: 'Kiwis', align: "right"},
        {id: 'bananas', label: 'Bananas', align: "right"},
        {id: 'strawberries', label: 'XXL Strawberries biological and from your local farmer', align: "right"},
        {id: 'raspberries', label: 'Raspberries', align: "right"},
        {id: 'peaches', label: 'Peaches', align: "right"},

        {id: 'actions', label: 'Actions', align: "left"},
        {id: 'details', label: 'Details', align: "left"},
    ]
  }


  /**
   * Todo: pass these down and accept them
   */
  const getStyleProps = () => {

    return {};

    const styleProps = {
      // variables to interpret.
      maxTableWidth: '1024px', // optional
      maxTableHeight: 'calc(100vh - 180px)', // optional
      tableCellPadding: '16px', // optional

      tableHeadCellHeight: '150px', // required
      tableCellHeight: '18px', // required
      minColWidth: '40px', // optional
      maxColWidth: '100px', // optionsal
    }
  }

  const styleProps = getStyleProps();
  const columns = getColumns();
  const data = getData({rowsToGenerate: 300, columns});


  return (
    <div className="App">
        <Table
          stickyLeftColumnCount={3} // amount of columns that will stick to the left side
          stickyRightColumnCount={2} // amount of columns that will stick to the right side
          data={data} // data set, an array with arrays of lengths equal to columns.length
          columns={columns} // column definitions

          styleProps={styleProps}
        >
            <THead>
              <Tr>
                {columns.map((column) => (
                  <Th>
                      <MyTHeadCell column={column}>{column.label}</MyTHeadCell>
                  </Th>
                ))}
              </Tr>
            </THead>

            <TBody>
              {data.map((row) => (
                <Tr>
                  {columns.map((column, idx) => (
                    <Td>
                      <MyTBodyCell column={column}>{row[idx]}</MyTBodyCell>
                    </Td>
                  ))}
                </Tr>
              ))}
            </TBody>
        </Table>
    </div>
  );
}

export default App;
