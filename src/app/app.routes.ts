import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { MembersComponent } from './page/members/members.component';

export const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'members',
    component : MembersComponent
  }
];
