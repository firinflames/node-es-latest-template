import * as Q from 'q';

export default class ExampleClass
{

    constructor(){

    }

    method(){
        console.log('got here');
        return 11;
    }

    async asyncMethod(){

        return Q.fcall(function () {
            console.log('got here');        
            return 10;
        });
    }
}
