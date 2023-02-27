//a.
class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    
    }
    var c1=new movie("lovetoday","nikitha",pg13);
    console.log(c1.title);
    console.log(c1.studio);
    console.log(c1.rating);

}
//b.
class movie{
    constructor(title,studio){
        this.title=title;
        this.studio=studio;
        ratings="pg13";
    }
    var c1=new movie("lovetoday","nikitha");
    }
}
//c.
class movie{
    getpg(movie[] mov){
        movie[]pgmov=newmovie[mov.length]
        for(var i =0;i<mov.length;i++){
            if(mov[i].rating.equals("pg")){
                pgmov[newarrayindex]=movie[i];
                newarrayindex++;
            }
        }
        return pgmov[i];

    }
}
//d.
var c1=new movie("casino Royale","Eon productions","pg13");