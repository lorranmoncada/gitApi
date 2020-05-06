import { Component, OnInit, ViewChild } from '@angular/core';
import { ESearch } from 'src/app/enuns/e-serach.enum';
import { Router } from '@angular/router';
import { EClasseAlertas } from 'src/app/enuns/EClasseAlertas.enum';
import { GitInfoService } from 'src/app/services/git-info/git-info.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { LayoutService } from 'src/app/helpers/layout.service';

@Component({
  selector: 'app-repo-rank',
  templateUrl: './repo-rank.component.html',
  styleUrls: ['./repo-rank.component.scss']
})
export class RepoRankComponent implements OnInit {

searchRepositorioGit: FormGroup;
listTopRepository: any[];
loading = false;
orderByField = "decrescente";
campoSort = "updated_at";

@ViewChild('alert') alert: any;

  constructor(private fb: FormBuilder, private gitInfoService: GitInfoService) { }

  ngOnInit() {
    this.gitInfoService.saveHistory();
    this.searchRepositorioGit = this.fb.group({
      REPOSITORIO:['',Validators.required]
    })
    if(!isNullOrUndefined(sessionStorage.getItem("repository"))){
      this.searchRepositorioGit.get('REPOSITORIO').setValue(sessionStorage.getItem("repository"));
      this.searchGitRepository();
    }
  }
  
 getSizePorcentagem(porcentagem: number): any {
    return LayoutService.getHeightScreenAreaWithPercentage(porcentagem);
  }

  fatorarData(data){
    if(data){
      const index = data.indexOf("T");
      const lastIndex = data.lastIndexOf();
      return data.substring(index,lastIndex);
    }
  }
 
  searchGitRepository() {
    this.loading = true;
    if(this.searchRepositorioGit.get('REPOSITORIO').value != "" && !isNullOrUndefined(this.searchRepositorioGit.get('REPOSITORIO').value)){
      sessionStorage.setItem("repository",this.searchRepositorioGit.get('REPOSITORIO').value)
      this.gitInfoService.getTopRepository(this.searchRepositorioGit.get('REPOSITORIO').value).subscribe((data: any) => {
        if(data){
          this.loading = false;
          this.listTopRepository = data.sort((a,b) => b.stargazers_count - a.stargazers_count).slice(0,10);
        }
      }, error => {
        this.loading = false;
        this.alert.toastConfirmacao("Ocorreu um erro ao tentar carregar os repositórios", EClasseAlertas.AlertDanger);
      });
    }else{
      this.loading = false;
      this.alert.toastConfirmacao("Insira o nome do rpositório", EClasseAlertas.AlertWarning);
    }
  }

  filterByData(filter) {
    if(filter==="Crescente") {
    return this.listTopRepository.sort((val1, val2)=> {return new Date(val2.updated_at).valueOf() - new Date(val1.updated_at).valueOf()})
    }  else {
     return this.listTopRepository.sort((val1, val2)=> {return new Date(val1.updated_at).valueOf() - new Date(val2.updated_at).valueOf()})
    } 
  }

}
