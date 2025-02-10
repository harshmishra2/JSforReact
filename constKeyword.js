function constKeyword(){

    const x = 20;
    //console.log(x);

    if(true){
        const x = 30;
        console.log(x);                             //legal inside the scope of the curly braces
    }

    // const x = 40;                                    not allowed can't change the value twice nor declare it twice

    // console.log(x);
    const book = {title: "Hello world"};
    book.title = "Hello world 2";                   //as an object this is ok, change the keys but can't assign a new values
    book = {title: "Deathy Hallow"};                //not allowed, will throw error

    x = 30; 
    console.log(x);
}

varKeyword();