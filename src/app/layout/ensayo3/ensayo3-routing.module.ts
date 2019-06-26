import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ensayo3Component } from './ensayo3.component';

const routes: Routes = [
    {
        path: '',
        component: Ensayo3Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Ensayo3RoutingModule {}
