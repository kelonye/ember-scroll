Install
---

    $ component install kelonye/ember-scroll

Use
---

```javascript

  App.NewsFeedComponent = Em.Component.extend(require('ember-scroll'), {

    actions: {
      
      onscroll: function(){
        // fetch more content
      },

    },

  });

```

Example
---

    $ make example

License
---

MIT