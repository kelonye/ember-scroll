require('ember');

module.exports = Em.Mixin.create({
  didInsertElement: function() {
    var view = this;
    $(window).bind('scroll', function() {
      view.didScroll();
    });
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