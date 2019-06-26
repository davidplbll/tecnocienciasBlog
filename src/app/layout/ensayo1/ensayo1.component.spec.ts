import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ensayo1Component } from './ensayo1.component';

describe('BlankPageComponent', () => {
    let component: Ensayo1Component;
    let fixture: ComponentFixture<Ensayo1Component>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [Ensayo1Component]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(Ensayo1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
