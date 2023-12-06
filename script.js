import { handleAccordionClick } from './accordion.js';
import { corollaData } from './carsData/corollaData.js';
import { camryData } from './carsData/camryData.js';
import { createModelMarkUp } from './createMarkup.js';

$(document).ready(function () {
  createModelMarkUp(corollaData);
  initializeModel();
  initModelSelection();

  function resetAndInitModel(data) {
    let modelInfo = $('.model__info');
    modelInfo.empty();
    createModelMarkUp(data);
    initializeModel();
  }

  function initializeModel() {
    initAccordion();
    initColorSelection();
    initModel();
  }

  function initAccordion() {
    $('.accordion-title').click(function () {
      handleAccordionClick($(this));
    });
  }

  function initModel() {
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
  function handleModelSelection(clickedModel) {
    if (clickedModel.hasClass('active')) {
      return;
    }
    const modelName = clickedModel.attr('data-name');
    if (modelName === 'corollaData') {
      resetAndInitModel(corollaData);
    } else if (modelName === 'camryData') {
      resetAndInitModel(camryData);
    }
    $('.models__item').removeClass('active');
    clickedModel.addClass('active');
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

  function initModelSelection() {
    $('.models__item').click(function () {
      handleModelSelection($(this));
    });
  }

  function calculatePrice() {
    let modelPriceText = $('.model-price');
    let modelPrice = 0;
    let modelPriceEngine = $('input[name=engine]:checked', '.auto-form').val();
    console.log('modelPriceEngine: ', modelPriceEngine);
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
    console.log(' modelPrice: ', modelPrice);
    modelPriceText.text(modelPrice + ' грн');
    console.log('modelPriceText: ', modelPriceText);
  }

  function compileSpecs() {
    let modelSpecsText = $('.model-specs');
    let modelSpecs = '';
    modelSpecs = $('input[name=engine]:checked + label', '.auto-form').text();
    modelSpecs +=
      ', ' + $('input[name=package]:checked + label', '.auto-form').text();
    modelSpecs +=
      ', ' + $('input[name=transmission]:checked + label', '.auto-form').text();
    modelSpecsText.text(modelSpecs);
    console.log('modelSpecsText: ', modelSpecsText);
  }
});
