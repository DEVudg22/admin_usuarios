import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { CapturaComponent } from './captura/captura.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'admin_usuarios';
}
