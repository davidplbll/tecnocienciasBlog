import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliograComponent } from './bibliografia.component';

describe('BlankPageComponent', () => {
    let component: BibliograComponent;
    let fixture: ComponentFixture<BibliograComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [BibliograComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(BibliograComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
