# Pygmentize (Bundled)

A simple wrapper around Python's Pygments code formatter, with Pygments bundled
-------------------------------------------------------------------------------

Similar to [pksunkara's pygments.js](https://github.com/pksunkara/pygments.js) but this comes bundled with Pygments so it doesn't need to be installed on your system, you just need to have Python.

Currently the interface is very simple, no additional options:

```js
var pygmentize = require('pygmentize-bundled')

pygmentize('js', 'html', 'var a = "b";', function (err, result) {
  console.log(result.toString())
})
```

Results in:

```html
<div class="highlight"><pre>
  <span class="kd">var</span>
  <span class="nx">a</span>
  <span class="o">=</span>
  <span class="s2">&quot;b&quot;</span>
  <span class="p">;</span>
</pre></div>
```

## API

**pygmentize(lang, format, code, callback)**

Refer to the [Pygments documentation](http://pygments.org/docs/). For supported languages, see the list of [lexers](http://pygments.org/docs/lexers/), for supported formatted, see the list of [formatters](http://pygments.org/docs/formatters/).

Licence & copyright
-------------------

Pygments (Bundled) is Copyright (c) 2012 Rod Vagg <@rvagg> and licenced under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.

Pygments is licenced under the BSD licence.