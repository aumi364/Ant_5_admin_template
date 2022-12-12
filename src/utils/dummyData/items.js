import Burger from '../../../public/images/icons/burger.png';
import Pizza from '../../../public/images/icons/pizza.png';
import Drinks from '../../../public/images/icons/cocktail.png';

export const itemsData = [
  {
    name: 'Chicken Burger',
    key: 'burger',
    icon: Burger,
    priceGroup: [
      {
        size: 'Small',
        sizeLabel: 'S',
        price: 110,
      },
      {
        size: 'Medium',
        sizeLabel: 'M',
        price: 210,
      },
      {
        size: 'Large',
        sizeLabel: 'L',
        price: 350,
      },
    ],
  },
  {
    name: 'Pizza',
    key: 'pizza',
    icon: Pizza,
    priceGroup: [
      {
        size: '9inch',
        sizeLabel: "9'",
        price: 110,
      },
      {
        size: '12inch',
        sizeLabel: "12'",
        price: 210,
      },
      {
        size: '16inch',
        sizeLabel: "16'",
        price: 350,
      },
    ],
  },
  {
    name: 'Drinks',
    key: 'drinks',
    icon: Drinks,
  },
];
