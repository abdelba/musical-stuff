import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/pages/home/home.component';
import { ListenComponent } from './ui/pages/listen/listen.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listen/:trackId', component: ListenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
