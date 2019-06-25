import {ObjetivosModule } from './objetivos.module';

describe('BlankPageModule', () => {
    let objetivosModule:ObjetivosModule;

    beforeEach(() => {
        objetivosModule = new ObjetivosModule();
    });

    it('should create an instance', () => {
        expect(objetivosModule).toBeTruthy();
    });
});
