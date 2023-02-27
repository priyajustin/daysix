class uber{
    constructor(name,km,color,){
        this.name=name;
        this.km=km;
        this.color=color;
    }
    price(){
        return this.km*18;
    }
    var c1=new uber("toyota",38,"red");
    console.log(c1.name);
    console.log(c1.km);
    console.log(c1.color);
    console.log(c1.price());
}