import { Component, OnInit } from '@angular/core';
import { sucursalModel } from '../../models/sucursalModel';
import { stockSucursalModel } from '../../models/stockSucursalModel';
import { ProductoServices } from '../../services/producto-services';
import { empresaModel } from '../../models/empresaModel';
import { EmpresaComponent } from "../empresa-component/empresa-component";
import { ItemInventarioComponent } from "../item-inventario-component/item-inventario-component";

@Component({
  selector: 'app-inventario-component',
  imports: [EmpresaComponent, ItemInventarioComponent],
  templateUrl: './inventario-component.html',
})
export class InventarioComponent implements OnInit {
  stockSucursales!: stockSucursalModel[];
  datosEmpresa!: empresaModel;

  constructor(private services: ProductoServices) {}
  ngOnInit(): void {
    this.stockSucursales = this.services.getStockSucursal();
    this.datosEmpresa = this.services.getEmpresa();
  }
}
