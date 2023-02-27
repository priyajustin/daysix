class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getarea(){
        return PI*this.radius*this.radius;
    }
    getcircumference(){
        return 2*PI*this.radius;
    }
    var c1=new circle(2,"red");
    console.log(c1.radius);
    console.log(c1.color);
    console.log(c1.getarea());
    console.log(c1.getcircumference());
}