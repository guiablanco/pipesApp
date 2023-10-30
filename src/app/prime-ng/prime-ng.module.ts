import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';




@NgModule({
  exports: [
    MenuModule,
    MenubarModule,
    BrowserModule,
  ]
})
export class PrimeNgModule { }
