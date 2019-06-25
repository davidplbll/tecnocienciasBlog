import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticuloRoutingModule } from './articulo-routing.module';
import { ArticuloComponent } from './articulo.component';

@NgModule({
    imports: [CommonModule, ArticuloRoutingModule],
    declarations: [ArticuloComponent]
})
export class ArticuloModule {}
