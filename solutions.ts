// Problem-1 

const filterEvenNumbers = (arr:number[]) => {
    const finalArray : number[] = [];
    arr.map(value => {
        if (value % 2 === 0) {
            finalArray.push(value)
        }
    })
    
    return finalArray;
}






// Problem-2 

const reverseString = (input: string) => {

    const Arr : string[] = input.split('');

    let newArray : string[] = [];

    for (let i:number = input.length ; i >= 0 ; i--) {
        newArray.push(Arr[i])
    }
    const finalResult = newArray.join('');

    
    return finalResult;

}



// Problem-3 

type StringOrNumber = string | number ;

const checkType = (input : StringOrNumber) => {
    if (typeof input === 'string'){
        
        return 'String';
    }else if(typeof input === 'number'){
        
        return 'Number';
    }
}




// problem-4 

type UserInfo = {
    id: number;
    name: string;
    age: number;
}

const getProperty = (user:UserInfo , key : keyof UserInfo)=>{
    const res = user[`${key}`];
    
    return res;
}



// problem-5 

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (book:Book) => {
    const newObj = {...book, isRead: true}
    
    return newObj;

}





// problem - 6 

class Person {
    name: string;
    age: number;

    constructor(name:string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name:String, age:Number, grade: string){
        super(name , age);
        this.grade=grade;

    }
    getDetails(){
        const details = {Name: this.name, Age: this.age, Grade: this.grade};
        
        return details;
    }
}






// problem-7 

const getIntersection = (arr1: number[], arr2: number[]) => {

    const newArr : number[] = [];
    
    arr1.map(value => arr2.includes(value) ? newArr.push(value) : '')

    
    return newArr;

}
