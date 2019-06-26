import {BibliograModule } from './bibliografia.module';

describe('BlankPageModule', () => {
    let bibliograModule:BibliograModule;

    beforeEach(() => {
        bibliograModule = new BibliograModule();
    });

    it('should create an instance', () => {
        expect(bibliograModule).toBeTruthy();
    });
});
