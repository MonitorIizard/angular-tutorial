import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-img',
  // standalone: true,
  // imports: [], if we want to use shared module remove import and standalone
  templateUrl: './img.component.html',
  styleUrl: './img.component.css',
})
export class ImgComponent {
  @Input() imgURL =
    'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
}
