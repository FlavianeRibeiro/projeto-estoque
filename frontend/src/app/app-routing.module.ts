import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatProdutsComponent } from './creat-produts/creat-produts.component';
import { ListProdutsComponent } from './list-produts/list-produts.component';
import { ReadProdutsComponent } from './read-produts/read-produts.component';
import { ViewProdutsComponent } from './view-produts/view-produts.component';

const routes: Routes = [
  {path: 'creat', component: CreatProdutsComponent},
  {path: 'creat/:id', component: CreatProdutsComponent},
  {path: 'read', component: ReadProdutsComponent},
  {path: 'view/:id', component: ViewProdutsComponent},
  {path: '', component: ListProdutsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
