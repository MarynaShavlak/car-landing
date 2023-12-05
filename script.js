$(document).ready(function(){
    $('.color-selector .color-item').on('click', function(){
      let imgPath = $(this).attr('data-img-path');
      $('.head-img').attr('src', imgPath)
    })

    let modelSpecs;
    let modelPrice;
    let modelSpecsText;
    let modelPriceText;

    modelSpecsText = $('.model-specs');
    modelPriceText = $('.model-price');

    modelSpecs = '';
    modelPrice = 0;

    function calculatePrice(){
        let modelPriceEngine = $('input[name=engine]:checked', '.auto-form').val();
        let modelPricePackage = $('input[name=package]:checked', '.auto-form').val();
        let modelPriceTransmision = $('input[name=transmision]:checked', '.auto-form').val();
        modelPriceEngine = parseInt(modelPriceEngine);
        modelPricePackage = parseInt(modelPricePackage);
        modelPriceTransmision = parseInt(modelPriceTransmision);
        modelPrice = modelPriceEngine + modelPricePackage + modelPriceTransmision;

        console.log(modelPrice)
    }

    $('.auto-form input').on('change', function(){
        calculatePrice()
    })
    
})