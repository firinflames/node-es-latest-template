import ExampleClass from './exampleClass';

var proc = new ExampleClass();


proc.asyncMethod().then(() => console.log('finish'));
proc.method();
