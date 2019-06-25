import {ObjetivosModule } from './objetivos.module';

describe('BlankPageModule', () => {
    let objetivosModule:ObjetivosModule;

    beforeEach(() => {
        objetivosModule = newObjetivosModule();
    });

    it('should create an instance', () => {
        expect(objetivosModule).toBeTruthy();
    });
});
