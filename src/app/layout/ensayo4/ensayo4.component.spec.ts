import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ensayo4Component } from './ensayo4.component';

describe('BlankPageComponent', () => {
    let component: Ensayo4Component;
    let fixture: ComponentFixture<Ensayo4Component>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [Ensayo4Component]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(Ensayo4Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
