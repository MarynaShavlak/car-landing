import { handleAccordionClick } from './accordion.js';
import { corollaData } from './carsData/corollaData.js';
import { camryData } from './carsData/camryData.js';
import { createModelMarkUp, updateReviewBlock } from './createMarkup.js';
import { handleFaqAccordionClick } from './faq-accordion.js';

$(document).ready(function () {
    let data = corollaData;
  createModelMarkUp(data);
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
    initReviewSelection();
    initModel();
    initFaqBlock();
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

  function initFaqBlock() {
    $('.accordion__faq-title').click(function () {
        handleFaqAccordionClick($(this));
      });
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
        data = corollaData;
      resetAndInitModel(data);
    } else if (modelName === 'camryData') {
        data = camryData;
      resetAndInitModel(data);
    }
    $('.models__item').removeClass('active');
    clickedModel.addClass('active');
  }

  function handleReviewPosition(clickedPosition) {
    if (clickedPosition.hasClass('active')) {
      return;
    }
    $('.review__item').removeClass('active');
    clickedPosition.addClass('active');
    const index = clickedPosition.data('index');
    updateReviewBlock(data.review, index);
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
  function initReviewSelection() {
    $('.review__item').click(function () {
      handleReviewPosition($(this));
    });
  }

  function calculatePrice() {
    let modelPriceText = $('.model-price');
    let modelPrice = 0;
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
    let modelSpecsText = $('.model-specs');
    let modelSpecs = '';
    modelSpecs = $('input[name=engine]:checked + label', '.auto-form').text();
    modelSpecs +=
      ', ' + $('input[name=package]:checked + label', '.auto-form').text();
    modelSpecs +=
      ', ' + $('input[name=transmission]:checked + label', '.auto-form').text();
    modelSpecsText.text(modelSpecs);
  }
});
