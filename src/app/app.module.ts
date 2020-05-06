import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { AlertComponent } from 'src/app/components/alert/alert/alert.component';
import { MenuComponent } from './menu/menu/menu.component';
import { PipesModule } from './pipe/pipe.module';
import { GitInfoComponent } from './pages/git-info/git-info.component';
import { RepositoryComponent } from './pages/repository/repository.component';
import { UserRankingComponent } from './pages/user-ranking/user-ranking.component';
import { RepoRankComponent } from './pages/repo-rank/repo-rank.component';
import { HistoricComponent } from './pages/historic/historic.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AlertComponent,
    GitInfoComponent,
    RepositoryComponent,
    UserRankingComponent,
    RepoRankComponent,
    HistoricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    PipesModule
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
