import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
  ],
  exports: [
    MatAutocompleteModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
  ],
})
export class AngularMaterialModule {}
