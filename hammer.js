class Hammer extends Material
{
    constructor(x, y)
    {
        super(x, y, 100, 40, 0.9, 0, 0.4, [211, 211, 211]);
        this.body.density = 2;
    }

    display(showText)
    {
        super.display();
        if (showText)
        {
            push();
            push();
            stroke("black");
            strokeWeight(1);
            fill(this.color);
            textSize(10);
            text(this.constructor.name, this.body.position.x, this.body.position.y-100);
            pop();
        }
    }
}