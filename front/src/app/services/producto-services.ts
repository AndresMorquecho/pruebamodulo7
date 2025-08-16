import { Injectable } from '@angular/core';
import { stockSucursalModel } from '../models/stockSucursalModel';
import { dataSucursal } from '../../data/dataSucursal';
import { empresaModel } from '../models/empresaModel';
import { dataEmpresaP } from '../../data/dataEmpresa';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductoServices {
  constructor(private http: HttpClient) {}
  private ApiUrl: string = 'http://localhost:3000/api';
  stockProductos: stockSucursalModel[] = dataSucursal;
  dataEmpresa: empresaModel = dataEmpresaP;

  getStockSucursal(): Observable<stockSucursalModel[]> {
    return this.http.get<stockSucursalModel[]>(`${this.ApiUrl}/products`);
  }
  getEmpresa(): Observable<empresaModel> {
    return this.http.get<empresaModel>(`${this.ApiUrl}/company`);
  }

  // getStockSucursal(): stockSucursalModel[] {
  //   return this.stockProductos;
  // }

  // getEmpresa(): empresaModel {
  //   return this.dataEmpresa;
  // }
}
