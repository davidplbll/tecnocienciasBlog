import {Ensayo4Module } from './ensayo4.module';

describe('BlankPageModule', () => {
    let ensayo4Module:Ensayo4Module;

    beforeEach(() => {
        ensayo4Module = new Ensayo4Module();
    });

    it('should create an instance', () => {
        expect(ensayo4Module).toBeTruthy();
    });
});
