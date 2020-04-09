import {MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [ MatAutocompleteModule, MatFormFieldModule, MatInputModule ],
  exports: [ MatAutocompleteModule, MatFormFieldModule, MatInputModule ]
})

export class MaterialModule {

}
