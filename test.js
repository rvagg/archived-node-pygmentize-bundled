var assert = require('assert')
  , pygments = require('./')

  , cases = [
        {
            lang: 'js'
          , format: 'html'
          , input: 'var a = "b";'
          , output: '<div class="highlight"><pre><span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="s2">&quot;b&quot;</span><span class="p">;</span></pre></div>'
        }
      , {
            lang: 'c++'
          , format: 'console'
          , input: 'bool a = true;'
          , output: '\u001b[36mbool\u001b[39;49;00m \u001b[39;49;00ma\u001b[39;49;00m \u001b[39;49;00m=\u001b[39;49;00m \u001b[39;49;00m\u001b[34mtrue\u001b[39;49;00m;\u001b[39;49;00m'
        }
    ]

cases.forEach(function (c) {
  pygments(c.lang, c.format, c.input, function (err, result) {
    assert.equal(err, null)
    result = result.toString().replace(/\n/g, '')
    assert.equal(result, c.output)
  })
})