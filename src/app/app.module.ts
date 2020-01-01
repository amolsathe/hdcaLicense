import { HdcaService } from "./hdca.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AppliedLicenceComponent } from "./hdca-licence/applied-licence/applied-licence.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatTableModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule
} from "@angular/material";

@NgModule({
  declarations: [AppComponent, AppliedLicenceComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [HdcaService],
  bootstrap: [AppComponent]
})
export class AppModule {}
