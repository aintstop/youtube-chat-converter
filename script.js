/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
$(() => {
  $('#bProcess').click(processText)
})

function processText () {
  let originalText = $('#tOriginalText').value()
}
