import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjetivosComponent } from './objetivos.component';

const routes: Routes = [
    {
        path: '',
        component: ObjetivosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ObjetivosRoutingModule {}
