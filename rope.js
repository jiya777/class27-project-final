class rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
this.offsetX=offsetX;
this.offsetY=offsetY;

    var opt={
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:this.offsetX,y:this.offsetY}
       
    }
    this.chain=constraint.create(opt);
    World.add(world,this.chain)
    
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        var x=pointB.x+this.offsetX;
        var y=pointB.y+this.offsetY;
        
        strokeWeight(2);
        line(pointA.x,pointA.y,x,y);
    }
    }
    