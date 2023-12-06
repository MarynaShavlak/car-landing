export const camryData = {
  name: 'Model Toyota Camry',
  startColor: 'img/camry/black.png',
  characteristics: {
    engine: {
      title: 'Двигун',
      types: [
        { name: 'engine2500', label: '2.5L Inline-4 engine', value: '76200' },
        { name: 'engine3500', label: '3.5L V6 engine', value: '80200' },
        { name: 'engine2000', label: '2.0L Turbocharged engine', value: '90300' },
      ],
    },
    package: {
      title: 'Пакет',
      types: [
        { name: 'packageComfort', label: 'Comfort', value: '100800' },
        { name: 'packageElegance', label: 'Elegance', value: '124560' },
        { name: 'packagePrestige', label: 'Prestige', value: '562560' },
        { name: 'packagePremium', label: 'Premium', value: '824560' },
      ],
    },

    transmission: {
      title: 'Коробка передач',
      types: [
        { name: 'auto', label: 'Автомат', value: '23000' },
        { name: 'manual', label: 'Ручна', value: '12000' },
      ],
    },
  },
  colors: [
    { className: 'colorWhite', imgPath: 'img/camry/white.png' },
    { className: 'colorBlack active', imgPath: 'img/camry/black.png' },
    { className: 'colorSilver', imgPath: 'img/camry/silver.png' },
    { className: 'colorBrown', imgPath: 'img/camry/brown.png' },
    { className: 'colorBlue', imgPath: 'img/camry/blue.png' },
    { className: 'colorRed', imgPath: 'img/camry/red.png' },
  ],
  variants: [
    {
      title: 'Екстер′єр',
      content: [
        {
          configName: 'Comfort',
          configProperties: [
            { name: 'Сіра нижня решітка радіатора', value: false },
            { name: 'Чорна глянцева нижня решітка радіатора', value: true },
            { name: 'Декоративні сріблясті вставки переднього бампера', value: true  },
            { name: 'Декоративні хромовані вставки переднього бампера', value: false },
            { name: 'Глянцеві вставки центральної стійки', value: false },
            { name: 'Панорамний дах з люком', value: false }
          ]
        },
        {
          configName: 'Elegance',
          configProperties: [
            { name: 'Сіра нижня решітка радіатора', value: false },
            { name: 'Чорна глянцева нижня решітка радіатора', value: true },
            { name: 'Декоративні сріблясті вставки переднього бампера', value: true  },
            { name: 'Декоративні хромовані вставки переднього бампера', value: false },
            { name: 'Глянцеві вставки центральної стійки', value: false },
            { name: 'Панорамний дах з люком', value: false }
          ]
        },
        {
          configName: 'Prestige',
          configProperties: [
            { name: 'Сіра нижня решітка радіатора', value: true },
            { name: 'Чорна глянцева нижня решітка радіатора', value: false },
            { name: 'Декоративні сріблясті вставки переднього бампера', value: false },
            { name: 'Декоративні хромовані вставки переднього бампера', value: true },
            { name: 'Глянцеві вставки центральної стійки', value: true },
            { name: 'Панорамний дах з люком', value: false}
          ]
        },
        {
          configName: 'Premium',
          configProperties: [
            { name: 'Сіра нижня решітка радіатора', value: true },
            { name: 'Чорна глянцева нижня решітка радіатора', value: false },
            { name: 'Декоративні сріблясті вставки переднього бампера', value: false },
            { name: 'Декоративні хромовані вставки переднього бампера', value: true },
            { name: 'Глянцеві вставки центральної стійки', value: true },
            { name: 'Панорамний дах з люком', value: true}
          ]
        },
        
      ]
       
    },
    {
      title: 'Фари',
      content: [
        {
          configName: 'Comfort',
          configProperties: [
            { name: 'Світлодіодні фари головного світла з денними ходовими вогнями', value: true },
            { name: 'Світлодіодні фари головного світла з характерними денними ходовими вогнями', value: false },
            { name: 'Автоматичний коректор кута нахилу фар головного світла', value: true},
            { name: 'Світлодіодні задні ліхтарі з характерними габаритними вогнями', value: false },
          ]
        },
        {
          configName: 'Elegance',
          configProperties: [
            { name: 'Світлодіодні фари головного світла з денними ходовими вогнями', value: true },
            { name: 'Світлодіодні фари головного світла з характерними денними ходовими вогнями', value: false },
            { name: 'Автоматичний коректор кута нахилу фар головного світла', value: true},
            { name: 'Світлодіодні задні ліхтарі з характерними габаритними вогнями', value: false },
          ]
        },
        {
          configName: 'Prestige',
          configProperties: [
            { name: 'Світлодіодні фари головного світла з денними ходовими вогнями', value: true },
            { name: 'Світлодіодні фари головного світла з характерними денними ходовими вогнями', value: false },
            { name: 'Автоматичний коректор кута нахилу фар головного світла', value: true},
            { name: 'Світлодіодні задні ліхтарі з характерними габаритними вогнями', value: false },
          ]
        },
        {
          configName: 'Premium',
          configProperties: [
            { name: 'Світлодіодні фари головного світла з денними ходовими вогнями', value: false },
            { name: 'Світлодіодні фари головного світла з характерними денними ходовими вогнями', value: true },
            { name: 'Автоматичний коректор кута нахилу фар головного світла', value: true},
            { name: 'Світлодіодні задні ліхтарі з характерними габаритними вогнями', value: false },
          ]
        },
        
      ]
    },
    {
      title: 'Засоби пасивної безпеки',
      content: [
        {
          configName: 'Comfort',
          configProperties: [
            { name: 'Подушки безпеки фронтальні для водія та переднього пасажира', value: true },
            { name: 'Подушки безпеки для колін водія', value: false },
            { name: 'Подушки безпеки бокові для водія та переднього пасажира', value: true},
            { name: 'Захисні бокові шторки передні та задні', value: true },
          ]
        },
        {
          configName: 'Elegance',
          configProperties: [
            { name: 'Подушки безпеки фронтальні для водія та переднього пасажира', value: true },
            { name: 'Подушки безпеки для колін водія', value: false },
            { name: 'Подушки безпеки бокові для водія та переднього пасажира', value: true},
            { name: 'Захисні бокові шторки передні та задні', value: true },
          ]
        },
        {
          configName: 'Prestige',
          configProperties: [
            { name: 'Подушки безпеки фронтальні для водія та переднього пасажира', value: true },
            { name: 'Подушки безпеки для колін водія', value: true },
            { name: 'Подушки безпеки бокові для водія та переднього пасажира', value: true},
            { name: 'Захисні бокові шторки передні та задні', value: true },
          ]
        },
        {
          configName: 'Premium',
          configProperties: [
            { name: 'Подушки безпеки фронтальні для водія та переднього пасажира', value: true },
            { name: 'Подушки безпеки для колін водія', value: true },
            { name: 'Подушки безпеки бокові для водія та переднього пасажира', value: true},
            { name: 'Захисні бокові шторки передні та задні', value: true },
          ]
        },
        
      ]
    },
    {
      title: 'Система кондиціонування',
      content: [
        {
          configName: 'Comfort',
          configProperties: [
            { name: 'Клімат-контроль з незалежним регулюванням температури зон водій/передній пасажир', value: true},
            { name: 'Незалежне регулювання температури для 2-го ряду сидінь', value: false},
            { name: 'Дефлектори обдуву для 2-го ряду сидінь', value: true},
            { name: 'Іонізатор повітря nanoe', value: false},
          ]
        },
        {
          configName: 'Elegance',
          configProperties: [
            { name: 'Клімат-контроль з незалежним регулюванням температури зон водій/передній пасажир', value: true},
            { name: 'Незалежне регулювання температури для 2-го ряду сидінь', value: false},
            { name: 'Дефлектори обдуву для 2-го ряду сидінь', value: true},
            { name: 'Іонізатор повітря nanoe', value: false},
          ]
        },
        {
          configName: 'Prestige',
          configProperties: [
            { name: 'Клімат-контроль з незалежним регулюванням температури зон водій/передній пасажир', value: true},
            { name: 'Незалежне регулювання температури для 2-го ряду сидінь', value: false},
            { name: 'Дефлектори обдуву для 2-го ряду сидінь', value: true},
            { name: 'Іонізатор повітря nanoe', value: true},
          ]
        },
        {
          configName: 'Premium',
          configProperties: [
            { name: 'Клімат-контроль з незалежним регулюванням температури зон водій/передній пасажир', value: true},
            { name: 'Незалежне регулювання температури для 2-го ряду сидінь', value: true},
            { name: 'Дефлектори обдуву для 2-го ряду сидінь', value: true},
            { name: 'Іонізатор повітря nanoe', value: true},
          ]
        },
        
      ]
    },
  ],
};