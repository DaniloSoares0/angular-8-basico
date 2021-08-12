import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Erros404Component } from "./component/error-404/error-404.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.compoment";

@NgModule({
  declarations: [
    NavBarComponent
  ],
  exports: [
    NavBarComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**', component: Erros404Component
      }
    ])
  ]
})
export class CoreModule {

}
