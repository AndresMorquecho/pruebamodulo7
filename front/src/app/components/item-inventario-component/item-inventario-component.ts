import { Component, Input } from '@angular/core';
import { stockSucursalModel } from '../../models/stockSucursalModel';

@Component({
  selector: 'tr [app-item-inventario-component]',
  imports: [],
  templateUrl: './item-inventario-component.html',
})
export class ItemInventarioComponent {
  @Input() item!: stockSucursalModel;
}
