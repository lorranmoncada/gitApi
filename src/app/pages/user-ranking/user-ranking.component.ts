import { Component, OnInit, ViewChild } from '@angular/core';
import { GitInfoService } from 'src/app/services/git-info/git-info.service';
import { EClasseAlertas } from 'src/app/enuns/EClasseAlertas.enum';
import { LayoutService } from 'src/app/helpers/layout.service';

@Component({
  selector: 'app-user-ranking',
  templateUrl: './user-ranking.component.html',
  styleUrls: ['./user-ranking.component.scss']
})
export class UserRankingComponent implements OnInit {

listUserHanking: any;
listHank: any;
loading = false;

@ViewChild('alert') alert: any;

  constructor(private gitInfoService: GitInfoService) { }

  ngOnInit() {
    this.gitInfoService.saveHistory();
    this.getUserHanking();
  }

  getUserHanking(){
    this.loading = true;
    this.gitInfoService.getUsersRank().subscribe(data => {
      if(data) {
        this.loading = false;
        this.listUserHanking = data;
        this.listHank = this.listUserHanking.filter(user => user.followers > 1000)
        .sort((val1, val2)=> {return val2.contributions - val1.contributions}).slice(0, 5);;
        this.verifyTheFirst();
      }else{
        this.loading = false;
      this.alert.toastConfirmacao("Não foi possível carregar o ranking de usuários", EClasseAlertas.AlertWarning);
      }
    },erro =>{
      this.alert.toastConfirmacao("Erro ao tentar carregar o ranking de usuários", EClasseAlertas.AlertDanger);
    })
  }

  verifyTheFirst(){
   const maior = this.listHank.sort(function(a, b){return b.contributions - a.contributions;})[0];
   Object.defineProperty(maior, 'class', {
    value: 'fas fa-crown mr-2 theBest'
    });
  }

  getSizePorcentagem(porcentagem: number): any {
    return LayoutService.getHeightScreenAreaWithPercentage(porcentagem);
  }

}
