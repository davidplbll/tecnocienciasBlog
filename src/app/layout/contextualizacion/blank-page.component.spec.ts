import { async, ComponentFixture, TestBed } from 'src/app/layout/blank-page.1/node_modules/@angular/core/testing';

import { BlankPageComponent } from './contextualizacion.component';

describe('BlankPageComponent', () => {
    let component: BlankPageComponent;
    let fixture: ComponentFixture<BlankPageComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [BlankPageComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(BlankPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
