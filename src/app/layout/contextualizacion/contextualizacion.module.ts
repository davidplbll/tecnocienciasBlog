import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContextualizacionRoutingModule } from './contextualizacion-routing.module';
import { ContextualizacionComponent } from './contextualizacion.component';

@NgModule({
    imports: [CommonModule, ContextualizacionRoutingModule],
    declarations: [ContextualizacionComponent]
})
export class BlankPageModule {}
