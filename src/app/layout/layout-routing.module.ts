import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'contextualizacion', loadChildren: './contextualizacion/contextualizacion.module#ContextualizacionModule' },
            { path: 'objetivos', loadChildren: './objetivos/objetivos.module#ObjetivosModule' },
            { path: 'organizacion', loadChildren: './organizacion/organizacion.module#OrganizacionModule' },
            { path: 'articulo', loadChildren: './articulo/articulo.module#ArticuloModule' },
            { path: 'bibliografia', loadChildren: './bibliografia/bibliografia.module#BibliografiaModule' },
            { path: 'multimedia', loadChildren: './multimedia/multimedia.module#MultimediaModule' },
            { path: 'ensayo1', loadChildren: './ensayo1/ensayo1.module#Ensayo1Module' },
            { path: 'ensayo2', loadChildren: './ensayo2/ensayo2.module#Ensayo2Module' },
            { path: 'ensayo3', loadChildren: './ensayo3/ensayo3.module#Ensayo3Module' },
            { path: 'ensayo4', loadChildren: './ensayo4/ensayo4.module#Ensayo4Module' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
