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
    instructions;
    constructor() {
    }
    build() {
        return new Agent(this);
    }
    setInstructions(instructions) {
        this.instructions = instructions;
        return this;
    }
}
export class Agent {
    instructions;
    constructor(builder) {
        this.instructions = builder.instructions;
    }
    static builder() {
        return new Builder();
    }
    printSysPrompt() {
        console.log(this.instructions);
    }
}
//# sourceMappingURL=agent.js.map