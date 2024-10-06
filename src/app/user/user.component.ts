import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() id = '';
  @Input() nombre = '';
  @Input() paterno = '';
  @Input() materno = '';
  @Input() cargo = '';
  @Input() telefono = '';
  @Input() username = '';

  newUser = {
    id: '',
    nombre: '',
    paterno: '',
    materno: '',
    cargo: '',
    telefono: '',
    username: '',
  };

  editUser(id: any) {
    this.newUser.id = id;
    let datos = JSON.parse(localStorage.getItem('users') as string);
    datos.splice(id, 1, this.newUser);
    localStorage.setItem('users', JSON.stringify(datos));
  }

  deleteItem(id: any) {
    let datos = JSON.parse(localStorage.getItem('users') as string);
    datos.splice(id, 1);
    localStorage.setItem('users', JSON.stringify(datos));
    location.reload();
  }
}
