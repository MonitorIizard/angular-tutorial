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
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fc6bc1f1-2870-4492-909c-29369011dcf6/d8plhn6-0431bf31-1d23-4afc-8fae-74905f19917d.jpg/v1/fit/w_828,h_488,q_70,strp/omega_squad_teemo_by_alvinlee_d8plhn6-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODg1IiwicGF0aCI6IlwvZlwvZmM2YmMxZjEtMjg3MC00NDkyLTkwOWMtMjkzNjkwMTFkY2Y2XC9kOHBsaG42LTA0MzFiZjMxLTFkMjMtNGFmYy04ZmFlLTc0OTA1ZjE5OTE3ZC5qcGciLCJ3aWR0aCI6Ijw9MTUwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KZ8Fs9E3J4fMoLRuiIODMQlzOMCf21WiPlX64WrxNKE';

  number = 1;

  changeNumber(action: '+' | '-') {
    if (action === '+') {
      this.number += 1;
    }

    if (action === '-') {
      this.number -= 1;
    }
  }
}
