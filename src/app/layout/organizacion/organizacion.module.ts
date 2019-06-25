import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizacionRoutingModule } from './organizacion-routing.module';
import { OrganizacionComponent } from './organizacion.component';

@NgModule({
    imports: [CommonModule, OrganizacionRoutingModule],
    declarations: [OrganizacionComponent]
})
export class OrganizacionModule {}
