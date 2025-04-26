import { populateContainerWithData } from "./accordion.js";

function createFaqAccordionItem(data) {
  const { title, content } = data;
  const accordionItem = $(
    '<div class="accordion">' +
      '<div class="accordion__faq-title">' +
      title +
      '<button class="icon" type="button"><i class="fa-solid fa-plus"></i></button>' +
      '</div>' +
      '<div class="accordion__faq-content">' +
      content +
      '</div>' +
      '</div>',
  );
  return accordionItem;
}

export function handleFaqAccordionClick(clickedElement) {
  toggleFaqAccordionContent(clickedElement);
  closeOtherFaqAccordionContents(clickedElement);
  toggleFaqActiveClass(clickedElement);
  toggleFaqIcon(clickedElement);
}

 function toggleFaqAccordionContent(accordionTitle) {
  accordionTitle.next('.accordion__faq-content').slideToggle();
}

 function closeOtherFaqAccordionContents(clickedElement) {
  $('.accordion__faq-content')
    .not(clickedElement.next('.accordion__faq-content'))
    .slideUp();
  $('.accordion__faq-title').not(clickedElement).removeClass('active');
  $('.accordion__faq-title')
    .not(clickedElement)
    .find('.icon')
    .html('<i class="fa-solid fa-plus"></i>');
}

 function toggleFaqActiveClass(accordionTitle) {
  accordionTitle.toggleClass('active');
}

 function toggleFaqIcon(accordionTitle) {
  let $icon = accordionTitle.find('.icon');
  if ($icon.children().hasClass('fa-plus')) {
    $icon.html('<i class="fa-solid fa-xmark"></i>');
  } else {
    $icon.html('<i class="fa-solid fa-plus"></i>');
  }
}

 function populateFaqAccordion(containerSelector, data) {
  populateContainerWithData(data, createFaqAccordionItem, containerSelector);
}

export function createFaqBlock(data) {
  const wrap = $('<div>').addClass('faq__wrap');
  const title = $('<h4>').addClass('faq__title').text('Питання та відповіді');
  wrap.append(title);
  let block = $('<div>').addClass('accordion__faq');
  wrap.append(block);
  $('.model__info').append(wrap);
  populateFaqAccordion('.accordion__faq', data);
  return wrap;
}
