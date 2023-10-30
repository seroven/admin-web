import { BreadcrumRouteInterface } from "../interfaces/breadcrum-route.interface";

export const BreadcrumRoutes:BreadcrumRouteInterface[] = [
  {title: 'Nosotros', path: '/panel/about'},
  {title: 'Usuarios', path: '/panel/users'},
  {title: 'Expedientes', path: '/panel/expedientes'},
  {title: 'Información Catastral', path: '/panel/informacion-catastral'},
  {title: 'Nueva Ficha de Bienes Comunes', path: '/panel/informacion-catastral/bienes-comunes'},
  {title: 'Nueva Ficha de Bienes Culturales', path: '/panel/informacion-catastral/bienes-culturales'},
  {title: 'Nueva Ficha Urbana Cotitularidad', path: '/panel/informacion-catastral/urbana-cotitularidad'},
  {title: 'Nueva Ficha Urbana Individual', path: '/panel/informacion-catastral/urbana-individual'},
  {title: 'Nueva Ficha Urbana Actividad Económica', path: '/panel/informacion-catastral/urbana-actividad-economica'},
  {title: 'Información Administrativa', path: '/panel/informacion-administrativa'},
  {title: 'Historial Catastral', path: '/panel/historial-catastral'},
  {title: 'Historial Macrocatastral', path: '/panel/historial-macrocatastral'},
  {title: 'Visor Catastral', path: '/panel/visor-catastral'}
]

