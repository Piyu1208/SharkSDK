
/*

class Builder {

    public instructions;
    public tooList;


    function build() {
        return new Agent(this);
    }

    function setInstructions(instructions) {
        this.instructions = instructions;
        
    }
}




class Agent {
    private instructions;



   constructor(builder: Builder) {
   this.instructions = builder.instructions;
   }

   static run() {
    console.log("This is the run function", instructions);
   }


   static builder() {
    return new Builder();
   }
}
 */


export class Builder {
    public instructions: string | undefined;


    constructor() {

    }

    public build() {
        return new Agent(this);
    }

    public setInstructions(instructions: string) {
        this.instructions = instructions;
        return this;
    }
}



export class Agent {
    private instructions: string | undefined;


    constructor(builder: Builder) {
        this.instructions = builder.instructions;
    }

    static builder() {
        return new Builder();
    }

    public printSysPrompt() {
        console.log(this.instructions);
    }
}