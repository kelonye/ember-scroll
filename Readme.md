Install
---

    $ component install kelonye/ember-scroll

Use
---

```javascript
  
    App.IndexRoute = Em.Route.extend({
      events: {
        onscroll: function() {
          // scroll event trigger by IndexView
          // populate route's model here
        }
      }
    });

  App.IndexView = Em.View.extend(require('ember-scroll'));

```

Example
---

    $ make example

Credit
---

@nerdyworm's [ember-infinite-scroll](https://github.com/nerdyworm/ember-infinite-scroll)

License
---

MIT