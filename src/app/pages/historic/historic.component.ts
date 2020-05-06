import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent implements OnInit {
  
  listHistoric = [];

  constructor() { }

  ngOnInit() {
    const count = localStorage.length;
    for (let index = 0; index < count; index++) {
      this.listHistoric.push(localStorage.getItem("URL_"+[index])); 
    }
      //this.listHistoric.push(localStorage.getItem("URL_0"));
    
  }

  addHitoric(item){
    this.listHistoric.push(item);
  }

}
