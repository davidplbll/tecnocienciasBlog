import {Ensayo2Module } from './ensayo2.module';

describe('BlankPageModule', () => {
    let ensayo2Module:Ensayo2Module;

    beforeEach(() => {
        ensayo2Module = new Ensayo2Module();
    });

    it('should create an instance', () => {
        expect(ensayo2Module).toBeTruthy();
    });
});
