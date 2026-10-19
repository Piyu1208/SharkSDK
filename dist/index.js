/*
import Agent


function init() {
    const agent = Agent.builder.setInstructions.build

}

*/
import { Agent } from './app/agent.js';
async function init() {
    const agent = Agent.builder().
        setInstructions("You are a Senior softwar developer").build().printSysPrompt();
    const output = await agent.run("What is DNS and how does it work? Explain to a 12 year old");
    console.log(output);
}
init();
//# sourceMappingURL=index.js.map