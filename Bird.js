class Bird {
    //PROPIEDADES
    //Que se especifique en el sketch
    constructor(x, y) {
        var options = {
            //Si solo es uno no lleva ;
            'restitution' : 0.8,
            'friction' : 0.3,
            'density' : 1.0
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }

    //FUNCIONES
    display() {
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        
        //Captura la información
        push();
        //Qué va a cambiar
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        stroke("red");
        strokeWeight(4);
        rect(0, 0, this.width, this.height);
        pop();
        //Pop la devuelve la información anterior
        
    }
}