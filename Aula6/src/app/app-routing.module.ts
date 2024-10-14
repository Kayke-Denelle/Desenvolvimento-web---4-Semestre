import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ValidacaoComponent } from './components/validacao/validacao.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'about/:id', component: AboutComponent},
  {path: 'about/:id/:nome', component: AboutComponent},
  {path: 'validacao', component: ValidacaoComponent}, 
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
