class block extends BaseClass{
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.v = 255 ;
    }
    display(){
        if(this.body.speed < 4){
            super.display();
        }
        else {
            push();
            this.v = this.v - 5;
            noStroke();
            fill(255,this.v);
            rect(this.body.position.x, this.body.position.y , this.width, this.height);
            World.remove(world,this.body);
            pop();
        }
    }
}