interface SharkTool {
    name: string;
    description: string;
    doc?: string;
    executor: (input: string) => Promise<string>;
}
export declare class Builder {
    instructions: string | undefined;
    toolList: SharkTool[];
    constructor();
    build(): Agent;
    setInstructions(instructions: string): this;
    tool(t: SharkTool): this;
}
export declare class Agent {
    private instructions;
    private openai;
    constructor(builder: Builder);
    static builder(): Builder;
    printSysPrompt(): this;
    run(query: string): Promise<string>;
}
export {};
//# sourceMappingURL=agent.d.ts.map