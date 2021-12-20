import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
const importsarray = [MatToolbarModule, MatButtonModule, MatIconModule, MatSelectModule,]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    importsarray
  ],
  exports: [importsarray]
})
export class MaterialModule { }
