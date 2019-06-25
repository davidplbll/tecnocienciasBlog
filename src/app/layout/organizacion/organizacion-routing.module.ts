import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizacionComponent } from './organizacion.component';

const routes: Routes = [
    {
        path: '',
        component: OrganizacionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrganizacionRoutingModule {}
