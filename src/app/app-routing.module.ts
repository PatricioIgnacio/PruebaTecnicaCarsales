import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/episodes', pathMatch: 'full' },
  { path: 'episodes', component: EpisodesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
