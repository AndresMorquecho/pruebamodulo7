import { direccionModel } from './direccionModel';

export class empresaModel {
  id!: number;
  nombre!: string;
  ruc!: string;
  direccion!: direccionModel;
}
