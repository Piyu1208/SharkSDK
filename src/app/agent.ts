import { HARNESS_PROMPT } from "./config.js";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
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

interface SharkTool {
    name: string;
    description: string;
    doc?: string;
    executor: (input: string) => Promise<string>
}


export class Builder {
    public instructions: string | undefined;
    public toolList: SharkTool[] = [];


    constructor() {
        this.toolList = [];
    }

    public build() {
        return new Agent(this);
    }

    public setInstructions(instructions: string) {
        this.instructions = instructions;
        return this;
    }

    public tool(t: SharkTool) {
        this.toolList.push(t);
        return this;
    }
}



export class Agent {
    private instructions: string | undefined;
    private openai: OpenAI;

    constructor(builder: Builder) {
        this.instructions = `
        ${HARNESS_PROMPT}

        SYSTEM_PROMPT: 
        ${builder.instructions}
        `;

        this.openai = new OpenAI({
            baseURL: 'https://aicredits.in/v1',
            apiKey: process.env.OPENAI_API_KEY
        });
    }

    static builder() {
        return new Builder();
    }

    public printSysPrompt() {
        console.log(this.instructions);
        return this;
    }

    public async run(query: string) {
        const response = await this.openai.responses.create({
            model: "gpt-4o-mini",
            input: `${query}`,
        });

        return response.output_text;
    }
}