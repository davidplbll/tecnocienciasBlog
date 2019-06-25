import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualizacionComponent } from './contextualizacion.component';

describe('BlankPageComponent', () => {
    let component: ContextualizacionComponent;
    let fixture: ComponentFixture<ContextualizacionComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [ContextualizacionComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ContextualizacionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
