import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ensayo2Component } from './ensayo2.component';

describe('BlankPageComponent', () => {
    let component: Ensayo2Component;
    let fixture: ComponentFixture<Ensayo2Component>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [Ensayo2Component]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(Ensayo2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
