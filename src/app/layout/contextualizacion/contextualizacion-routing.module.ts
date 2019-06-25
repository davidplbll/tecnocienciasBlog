import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContextualizacionComponent } from './contextualizacion.component';

const routes: Routes = [
    {
        path: '',
        component: ContextualizacionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContextualizacionRoutingModule {}
