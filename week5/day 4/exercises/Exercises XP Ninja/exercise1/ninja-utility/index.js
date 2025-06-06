import { program } from "commander";
import greet from "./commands/greet.js";
import fetch from "./commands/fetch.js";
import read from "./commands/read.js";

program.command("greet").action(greet);
program.command("fetch").action(fetch);
program.command("read <file>").action(read);

program.parse(process.argv);
