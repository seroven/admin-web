import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Módulos'
  },
  {
    name: 'Productos',
    url: '/panel/product',
    iconComponent: { name: 'cilBasket' }
  },
 
];
