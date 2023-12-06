import { populateAccordion, handleAccordionClick } from './accordion.js';
import { corollaData } from "./carsData/corollaData.js";
import { createModelMarkUp } from './createMarkup.js';

$(document).ready(function () {
createModelMarkUp(corollaData);
  const modelSpecsText = $('.model-specs');
  const modelPriceText = $('.model-price');
  let modelSpecs = '';
  let modelPrice = 0;
  
  initAccordion();
  initColorSelection();
  initModel();

  function initAccordion() {
    $('.accordion-title').click(function () {
      handleAccordionClick($(this));
    });
  }

  function initModel() {
    console.log('init calculations');
    calculatePrice();
    compileSpecs();

    $('.auto-form input').on('change', function () {
      initModelDetails();
    });
  }

  function initModelDetails() {
    calculatePrice();
    compileSpecs();
  }

  function handleColorSelection(clickedColor) {
    if (clickedColor.hasClass('active')) {
        return;
      }
  
      const imgPath = clickedColor.attr('data-img-path');
      $('.head-img').attr('src', imgPath);
      resetOtherColors(clickedColor);
      toggleActiveColorClass(clickedColor);
  }

  function resetOtherColors(clickedElement) {
    $('.color-selector .color-item').not(clickedElement).removeClass('active');
  }

  function toggleActiveColorClass(colorItem) {
    colorItem.toggleClass('active');
  }

  function initColorSelection() {
    $('.color-selector .color-item').on('click', function () {
      handleColorSelection($(this));
      
    });
  }

  function calculatePrice() {
    let modelPriceEngine = $('input[name=engine]:checked', '.auto-form').val();
    let modelPricePackage = $(
        'input[name=package]:checked',
        '.auto-form',
        ).val();
        
    let modelPriceTransmision = $(
        'input[name=transmission]:checked',
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
      ', ' + $('input[name=transmission]:checked + label', '.auto-form').text();
    modelSpecsText.text(modelSpecs);
  }
});
