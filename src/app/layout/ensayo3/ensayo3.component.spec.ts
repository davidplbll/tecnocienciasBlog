import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ensayo3Component } from './ensayo3.component';

describe('BlankPageComponent', () => {
    let component: Ensayo3Component;
    let fixture: ComponentFixture<Ensayo3Component>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [Ensayo3Component]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(Ensayo3Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
