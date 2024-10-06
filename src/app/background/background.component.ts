import { Component } from '@angular/core';
import { OptionsComponent } from '../options/options.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [OptionsComponent, HeaderComponent, FooterComponent],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css',
})
export class BackgroundComponent {}
