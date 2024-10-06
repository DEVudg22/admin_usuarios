import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  //variables globales del componente
  usuarios = {
    nombre: '',
    paterno: '',
    materno: '',
    cargo: '',
    telefono: '',
    username: '',
  };

  //si no existe array en local storage crearlo
  constructor() {
    if (localStorage.getItem('users') === null) {
      localStorage.setItem('users', JSON.stringify([]));
    }
  }

  saveUser() {
    let datos = JSON.parse(localStorage.getItem('users') as string);
    datos.push(this.usuarios);
    localStorage.setItem('users', JSON.stringify(datos));
    alert('USUARIO AGREGADO');
    this.limpiarCampos();
  }

  limpiarCampos() {
    this.usuarios = {
      nombre: '',
      paterno: '',
      materno: '',
      cargo: '',
      telefono: '',
      username: '',
    };
  }
}
