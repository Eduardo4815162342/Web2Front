import { JogadorCreateComponent } from './pages/jogador/jogador-create/jogador-create.component';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedDirective } from './directives/red.directive';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './layout/nav/nav.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './pages/home/home.component';
import { EquipeComponent } from './pages/equipes/equipes/equipe.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EquipeCreateComponent } from './pages/equipes/equipes-create/equipe-create.component';
import { TorneiosComponent } from './pages/torneio/torneio/torneio.component';
import { OrganizacoesComponent } from './pages/organizacao/organizacoes/organizacoes.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ResponseDataList } from './models/shared';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatListOption } from '@angular/material/list';
import { MatSelectionList } from '@angular/material/list';
import { JogadorComponent } from './pages/jogador/jogador/jogador.component';
import { OrganizacoesCreateComponent } from './pages/organizacao/organizacoes-create/organizacoes-create.component';
import { TorneioCreateComponent } from './pages/torneio/torneio-create/torneio-create.component';
import { FuncionarioComponent } from './pages/funcionario/funcionario/funcionario.component';
import { FuncionarioCreateComponent } from './pages/funcionario/funcionario-create/funcionario-create.component';
import { JogoComponent } from './pages/jogo/jogo/jogo.component';
import { JogoCreateComponent } from './pages/jogo/jogo-create/jogo-create.component';



@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    FooterComponent,
    RedDirective, 
    JogadorComponent, 
    JogadorCreateComponent,
    NavComponent, 
    FuncionarioComponent,
    FuncionarioCreateComponent,
    HomeComponent, 
    EquipeComponent, 
    EquipeCreateComponent,
    OrganizacoesComponent, 
    OrganizacoesCreateComponent, 
    TorneiosComponent, 
    TorneioCreateComponent, 
    FuncionarioComponent, 
    FuncionarioCreateComponent, JogoComponent, JogoCreateComponent, 
  ],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
