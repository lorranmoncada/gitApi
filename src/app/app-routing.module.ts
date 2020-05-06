import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GitInfoComponent } from './pages/git-info/git-info.component';
import { RepositoryComponent } from './pages/repository/repository.component'
import { UserRankingComponent } from './pages/user-ranking/user-ranking.component';
import { RepoRankComponent } from './pages/repo-rank/repo-rank.component';
import { HistoricComponent } from './pages/historic/historic.component';


const routes: Routes = [];

const appRoutes: Routes = [
    { path: '', component: GitInfoComponent },
    { path: 'gitInfo', component: GitInfoComponent },
    { path: 'repository/:user/:page', component: RepositoryComponent },
    { path: 'ranking', component: UserRankingComponent },
    { path: 'reporank', component: RepoRankComponent },
    { path: 'historic', component: HistoricComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
