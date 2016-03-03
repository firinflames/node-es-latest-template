import ExampleClass from '../ExampleClass';
import * as chai from 'chai';

let expect = chai.expect;
chai.config.includeStack = true;

describe('Hello World', () => {
   
    it('Async method test catching error', (done) => {(async (done) => {
        var test = new ExampleClass();
        
        let res = await test.asyncMethod();            
        expect(res).to.equal(10);    
         
        done();
        
    })(done).catch(done);});

    it('Should be equal 11 simple method', (done) => {

        var test = new ExampleClass();
        
        let res = test.method();

        expect(res).to.equal(11);
        done();    

    });
});
