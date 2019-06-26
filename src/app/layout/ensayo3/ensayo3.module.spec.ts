import {Ensayo3Module } from './ensayo3.module';

describe('BlankPageModule', () => {
    let ensayo3Module:Ensayo3Module;

    beforeEach(() => {
        ensayo3Module = new Ensayo3Module();
    });

    it('should create an instance', () => {
        expect(ensayo3Module).toBeTruthy();
    });
});
