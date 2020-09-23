import { NgModule } from '@angular/core';
import { TeleportComponent } from './teleport.component';
import { TeleportDirective } from './teleport.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TeleportComponent, TeleportDirective],
  imports: [
    CommonModule
  ],
  exports: [TeleportComponent, TeleportDirective]
})
export class TeleportModule { }
