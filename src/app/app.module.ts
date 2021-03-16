import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { UtilityService } from "./utility.service";
import { InputCheckPipe } from "./InputCheck.pipe";
import { AppConverterComponent } from "./converter/app-converter.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AppConverterComponent, InputCheckPipe],
  bootstrap: [AppComponent],
  providers: [UtilityService]
})
export class AppModule {}
