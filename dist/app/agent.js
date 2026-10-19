import { HARNESS_PROMPT } from "./config.js";
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();
export class Builder {
    instructions;
    toolList = [];
    constructor() {
        this.toolList = [];
    }
    build() {
        return new Agent(this);
    }
    setInstructions(instructions) {
        this.instructions = instructions;
        return this;
    }
    tool(t) {
        this.toolList.push(t);
        return this;
    }
}
export class Agent {
    instructions;
    openai;
    constructor(builder) {
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
    printSysPrompt() {
        console.log(this.instructions);
        return this;
    }
    async run(query) {
        const response = await this.openai.responses.create({
            model: "gpt-4o-mini",
            input: `${query}`,
        });
        return response.output_text;
    }
}
//# sourceMappingURL=agent.js.map