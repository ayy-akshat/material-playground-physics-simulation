class Ground
{
    constructor(x, y, width, height, color)
    {
        var bodyOptions=
        {
            friction:0.9,
            frictionStatic:1,
            isStatic:true
        }
        
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,this.width,this.height,bodyOptions);
        World.add(world,this.body);
        this.color = color;
    }

    display()
    {
        push();
        noStroke();
        fill(this.color);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}