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
    book.title = "Hello world 2";                   //as an object this is allowed, you can change the keys but can't assign a new value 
    book = {title: "Deathy Hallow"};

    x = 30; 
    console.log(x);
}

varKeyword();