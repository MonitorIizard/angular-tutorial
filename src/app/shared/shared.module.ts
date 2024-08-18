import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from './img/img.component';
import { ButtonComponent } from './button/button.component';


const components = [ImgComponent, ButtonComponent];

//declarations is for component
@NgModule({
  declarations: [
    ImgComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  //before
  // exports : [
  //     ButtonComponent,
  //     ImgComponent
  //   ]

  //after
  // exports : components

  exports : components // don't forgot to export component name too
})
export class SharedModule { }
