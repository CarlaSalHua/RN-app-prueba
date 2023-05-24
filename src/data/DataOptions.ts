export const DataOptions: DataOptionI[] = [
  {
    img: require('src/assets/car.png'),
    label: 'Carrito',
  },
  {
    img: require('src/assets/shopping.png'),
    label: 'Compras',
  },
  {
    img: require('src/assets/mask.png'),
    label: 'Salud',
  },
  {
    img: require('src/assets/ballon.png'),
    label: 'Aniversario',
  },
  {
    img: require('src/assets/cell.png'),
    label: 'WhatsApp',
  },
  {
    img: require('src/assets/box.png'),
    label: 'Envío',
  },
];

interface DataOptionI {
  img: any;
  label: string;
}
