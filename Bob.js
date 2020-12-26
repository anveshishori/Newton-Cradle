class Bob{
constructor(x,y,radius){
    var option = {
    restitution : 1.1,
    isStatic: false,
    friction:0.1,
    density: 0.65


}
this.body = Bodies.circle(x,y,radius, option)
this.radius = radius;

World.add(myworld, this.body);

}

display(){
var pos = this.body.position

push();
//translate(pos.x,pos.y);

ellipseMode(RADIUS);
fill("yellow")
ellipse(pos.x,pos.y,this.radius, this.radius)
pop();
}



}