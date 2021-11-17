import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const importsarray = [MatToolbarModule, MatButtonModule, MatIconModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    importsarray
  ],
  exports: [importsarray]
})
export class MaterialModule { }
