import { AppMaterialModule } from './../app-material/app-material.module';
import { DebugComponent } from './../glosarios/nuevo/debug-component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DebugComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [DebugComponent],
})
export class SharedModule {}
