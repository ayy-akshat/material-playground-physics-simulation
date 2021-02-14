class Iron extends Material
{
    constructor(x, y, width, height, color)
    {
        super(x, y, width, height, 0.1, 0, 0.05, color);
    }

    display(showText)
    {
        super.display();
        if (showText)
        {
            push();
            stroke("black");
            strokeWeight(1);
            textSize(10);
            text(this.constructor.name, this.body.position.x, this.body.position.y-100);
            pop();
        }
    }
}