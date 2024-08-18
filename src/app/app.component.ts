import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './shared/button/button.component';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SharedModule], //import common module in order to use ngClass
  //import SharedModule instead of each component in Shared folder cause if we have 5 components it gonna be bit messy.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
