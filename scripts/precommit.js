const fs = require("fs");
const path = require("path");

const p = (...args) => path.join(__dirname, ...args);

const validators = fs.readdirSync(p("../src/validators")).map((f) => f.replace(".js", ""));
const tests = fs.readdirSync(p("../test/validators")).map((f) => f.replace(".js", ""));
const readme = fs.readFileSync(p("../README.md")).toString();

validators.forEach((validator) => {
  if (!tests.includes(validator)) {
    console.error(`No test for validator \`${validator}\``);
  }
  if (!readme.includes(`\`${validator}`)) {
    console.error(`No mention in readme of validator \`${validator}\``);
  }
})