function test (argument1, ...otherArguments){
    console.log(argument1);
    console.log(otherArguments);
}

test("harsh", "telangana", "japan", "sung jinwoo", "luffy");

//no matter how many things you pass, all of them will be wrapped in an array and will be accessible in the form of an array
//ES6 Feature

//Rest Operator
// "..."

//Use then when you need arbitary amount of arguments to stay flexible.