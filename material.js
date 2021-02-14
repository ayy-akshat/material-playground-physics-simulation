class Material
{
    constructor(x, y, width, height, friction, frictionStatic, restitution, color)
    {
        var bodyOptions=
        {
            restitution:restitution,
            frictionAir:0,
            friction:friction,
            frictionStatic:frictionStatic,
            density:1
        }
        
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,this.width,this.height,bodyOptions);
        World.add(world,this.body);
        this.color = color;
        this.sprite = createSprite(x, y, this.width, this.height);
        this.sprite.shapeColor = this.color;
    }

    display(showText)
    {
        this.sprite.rotation = 360*this.body.angle/(2*PI);
        this.sprite.x = this.body.position.x;
        this.sprite.y = this.body.position.y;
    }
}