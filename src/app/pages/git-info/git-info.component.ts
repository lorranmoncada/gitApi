import { Component, OnInit, ViewChild } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { LayoutService } from 'src/app/helpers/layout.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GitInfoService } from 'src/app/services/git-info/git-info.service';
import { ESearch } from 'src/app/enuns/e-serach.enum';
import { Router } from '@angular/router';
import { EClasseAlertas } from 'src/app/enuns/EClasseAlertas.enum';


@Component({
  selector: 'app-git-info',
  templateUrl: './git-info.component.html',
  styleUrls: ['./git-info.component.scss']
})
export class GitInfoComponent implements OnInit {

  searchuUsuarioGit: FormGroup;
  listGitUsers: any[];
  searchUser = ESearch.EUser;
  searchValue: any;
  loading = false;

  @ViewChild('alert') alert: any;

  constructor(private fb: FormBuilder, private gitInfoService: GitInfoService,private router: Router) { }

  ngOnInit() {
    this.gitInfoService.saveHistory();
    this.searchuUsuarioGit = this.fb.group({
      USUARIO:['',Validators.required]
    })

     if(!isNullOrUndefined(sessionStorage.getItem("user"))){
      this.searchuUsuarioGit.get('USUARIO').setValue(sessionStorage.getItem("user"));
      this.searchGitUser();
    }
  }
 
  searchGitUser() {
    this.loading = true;
    if(this.searchuUsuarioGit.get('USUARIO').value != "" && !isNullOrUndefined(this.searchuUsuarioGit.get('USUARIO').value)){
      sessionStorage.setItem("user",this.searchuUsuarioGit.get('USUARIO').value)
      this.gitInfoService.searchGitUser(this.searchuUsuarioGit.get('USUARIO').value).subscribe((data: any) => {
        if(data){
          this.loading = false;
          this.listGitUsers = data.items;
        }
      }, error => {
        this.loading = false;
        this.alert.toastConfirmacao("Ocorreu um erro ao tentar carregar os usuarios", EClasseAlertas.AlertDanger);
      });
    }else{
      this.loading = false;
      this.alert.toastConfirmacao("Insira um usuario", EClasseAlertas.AlertWarning);
    }
  }

  getSizePorcentagem(porcentagem: number): any {
    return LayoutService.getHeightScreenAreaWithPercentage(porcentagem);
  }
}
