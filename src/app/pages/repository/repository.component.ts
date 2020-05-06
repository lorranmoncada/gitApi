import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GitInfoService } from 'src/app/services/git-info/git-info.service';
import { LayoutService } from 'src/app/helpers/layout.service';
import { ESearch } from 'src/app/enuns/e-serach.enum';
import { EClasseAlertas } from 'src/app/enuns/EClasseAlertas.enum';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

user: string;
page: string;
listUserRepository: any[];
searchRep = ESearch.ERepository;
searchValue: any;
orderByField = "decrescente";
campoSort = "updated_at";
loading = false;

@ViewChild('alert') alert: any;

  constructor(private rota: Router, private route: ActivatedRoute,private gitInfoService: GitInfoService) {
     this.route.params.subscribe(res => {this.user = res.user, this.page = res.page})
   }

  ngOnInit() {
   this.gitInfoService.saveHistory();
   this.getUserRepository();
  }

  getUserRepository(){
    this.loading = true;
     if(this.user !== null) {    
      this.gitInfoService.getRepository(this.user).subscribe((repository:any[]) => {
        if(repository) {
          this.listUserRepository = repository;
          this.loading = false;
        }
      }, error => {
        this.loading = false;
        this.alert.toastConfirmacao("Não foi obter o usuário", EClasseAlertas.AlertWarning);
      })
    } else{
       this.loading = false;
       this.alert.toastConfirmacao("Erro ao obter o usuário", EClasseAlertas.AlertDanger);
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
  
  backPage(){
    if (this.page === "gitInfo"){
      this.rota.navigate(["gitInfo"])
    } else if(this.page === "ranking"){
      this.rota.navigate(["ranking"])
    }
  }

  filterByData(filter) {
    if(filter==="Crescente") {
    return this.listUserRepository.sort((val1, val2)=> {return new Date(val2.updated_at).valueOf() - new Date(val1.updated_at).valueOf()})
    }  else {
     return this.listUserRepository.sort((val1, val2)=> {return new Date(val1.updated_at).valueOf() - new Date(val2.updated_at).valueOf()})
    } 
  }

}
