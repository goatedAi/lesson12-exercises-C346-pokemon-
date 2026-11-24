// Card images come from the Pokemon TCG "151" gallery:
// https://tcg.pokemon.com/en-us/galleries/151/
// Each card's number is used to build its image URL.
const CARD_BASE_URL = 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_';
const cardImage = (cardNumber) => CARD_BASE_URL + cardNumber + '.png';

const datasource = [
  {
    title: 'Fire',
    icon: 'fire',
    bgcolor: '#E8501E',
    itemcolor: '#FDE3D6',
    textcolor: '#7A2005',
    data: [
      { key: 'Charmander', cardNumber: 4 },
      { key: 'Charmeleon', cardNumber: 5 },
      { key: 'Vulpix', cardNumber: 37 },
      { key: 'Growlithe', cardNumber: 58 },
    ],
  },

  {
    title: 'Water',
    icon: 'water',
    bgcolor: '#2F80D1',
    itemcolor: '#DCEBFA',
    textcolor: '#0F3D6B',
    data: [
      { key: 'Squirtle', cardNumber: 7 },
      { key: 'Wartortle', cardNumber: 8 },
      { key: 'Psyduck', cardNumber: 54 },
    ],
  },

  {
    title: 'Grass',
    icon: 'leaf',
    bgcolor: '#3E9A3A',
    itemcolor: '#DFF2DC',
    textcolor: '#1D4A1B',
    data: [
      { key: 'Bulbasaur', cardNumber: 1 },
      { key: 'Ivysaur', cardNumber: 2 },
    ],
  },

  {
    title: 'Lightning',
    icon: 'lightning-bolt',
    bgcolor: '#F2C420',
    itemcolor: '#FFF6D1',
    textcolor: '#6B5200',
    data: [
      { key: 'Pikachu', cardNumber: 25 },
      { key: 'Raichu', cardNumber: 26 },
    ],
  },
];

export { datasource, cardImage };
