import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjetivosRoutingModule } from './objetivos-routing.module';
import { ObjetivosComponent } from './objetivos.component';

@NgModule({
    imports: [CommonModule, ObjetivosRoutingModule],
    declarations: [ObjetivosComponent]
})
export class BlankPageModule {}
