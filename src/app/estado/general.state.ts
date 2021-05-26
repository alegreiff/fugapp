export interface StoreState {
  usuario: Usuario;
  terminos: Glosario[];
  fuentes: Fuente[];
}
export interface Usuario {
  uid: string;
  email: string;
  displayName: string;
  admin?: boolean;
  editor?: boolean;
  lastLoginAt?: any;
  photoURL?: string;
  visitas?: Date[];
  veces?: number;
  foto?: string;
  isAdmin?: boolean;
  nombrereal?: string;
}

export interface Fuente {
  uid?: string;
  descripcion: string;
  vinculo: string;
}

export interface Glosario {
  id?: string;
  termino: string;
  descripcion?: string;
  fuentes?: Fuente[];
}

export enum AccionesStore {
  EstadoInicial = 'INIT_STATE',
  ActivoUsuario = 'SET_USER',
  AgregaProyectos = 'ADD_PROYECTOS',
  CargaMiembros = 'SET_MIEMBROS',
  AddCustomer = 'ADD_CUSTOMER',
  RemoveCustomer = 'REMOVE_CUSTOMER',
  GetCustomers = 'GET_CUSTOMERS',
  SortCustomers = 'SORT_CUSTOMERS',
  CargaTerminos = 'CARGA_TERMINOS',
  CargaFuentes = 'CARGA_FUENTES',
}
