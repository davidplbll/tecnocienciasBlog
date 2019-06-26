import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ensayo4Component } from './ensayo4.component';

const routes: Routes = [
    {
        path: '',
        component: Ensayo4Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Ensayo4RoutingModule {}
