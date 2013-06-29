require('ember');

module.exports = Em.Mixin.create({
  didInsertElement: function() {
    $(window).bind('scroll', this.didScroll.bind(this));
  },
  willDestroyElement: function() {
    $(window).unbind('scroll');
  },
  didScroll: function() {
    if(this.isScrolledToBottom()) {
      this.get('controller').send('onscroll');
    }
  },
  isScrolledToBottom: function() {
    var distanceToTop = $(document).height() - $(window).height();
    var top = $(document).scrollTop();
    return top === distanceToTop;
  }
});