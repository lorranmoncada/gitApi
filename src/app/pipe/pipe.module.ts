import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisarFilterPipe } from './pesquisa/pipe.pesquisa';
import { SortPipe } from './sort/sort.pipe';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PesquisarFilterPipe,
        SortPipe
    ],
    providers: [
        PesquisarFilterPipe,
        SortPipe
    ],
    exports: [
        PesquisarFilterPipe,
        SortPipe

    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class PipesModule { }
