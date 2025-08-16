import { Component, Input } from '@angular/core';
import { empresaModel } from '../../models/empresaModel';

@Component({
  selector: 'app-empresa-component',
  imports: [],
  templateUrl: './empresa-component.html',
})
export class EmpresaComponent {
  @Input() empresa!: empresaModel;
}
