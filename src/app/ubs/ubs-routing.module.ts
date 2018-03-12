import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UbsSearchComponent} from './ubs-list/ubs-search.component';


const routes: Routes = [
  {path: 'ubs', component: UbsSearchComponent}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UbsRoutingModule { }
