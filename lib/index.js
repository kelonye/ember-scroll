require('ember');

module.exports = Em.Mixin.create({
  
  optionScrollAction: 'onscroll',
  
  optionScrollElement: null,

  __setup: function(){
    $(window).bind('scroll', this.didScroll.bind(this));
  }.on('didInsertElement'),
  
  __teardown: function() {
    $(window).unbind('scroll');
  }.on('willDestroyElement'),
  
  didScroll: function() {
    if(this.isScrolledToBottom()) {
      var action = this.get('optionScrollAction');
      this.send(action);
    }
  },
  
  isScrolledToBottom: function() {

    // http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling/488073#488073
    
    var el = this.get('optionScrollElement');

    if (el){

      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(el).offset().top;
      var elemBottom = elemTop + $(el).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));

    } else {

      var distanceToTop = $(document).height() - $(window).height();
      var top = $(document).scrollTop();
      return top === distanceToTop;

    }

  },

});