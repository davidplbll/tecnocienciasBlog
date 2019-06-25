import {OrganizacionModule } from './organizacion.module';

describe('BlankPageModule', () => {
    let organizacionModule:OrganizacionModule;

    beforeEach(() => {
        organizacionModule = new OrganizacionModule();
    });

    it('should create an instance', () => {
        expect(organizacionModule).toBeTruthy();
    });
});
