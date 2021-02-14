class Rubber extends Material
{
    constructor(x, y, width, height, color)
    {
        super(x, y, width, height, 1, 1, 0.9, color);
    }

    display(showText)
    {
        super.display();
        if (showText)
        {
            push();
            stroke("white");
            strokeWeight(1);
            textSize(10);
            text(this.constructor.name, this.body.position.x, this.body.position.y-100);
            pop();
        }
    }
}