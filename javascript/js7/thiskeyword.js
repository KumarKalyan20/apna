const student = {
    name: "kalyan",
    age: 21,
    eng:95,
    math:70,
    phy:86,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) /3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

 function getAvg() {
    console.log(this);
}
