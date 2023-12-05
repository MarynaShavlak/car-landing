export function createTable(content) {
  console.log('content: ', content);
  let tableHTML = '<table>';
  let  tableBodyHTML = '<tbody>';

  let headerRowHTML = '<thead><tr>';
  let configNameHeaderCellHTML = '<th>Комплектація</th>';
  headerRowHTML += configNameHeaderCellHTML;

  for (let config of content) {
    const headerCellHTML = `<th>${config.configName}</th>`;
    headerRowHTML += headerCellHTML;
  }
  headerRowHTML += '</tr></thead>';
  tableHTML += headerRowHTML;

  for (let  property of content[0].configProperties) {
    let rowHTML = '<tr>';
    const propertyNameCellHTML = `<td class='header-column'>${property.name}</td>`;
    rowHTML += propertyNameCellHTML;

    for (let  config of content) {
      const value = config.configProperties.find(prop => prop.name === property.name)?.value;
      const valueCellHTML = `<td>${valueToMarkup(value)}</td>`;
      rowHTML += valueCellHTML;
    }

    rowHTML += '</tr>';
    tableBodyHTML += rowHTML;
  }

  tableHTML += tableBodyHTML + '</tbody></table>';
  return tableHTML;
}


function valueToMarkup(value) {
  if (value === true) {
    return "<i class='fa-solid fa-check'></i>";
  } else if (value === false) {
    return "<i class='fa-solid fa-minus'></i>";
  } else {
    return "";
  }
}