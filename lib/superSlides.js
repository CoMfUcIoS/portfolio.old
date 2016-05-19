/**
 * superSlide needed functions
 *
 * @type {Object}
 */
superSlides = (function() {

  /*!
   * Executes the superslides when
   * slides are ready.
   *
   * @method _load
   * @private
   */
  function _load() {
    $('#slides').superslides({
      animation: 'fade',
      play: 5e3
    });
  }

  return {
    /**
     * Initialize the superSlides module
     *
     * @method  init
     */
    init: function() {
      spearhead.waitForElement('#loader', _load);
    }
  };
})();
