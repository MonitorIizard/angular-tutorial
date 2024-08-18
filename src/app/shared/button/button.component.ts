import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  btn = 'p-4 border-2 border-black';
  @Input() type = '';
  @Output() dif = new EventEmitter;

  OnClick() {
    if ( this.type === '+' ) {
      this.dif.emit(1);
    } else if ( this.type === '-' ) {
      this.dif.emit(-1)
    } else {
      this.dif.emit(0);
    }
  }
}
