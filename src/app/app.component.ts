import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-tutorial';
  imgURL =
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.leagueoflegends.com%2Fth-th%2Fchampions%2Fteemo%2F&psig=AOvVaw28eC0DsworNUWbPx8DM5Nn&ust=1724056517854000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjT95OR_ocDFQAAAAAdAAAAABAE';

  number = 1;

  changeNumber( action : '+' | '-' ) {
    if ( action === '+' ) {
      this.number += 1;
    }

    if ( action === '-' ) {
      this.number -= 1;
    }
  }
}
