
import { createTable } from './createMarkup.js';


function createAccordionItem(data) {
  const { title, content } = data;
  const table = createTable(content);
  const accordionItem = $(
    '<div class="accordion">' +
      '<div class="accordion-title">' +
      title +
      '<button class="btn-icon" type="button"><span>Розгорнути</span><i class="fa-solid fa-chevron-down"></i></button>' +
      '</div>' +
      '<div class="accordion-content">' +
      table  +
      '</div>' +
      '</div>',
  );
  return accordionItem;
}

export function handleAccordionClick(clickedElement) {
  toggleAccordionContent(clickedElement);
  closeOtherAccordionContents(clickedElement);
  toggleActiveClass(clickedElement);
  toggleIcon(clickedElement);
}
export function populateAccordion(containerSelector, data) {
  populateContainerWithData(data, createAccordionItem, containerSelector);
}


 function toggleAccordionContent(accordionTitle) {
  accordionTitle.next('.accordion-content').slideToggle();
}

 function closeOtherAccordionContents(clickedElement) {
  $('.accordion-content')
    .not(clickedElement.next('.accordion-content'))
    .slideUp();
  $('.accordion-title').not(clickedElement).removeClass('active');
  $('.accordion-title')
    .not(clickedElement)
    .find('.btn-icon')
    .html('<span>Розгорнути</span><i class="fa-solid fa-chevron-down"></i>');
}

 function toggleActiveClass(accordionTitle) {
  accordionTitle.toggleClass('active');
}

 function toggleIcon(accordionTitle) {
  let $icon = accordionTitle.find('.btn-icon');
  if ($icon.children().hasClass('fa-chevron-down')) {
    $icon.html('<span>Згорнути</span><i class="fa-solid fa-chevron-up"></i>');
  } else {
    $icon.html('<span>Розгорнути</span><i class="fa-solid fa-chevron-down"></i>');
  }
}

function populateContainerWithData(
  dataArray,
  createItemFunction,
  containerSelector,
) {
  dataArray.forEach(function (data) {
    const item = createItemFunction(data);
    $(containerSelector).append(item);
  });
}

