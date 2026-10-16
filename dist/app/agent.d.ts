export declare class Builder {
    instructions: string | undefined;
    constructor();
    build(): Agent;
    setInstructions(instructions: string): this;
}
export declare class Agent {
    private instructions;
    constructor(builder: Builder);
    static builder(): Builder;
    printSysPrompt(): void;
}
//# sourceMappingURL=agent.d.ts.map