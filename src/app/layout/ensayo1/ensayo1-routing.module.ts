import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ensayo1Component } from './ensayo1.component';

const routes: Routes = [
    {
        path: '',
        component: Ensayo1Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Ensayo1RoutingModule {}
