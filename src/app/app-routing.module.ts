import { AppliedLicenceComponent } from "./hdca-licence/applied-licence/applied-licence.component";
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{ path: "lic", component: AppliedLicenceComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
