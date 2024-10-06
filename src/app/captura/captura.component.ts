import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-captura',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    FormularioComponent,
  ],
  templateUrl: './captura.component.html',
  styleUrl: './captura.component.css',
})
export class CapturaComponent {}
