// Stand-in for a real, popular open-source package.
// The point of the demo is the CI pipeline around it, not this code.
function format(level, msg) {
  return `[${level.toUpperCase()}] ${msg}`;
}

module.exports = { format };
