import { categoriaModel } from './categoriaModel';

export class productModel {
  id!: number;
  name!: string;
  price!: number;
  description!: string;
  category!: categoriaModel;
}
