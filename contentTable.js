const content = [
  {
    configName: 'City',
    configProperties: [
      { name: 'Тоновані стекла задніх дверей та заднє скло', value: false },
      {
        name: 'Передні склоочисники з інтервалом роботи, що регулюється',
        value: true,
      },
      { name: 'Склоочисники з сенсором дощу', value: false },
      { name: 'Обігрів заднього скла з автотаймером', value: true },
      {
        name: 'Обігрів лобового скла в зоні покою щіток склоочисників з автотаймером',
        value: false,
      },
      {
        name: 'Електросклопідйомники передніх та задніх вікон (травмобезпечні, з автоматичною функцією)',
        value: true,
      },
    ],
  },
  {
    configName: 'Live 2023',
    configProperties: [
      { name: 'Тоновані стекла задніх дверей та заднє скло', value: false },
      {
        name: 'Передні склоочисники з інтервалом роботи, що регулюється',
        value: true,
      },
      { name: 'Склоочисники з сенсором дощу', value: false },
      { name: 'Обігрів заднього скла з автотаймером', value: true },
      {
        name: 'Обігрів лобового скла в зоні покою щіток склоочисників з автотаймером',
        value: false,
      },
      {
        name: 'Електросклопідйомники передніх та задніх вікон (травмобезпечні, з автоматичною функцією)',
        value: true,
      },
    ],
  },
  {
    configName: 'Active 2023',
    configProperties: [
      { name: 'Тоновані стекла задніх дверей та заднє скло', value: false },
      {
        name: 'Передні склоочисники з інтервалом роботи, що регулюється',
        value: true,
      },
      { name: 'Склоочисники з сенсором дощу', value: true },
      { name: 'Обігрів заднього скла з автотаймером', value: true },
      {
        name: 'Обігрів лобового скла в зоні покою щіток склоочисників з автотаймером',
        value: false,
      },
      {
        name: 'Електросклопідйомники передніх та задніх вікон (травмобезпечні, з автоматичною функцією)',
        value: true,
      },
    ],
  },
  {
    configName: 'Style 2023',
    configProperties: [
      { name: 'Тоновані стекла задніх дверей та заднє скло', value: true },
      {
        name: 'Передні склоочисники з інтервалом роботи, що регулюється',
        value: true,
      },
      { name: 'Склоочисники з сенсором дощу', value: true },
      { name: 'Обігрів заднього скла з автотаймером', value: true },
      {
        name: 'Обігрів лобового скла в зоні покою щіток склоочисників з автотаймером',
        value: true,
      },
      {
        name: 'Електросклопідйомники передніх та задніх вікон (травмобезпечні, з автоматичною функцією)',
        value: true,
      },
    ],
  },
  {
    configName: 'GR Sport',
    configProperties: [
      { name: 'Тоновані стекла задніх дверей та заднє скло', value: true },
      {
        name: 'Передні склоочисники з інтервалом роботи, що регулюється',
        value: true,
      },
      { name: 'Склоочисники з сенсором дощу', value: true },
      { name: 'Обігрів заднього скла з автотаймером', value: true },
      {
        name: 'Обігрів лобового скла в зоні покою щіток склоочисників з автотаймером',
        value: true,
      },
      {
        name: 'Електросклопідйомники передніх та задніх вікон (травмобезпечні, з автоматичною функцією)',
        value: true,
      },
    ],
  },
];

// export function createTable() {
//   const table = document.createElement('table');
//   const tableBody = table.createTBody();

//   const headerRow = table.createTHead().insertRow();
//   const configNameHeaderCell = document.createElement('th');
//   configNameHeaderCell.textContent = 'Комплектація';
//   headerRow.appendChild(configNameHeaderCell);

//   for (const config of content) {
//     const headerCell = document.createElement('th');
//     headerCell.textContent = config.configName;
//     headerRow.appendChild(headerCell);
//   }

//   for (const property of content[0].configProperties) {
//     const row = tableBody.insertRow();
//     const propertyNameCell = row.insertCell();
//     propertyNameCell.textContent = property.name;

//     for (const config of content) {
//       const valueCell = row.insertCell();
//       valueCell.textContent =
//         config.configProperties
//           .find(prop => prop.name === property.name)
//           ?.value.toString() || '';
//     }
//   }

//   return table;
// }


export function createTable() {
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
      const valueCellHTML = `<td>${config.configProperties.find(prop => prop.name === property.name)?.value.toString() || ''}</td>`;
      rowHTML += valueCellHTML;
    }

    rowHTML += '</tr>';
    tableBodyHTML += rowHTML;
  }

  tableHTML += tableBodyHTML + '</tbody></table>';
  return tableHTML;
}