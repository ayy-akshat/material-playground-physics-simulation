class Rock
{
    constructor(x, y, radius, color)
    {
        var bodyOptions=
        {
            restitution:0.075,
            frictionAir:0,
            friction:0.9,
            frictionStatic:0.7,
            density:1.5
        }
        
        this.radius = radius;
        this.body = Bodies.circle(x,y,this.radius,bodyOptions);
        World.add(world,this.body);
        this.color = color;
    }

    display(showText)
    {
        push();
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        if (showText)
        {
            push();
            stroke("white");
            strokeWeight(1);
            textSize(10);
            text(this.constructor.name, this.body.position.x, this.body.position.y-100);
            pop();
        }
        pop();
    }
}