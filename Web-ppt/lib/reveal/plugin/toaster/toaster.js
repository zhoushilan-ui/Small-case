// toaster.js
// export default () => {
//     id: 'toaster',
//     init: ( deck ) => {
//       deck.addKeyBinding( { keyCode: 84, key: 'T' }, () => {
//         deck.shuffle();
//         console.log('🍻');
//       } );
//     }
//   }

const Toaster = {
  id: "toaster",

  HIGHLIGHT_STEP_DELIMITER: "|",
  HIGHLIGHT_LINE_DELIMITER: ",",
  HIGHLIGHT_LINE_RANGE_DELIMITER: "-",

  hljs: hljs,

  /**
   * Highlights code blocks withing the given deck.
   *
   * Note that this can be called multiple times if
   * there are multiple presentations on one page.
   *
   * @param {Reveal} reveal the reveal.js instance
   */
  init: function (reveal) {
    console.log(reveal);
  },
};
export default () => Toaster;
