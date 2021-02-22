import { NgModule } from '@angular/core';
import { ReadablePipe } from '../pipes/readable.pipe'; 
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ReadablePipe],
  imports: [CommonModule],
  exports: [ReadablePipe]
})
export class PipesModule {}
