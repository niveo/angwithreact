import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; 
import { SelectReactComponent } from 'projects/amsrc/src/public-api'; 
import { ButtonReactComponent } from 'projects/amsrc/src/lib/fixo/button-react.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    SelectReactComponent, 
    ButtonReactComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
