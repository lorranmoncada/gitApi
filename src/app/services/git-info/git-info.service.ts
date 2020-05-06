import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitInfoService {

constructor(private http: HttpClient) { }
  
  searchGitUser(user: string) {
    return this.http.get(`https://api.github.com/search/users?q=${user}`)
  }

  getRepository(user: string) {
    return this.http.get(`https://api.github.com/users/${user}/repos`)
  }

  getUsersRank() {
    return this.http.get('https://gist.githubusercontent.com/paulmillr/4524946/raw/c462a62ac9f3a072fc4106bbd131335ad730da16/github-users-stats.json')
  }

  getTopRepository(repository: string) {
    return this.http.get(`https://api.github.com/orgs/${repository}/repos`)
  }

  saveHistory(){
    var count_h = localStorage.length;
    if(count_h != 5){
        /* INICIAR LISTAGEM EM BRANCO */
        localStorage.setItem('URL_0',window.location.toString());
        localStorage.setItem('URL_1',"");
        localStorage.setItem('URL_2',"");
        localStorage.setItem('URL_3',"");
        localStorage.setItem('URL_4',"");
    }else {
        /* Subir ITEM atual e abaixar mais antigos */
        for(let j=0;j<6;j++){
            var save = true;
            if(window.location.toString() == localStorage.getItem("URL_"+j)){
                save = false;
                break;
            }
        }
       if(save == true){
        localStorage.setItem('URL_4',localStorage.getItem("URL_3"));
        localStorage.setItem('URL_3',localStorage.getItem("URL_2"));
        localStorage.setItem('URL_2',localStorage.getItem("URL_1"));
        localStorage.setItem('URL_1',localStorage.getItem("URL_0"));
        localStorage.setItem('URL_0',window.location.toString());
      }
    }
  }
}

