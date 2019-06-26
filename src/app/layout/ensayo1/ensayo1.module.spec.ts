import {Ensayo1Module } from './ensayo1.module';

describe('BlankPageModule', () => {
    let ensayo1Module:Ensayo1Module;

    beforeEach(() => {
        ensayo1Module = new Ensayo1Module();
    });

    it('should create an instance', () => {
        expect(ensayo1Module).toBeTruthy();
    });
});
