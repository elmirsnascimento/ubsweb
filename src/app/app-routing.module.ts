import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { UbsSearchComponent } from './ubs/ubs-list/ubs-search.component';

const routes: Routes = [
  {
    path: '', component: UbsSearchComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
