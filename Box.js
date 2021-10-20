class Box {
    //PROPIEDADES
    //Que se especifique en el sketch
    constructor(x, y, width, height) {
        var options = {
            //Si solo es uno no lleva ;
            'restitution' : 0.8,
            'friction' : 0.3,
            'density' : 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    //FUNCIONES
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        
        //Captura la información
        push();
        //Qué va a cambiar
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        stroke("green");
        strokeWeight(4);
        rect(0, 0, this.width, this.height);
        pop();
        //Pop la devuelve la información anterior
        
    }
}