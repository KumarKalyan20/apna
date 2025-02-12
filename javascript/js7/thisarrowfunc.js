const student = { //student is an object
    name:"kalyan",
    marks:90,
    prop:this, //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },

    getMarks: () => {
        console.log(this); //parent scope -> window
        return this.marks;
    },
    getInfo1: function() {
        setTimeout( () => {
            console.log(this); //student
        },2000);
    },

    getInfo2: function() {
        setTimeout(function() {
            console.log(this); //window
        }, 2000);
    },
};

