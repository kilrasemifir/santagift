import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadeauxPageComponent } from './pages/cadeaux-page/cadeaux-page.component';

const routes: Routes = [
  {path:"cadeaux", component:CadeauxPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
