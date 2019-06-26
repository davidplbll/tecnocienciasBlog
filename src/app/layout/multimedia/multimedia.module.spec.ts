import {MultimediaModule } from './multimedia.module';

describe('BlankPageModule', () => {
    let multimediaModule:MultimediaModule;

    beforeEach(() => {
        multimediaModule = new MultimediaModule();
    });

    it('should create an instance', () => {
        expect(multimediaModule).toBeTruthy();
    });
});
