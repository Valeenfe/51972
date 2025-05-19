import DowhileListener from "./generated/DoWhileListener.js";

export class CustomDoWhileListener extends DoWhileListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}