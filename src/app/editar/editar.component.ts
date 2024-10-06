import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
})
export class EditarComponent {
  id = '';

  newUSer = {
    nombre: '',
    paterno: '',
    materno: '',
    cargo: '',
    telefono: '',
    username: '',
  };

  editUser(id: any) {
    let datos = JSON.parse(localStorage.getItem('users') as string);
    datos.splice(id, 1, this.newUSer);
    localStorage.setItem('users', JSON.stringify(datos));
  }

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.newUSer.nombre = params['nombre'];
      this.newUSer.paterno = params['paterno'];
      this.newUSer.materno = params['materno'];
      this.newUSer.cargo = params['cargo'];
      this.newUSer.telefono = params['telefono'];
      this.newUSer.username = params['username'];
    });
  }
}
