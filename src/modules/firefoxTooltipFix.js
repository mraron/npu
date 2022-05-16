const utils = require("../utils");

function firefoxTooltipFix() {
  utils.injectCss(`
    .tooltipbase {
       background-color: #fbfcc5;
    }
  `);
}

module.exports = {
  shouldActivate: () => utils.isLoggedIn(),
  initialize: () => {
    firefoxTooltipFix();
  },
};
