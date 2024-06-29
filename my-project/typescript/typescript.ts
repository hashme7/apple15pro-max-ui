// class GenericType<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericType<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//     return x + y;
// };

// let myGenericString = new GenericType<string>();
// myGenericString.zeroValue = "0";
// myGenericString.add = (x,y)=>{
//     return x+y;
// };
// console.log(myGenericString.add("10","20"));


// function logValue(x:Date|string) {
//     if (x instanceof Date) {
//         console.log(x.toUTCString());
//     }
//     else {
//         console.log(x.toUpperCase());
//     }
// }
// logValue(new Date)



interface CatInfo {
    age: number;
    breed: string;
  }
  
  type CatName = 'miffy' | 'boris' | 'mordred';
  
  const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: 'Persian' },
    boris: { age: 5, breed: 'Maine Coon' },
    mordred: { age: 16, breed: 'British Shorthair' },
  };



export {};
