const XLSX = require('xlsx')

function generateExcel(data) {
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(data)
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
    const fileName = 'data.xlsx'
    XLSX.writeFile(wb, fileName)
    return fileName
}

function generateExcelWithID(webID) {
  const data = [{ ID: webID }];
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  const buffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' })
  return buffer
}

module.exports = { generateExcel, generateExcelWithID }