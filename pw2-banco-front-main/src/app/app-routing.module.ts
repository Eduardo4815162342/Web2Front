import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeCreateComponent } from './pages/equipes/equipes-create/equipe-create.component';
import { EquipeComponent } from './pages/equipes/equipes/equipe.component';
import { HomeComponent } from './pages/home/home.component';
import { JogadorComponent } from './pages/jogador/jogador/jogador.component';
import { OrganizacoesCreateComponent } from './pages/organizacao/organizacoes-create/organizacoes-create.component';
import { OrganizacoesComponent } from './pages/organizacao/organizacoes/organizacoes.component';
import { TorneiosComponent } from './pages/states/torneios/torneio.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'equipe', children
  : [
      {path: '', component: EquipeComponent},
      {path:'create', component: EquipeCreateComponent},
  ]},

  {path: 'jogador', component: JogadorComponent},

  {path: 'torneios', component: TorneiosComponent},

  {path: 'organizacoes', children
  : [
      {path: '', component: OrganizacoesComponent},
      {path:'create', component: OrganizacoesCreateComponent},
  ]},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
