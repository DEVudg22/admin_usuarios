import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css',
})
export class OptionsComponent {
  @Input() title = '';
  @Input() desc = '';
  @Input() btnName = '';
  @Input() imgUrl = '';
  @Input() pageUrl = '';
}
