let someValue: any = "Hello world!";

let strLength : number = (<string>someValue).length
// let strLength: number = (someValue as string).length;


// console.log('string lenght : ' , (someValue as string).length);
console.log('string lenght : ' , strLength);
