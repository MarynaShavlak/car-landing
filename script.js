import { populateAccordion, handleAccordionClick } from './accordion.js';



$(document).ready(function () {
    populateAccordion('.accordion__container');
    $('.accordion-title').click(function () {
        handleAccordionClick($(this));
      });


  $('.color-selector .color-item').on('click', function () {
    let imgPath = $(this).attr('data-img-path');
    $('.head-img').attr('src', imgPath);
  });

  let modelSpecs;
  let modelPrice;
  let modelSpecsText;
  let modelPriceText;

  modelSpecsText = $('.model-specs');
  modelPriceText = $('.model-price');

  modelSpecs = '';
  modelPrice = 0;
  calculatePrice();
  compileSpecs();

  function calculatePrice() {
    let modelPriceEngine = $('input[name=engine]:checked', '.auto-form').val();
    let modelPricePackage = $(
      'input[name=package]:checked',
      '.auto-form',
    ).val();
    let modelPriceTransmision = $(
      'input[name=transmision]:checked',
      '.auto-form',
    ).val();
    modelPriceEngine = parseInt(modelPriceEngine);
    modelPricePackage = parseInt(modelPricePackage);
    modelPriceTransmision = parseInt(modelPriceTransmision);
    modelPrice = modelPriceEngine + modelPricePackage + modelPriceTransmision;
    modelPriceText.text(modelPrice + ' грн');
  }

  function compileSpecs() {
    modelSpecs = $('input[name=engine]:checked + label', '.auto-form').text();
    modelSpecs +=
      ', ' + $('input[name=package]:checked + label', '.auto-form').text();
    modelSpecs +=
      ', ' + $('input[name=transmision]:checked + label', '.auto-form').text();
    modelSpecsText.text(modelSpecs);
  }

  $('.auto-form input').on('change', function () {
    calculatePrice();
    compileSpecs();
  });


  
});
