/*
import Agent


function init() {
    const agent = Agent.builder.setInstructions.build

}

*/
import { Agent } from './app/agent.js';
function init() {
    const agent = Agent.builder().
        setInstructions("MMA").build().printSysPrompt();
}
init();
//# sourceMappingURL=index.js.map