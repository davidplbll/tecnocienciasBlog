import { BlankPageModule } from './contextualizacion.module';

describe('BlankPageModule', () => {
    let blankPageModule: BlankPageModule;

    beforeEach(() => {
        blankPageModule = new BlankPageModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
