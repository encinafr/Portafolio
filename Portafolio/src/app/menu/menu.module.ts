import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { CoreModule } from '../core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-sidebar';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
  ]
})
export class MenuModule { }
