import {ArticuloModule } from './articulo.module';

describe('BlankPageModule', () => {
    let articuloModule:ArticuloModule;

    beforeEach(() => {
        articuloModule = new ArticuloModule();
    });

    it('should create an instance', () => {
        expect(articuloModule).toBeTruthy();
    });
});
