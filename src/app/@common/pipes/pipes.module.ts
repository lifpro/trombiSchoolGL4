import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgePipe } from './age.pipe';



@NgModule({
  declarations: [AgePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
