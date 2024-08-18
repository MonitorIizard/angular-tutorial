import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [RouterLink, SharedModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {

}
