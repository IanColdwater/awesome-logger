// A trivial test. In the attack, a malicious fork REPLACES the test script
// (or this file) so that "npm test" runs attacker-controlled code inside a
// privileged pull_request_target workflow.
const assert = require("assert");
const { format } = require("../index.js");

assert.strictEqual(format("info", "hello"), "[INFO] hello");
console.log("ok - basic format test passed");
