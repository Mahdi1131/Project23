class GROUND{
    constructor(){
        var options={
            isStatic: true,
        }

        this.body = Bodies.rectangle(200,380,400,50, options);
        this.width = 400;
        this.height = 50;
        World.add(world, this.body)
    }
    display(){
        var ground1 = this.body.position
        fill("blue");
        rectMode(CENTER)
        rect(ground1.x, ground1.y, this.width, this.height)
    }
}