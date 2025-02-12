'use strict';

function index() {
  return {
    extensions: [
      {
        name  : 'nonbreakingSpaces',
        level : 'inline',
        start(src) { return src.match(/:>+/m)?.index; }, // Hint to Marked.js to stop and check for a match
        tokenizer(src, tokens) {
          const regex = /:(>+)/ym;
          const match = regex.exec(src);
          if(match?.length) {
            return {
              type   : 'nonbreakingSpaces', // Should match "name" above
              raw    : match[0],     // Text to consume from the source
              length : match[1].length,
              text   : ''
            };
          }
        },
        renderer(token) {
          return '&nbsp;'.repeat(token.length).concat('');
        }
      }
    ]
  };
}

module.exports = index;
