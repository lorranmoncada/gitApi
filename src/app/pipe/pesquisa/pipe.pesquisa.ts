import { PipeTransform, Pipe } from '@angular/core';
import { ESearch } from 'src/app/enuns/e-serach.enum';



@Pipe({
  name: 'pesquisarFilter'
})
export class PesquisarFilterPipe implements PipeTransform {
  objRetorno: any[];
  transform(obj: any[], value: string, tipo: ESearch): any {

    if (value === undefined || value === "") {
      return obj;
    }

    switch (tipo) {
      case ESearch.EUser:
        if (value) {
          value = value.toLowerCase();
          this.objRetorno = obj.filter((ob = {} as any) => ob.login.toLocaleLowerCase().includes(value));
        }
        break;
    }

    switch (tipo) {
      case ESearch.ERepository:
        if (value) {
          value = value.toLowerCase();
          this.objRetorno = obj.filter((ob = {} as any) => ob.name.toLocaleLowerCase().includes(value));
        }
        break;
    }
    return this.objRetorno;
  }

}
