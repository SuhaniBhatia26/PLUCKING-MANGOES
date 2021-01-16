class Tree{
    constructor(x,y){
        var options={
            isStatic:true

        }
        this.tree = Bodies.rectangle(x,y,options);
        this.image = loadImage("tree.png")
    }
display(){
    imageMode(CENTER);
    var pos = this.tree.position.x;
    var pos = this.tree.position.y;
    image(this.image,pos,pos,600,600);
}
}