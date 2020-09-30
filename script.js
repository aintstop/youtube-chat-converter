/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

$(() => {
  $('#bProcess').click(processText)
})

function processText () {
  let originalText = $('#tOriginal').val()
  let step1 = originalText.replace(/\n\n/gm, 'XXX')
  let step2 = step1.replace(/\n/gm, ' — ')
  let step3 = step2.replace(/XXX/gm, '\n\n')
  $('#tProcessed').val(step3)
}
