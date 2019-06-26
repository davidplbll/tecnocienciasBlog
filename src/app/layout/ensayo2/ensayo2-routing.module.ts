import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ensayo2Component } from './ensayo2.component';

const routes: Routes = [
    {
        path: '',
        component: Ensayo2Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Ensayo2RoutingModule {}
