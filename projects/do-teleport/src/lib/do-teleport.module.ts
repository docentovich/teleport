import { NgModule } from '@angular/core';
import { DoTeleportComponent } from './do-teleport.component';
import { DoTeleportDirective } from './do-teleport.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DoTeleportComponent, DoTeleportDirective],
  imports: [
    CommonModule
  ],
  exports: [DoTeleportComponent, DoTeleportDirective]
})
export class DoTeleportModule { }
