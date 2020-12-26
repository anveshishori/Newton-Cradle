class Chain{
constructor(body1, body2, offsetX, offsetY){
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    var options = {
        bodyA: body1,
        bodyB: body2,
        pointB: {x: this.offsetX, y: this.offsetY},
        length: 200

    }

   this.rope = Constraint.create(options);
    
    World.add(myworld, this.rope);
    
}

display(){

    var pointA = this.rope.bodyA.position
    var pointB = this.rope.bodyB.position

strokeWeight(3);
    var anchor1X = pointA.x;
    var anchor1Y = pointA.y;

    var anchor2X = pointB.x+this.offsetX
    var anchor2Y = pointB.y+this.offsetY



line(anchor1X,anchor1Y-r,anchor2X,anchor2Y);

}
}