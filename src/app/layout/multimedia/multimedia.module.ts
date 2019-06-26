import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultimediaRoutingModule } from './multimedia-routing.module';
import { MultimediaComponent } from './multimedia.component';

@NgModule({
    imports: [CommonModule, MultimediaRoutingModule],
    declarations: [MultimediaComponent]
})
export class MultimediaModule {}
