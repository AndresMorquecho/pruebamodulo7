import { productModel } from './productModel';
import { sucursalModel } from './sucursalModel';

export class stockSucursalModel {
  id!: number;
  producto!: productModel;
  sucursal!: sucursalModel;
  cantidad!: number;
}
