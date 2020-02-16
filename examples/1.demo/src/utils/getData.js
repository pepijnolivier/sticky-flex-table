


function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const getValueForColumn = (column, age) => {
    switch(column.id) {
        case 'date':
            return addDays(new Date(), age).toLocaleDateString();
        case 'age':
            return '' + age;
        case 'actions':
            return 'Actions';
        case 'details':
            return 'Details';
        default:
            const val = parseInt(Math.random() * 1000000);
            const formatted = Intl.NumberFormat('de-DE').format(val);
            return formatted;
    }
}


export default ({rowsToGenerate=30, columns=[]}) => {
    const rows = [];

    for(let i = 0; i < rowsToGenerate; i++) {
        const row = [];

        for(let j = 0; j < columns.length; j++) {
            const column = columns[j];

            const val = getValueForColumn(column, i);
            row.push(val);
        }

        rows.push(row);
    }

    return rows;
};