import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgCorComponent } from './component/img-cor/img-cor.component';

const routes: Routes = [{path: '', component:ImgCorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
