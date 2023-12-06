import { populateAccordion } from './accordion.js';

export function createModelMarkUp(data) {
  const { name, startColor, characteristics, colors, variants, review } = data;
  $('.model__info').append('<h2 class="model__title">' + name + '</h2>');
  $('.model__info').append(createHeader(startColor, name));
  $('.model__info').append(createAutoForm(characteristics));
  $('.model__info').append(createColorSelectorBlock(colors));
  $('.model__info').append(createVariantsBlock());
  populateAccordion('.accordion__container', variants);
  $('.model__info').append(createReviewBlock(review));

}

export function createTable(content) {
  let tableHTML = '<table>';
  let tableBodyHTML = '<tbody>';

  let headerRowHTML = '<thead><tr>';
  let configNameHeaderCellHTML = '<th>Комплектація</th>';
  headerRowHTML += configNameHeaderCellHTML;

  for (let config of content) {
    const headerCellHTML = `<th>${config.configName}</th>`;
    headerRowHTML += headerCellHTML;
  }
  headerRowHTML += '</tr></thead>';
  tableHTML += headerRowHTML;

  for (let property of content[0].configProperties) {
    let rowHTML = '<tr>';
    const propertyNameCellHTML = `<td class='header-column'>${property.name}</td>`;
    rowHTML += propertyNameCellHTML;

    for (let config of content) {
      const value = config.configProperties.find(
        prop => prop.name === property.name,
      )?.value;
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
    return '';
  }
}

function createColorSelectorBlock(colors) {
  let colorSelectorBlock = $('<div class="colors__wrap"></div>');
  let colorSelectorList = $('<div class="color-selector"></div>');

  colors.forEach(function (color) {
    const { className, imgPath } = color;
    let colorItem = $('<div class="color-item ' + className + '"></div>');
    colorItem.attr('data-img-path', imgPath);
    colorSelectorList.append(colorItem);
  });

  colorSelectorBlock.append('<h4>Вибір кольору</h4>');
  colorSelectorBlock.append(colorSelectorList);
  return colorSelectorBlock;
}

function createRadioButtons(key, title, types) {
  let radioGroup = $('<div class="item"></div>');

  radioGroup.append('<h4>' + title + '</h4>');

  types.forEach(function (type, index) {
    const { name, label, value } = type;
    let isChecked = index === 0;
    let formBlock = $('<div class="form-block"></div>');
    formBlock.append(
      '<input type="radio" name="' +
        key +
        '" id="' +
        name +
        '" value="' +
        value +
        '"' +
        (isChecked ? ' checked' : '') +
        ' />',
    );

    formBlock.append('<label for="' + name + '">' + label + '</label>');
    formBlock.append(
      '<div class="bullet">' +
        '<div class="line zero"></div>' +
        '<div class="line one"></div>' +
        '<div class="line two"></div>' +
        '<div class="line three"></div>' +
        '<div class="line four"></div>' +
        '<div class="line five"></div>' +
        '<div class="line six"></div>' +
        '<div class="line seven"></div>' +
        '</div>',
    );
    radioGroup.append(formBlock);
  });

  return radioGroup;
}

function createHeader(imgSrc, modelName) {
  let header = $('<div class="header"></div>');
  header.append(
    '<img src="' + imgSrc + '" alt="Фото машини" class="head-img" />',
  );

  let modelSummary = $('<div class="model-summary"></div>');
  modelSummary.append('<h2 class="model-name">' + modelName + '</h2>');
  modelSummary.append('<div class="model-specs"></div>');
  modelSummary.append('<p class="model-price"></p>');
  modelSummary.append('<button class="btn-order">Замовити</button>');

  header.append(modelSummary);

  return header;
}

function createAutoForm(characteristics) {
  let autoForm = $('<form class="auto-form"></form>');
  autoForm.append('<h3>Характеристики</h3>');
  let autoSpecs = $('<div class="auto-specs"></div>');

  Object.keys(characteristics).forEach(function (key) {
    autoSpecs.append(
      createRadioButtons(
        key,
        characteristics[key].title,
        characteristics[key].types,
      ),
    );
  });

  autoForm.append(autoSpecs);
  return autoForm;
}

function createVariantsBlock() {
  let accordionWrapper = $('<div class="accordion__wrapper"></div>');
  accordionWrapper.append(
    '<h2 class="accordion__wrap-title">Порівняння комплектацій</h2>',
  );

  let accordionContainer = $(
    '<div class="accordion__container variants"></div>',
  );
  accordionWrapper.append(accordionContainer);
  return accordionWrapper;
}

function createReviewBlock(info) {
  const $block = $('<div>').addClass('model__review');
  const title = $('<h4>').addClass('review__title').text('Огляд моделі');
  $block.append(title);
  const {positions} = info;
  const $ul = $('<ul>').addClass('review__info');
  const posList = positions[0].descr;
  posList.forEach((position, index) => {
    const $li = $('<li>').addClass('info__item');
    const $img = $('<img>')
      .attr('src', position.image)
      .addClass('info__img')
      .attr('alt', 'Фото машини');
    const $wrap = $('<div>').addClass('info__wrap');
    const $title = $('<h4>')
      .addClass('info__title')
      .text(position.title);
    const $text = position.text.map(para => {
      console.log('para: ', para);
      return $('<p>').addClass('info__text').text(para);
    }
      
      

    );

    $wrap.append($title, $text);

    if (index % 2 !== 0) {
      $li.append($wrap, $img);
    } else {
      $li.append($img, $wrap);
    }
    $ul.append($li);
  });

  $block.append(createReviewList(positions));
  $block.append($ul);
  return $block;
}


function createListItem(position, index) {
  const isActive = index === 0;
  const classNames = isActive ? 'review__item active' : 'review__item';
  const listItem = $('<li>', {
    class: classNames,
    text: position.name,
    'data-index': index  
  });
  return listItem;
}

function createReviewList(positions) {
  let reviewList = $('<ul>', { class: 'review__list' });
  positions.forEach(function (position, index) {
    let listItem = createListItem(position, index);
    reviewList.append(listItem);
  });

  return reviewList;
}


export function updateReviewBlock(info, index) {
  const {positions} = info;
  $('.review__info').empty();
  const posList = positions[index].descr;
  posList.forEach((position, index) => {
    const $li = $('<li>').addClass('info__item');
    const $img = $('<img>')
      .attr('src', position.image)
      .addClass('info__img')
      .attr('alt', 'Фото машини')
      .attr('width', '570')
      .attr('height', '403');
    const $wrap = $('<div>').addClass('info__wrap');
    const $title = $('<h4>')
      .addClass('info__title')
      .text(position.title);


      const $text = position.text.map(param => {
        const isList = param.includes("\n");
        console.log('isList: ', isList);
        let el;
        if(isList) {
          const additionalInfoList = param
          .split('\n')
          .map(para => $('<li>').addClass('info__text-item').text(para.trim()));
      
          el = $('<ul>').addClass('info__text-list').append(additionalInfoList);
        } else {
          el =$('<p>').addClass('info__text').text(param);
        }

        
        return el;
      })

    $wrap.append($title, $text);

    if (index % 2 !== 0) {
      $li.append($wrap, $img);
    } else {
      $li.append($img, $wrap);
    }
    $('.review__info').append($li);
  });

}
