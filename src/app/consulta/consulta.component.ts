import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { UserComponent } from '../user/user.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [HeaderComponent, UserComponent, FooterComponent, NgFor],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css',
})
export class ConsultaComponent {
  usuarios = JSON.parse(localStorage.getItem('users') as string);
}
