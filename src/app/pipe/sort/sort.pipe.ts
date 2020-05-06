import { Pipe, PipeTransform } from "@angular/core";
import { isNullOrUndefined } from "util";

@Pipe({
  name: "sort"
})
export class SortPipe implements PipeTransform {

  transform(array: any[], field: string[]): any[] {
    if (!array || !field) {
      return (array ? array.slice() : []);
    }

  if (field[0] === "decrescente") {
    return array.sort((val1, val2)=> {return new Date(val1[field[1]]).valueOf() - new Date(val2[field[1]]).valueOf()})
  } else if (field[0] === "crescente"){
   return array.sort((val1, val2)=> {return new Date(val2[field[1]]).valueOf() - new Date(val1[field[1]]).valueOf()})
   }
  }

}

