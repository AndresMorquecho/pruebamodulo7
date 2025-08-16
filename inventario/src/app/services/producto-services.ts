import { Injectable } from '@angular/core';
import { stockSucursalModel } from '../models/stockSucursalModel';
import { dataSucursal } from '../../data/dataSucursal';
import { empresaModel } from '../models/empresaModel';
import { dataEmpresaP } from '../../data/dataEmpresa';

@Injectable({
  providedIn: 'root',
})
export class ProductoServices {
  constructor() {}
  stockProductos: stockSucursalModel[] = dataSucursal;
  dataEmpresa: empresaModel = dataEmpresaP;

  getStockSucursal(): stockSucursalModel[] {
    return this.stockProductos;
  }

  getEmpresa(): empresaModel {
    return this.dataEmpresa;
  }
}
