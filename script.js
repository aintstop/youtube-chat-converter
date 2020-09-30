$(() => {
  $('#bProcess').click(processText)
})

function processText () {
  let originalText = $('#tOriginal').val()
  let step1 = originalText.replace(/\n\n/gm, 'XXX')
  let step2 = step1.replace(/\n/gm, ' — ')
  let step3 = step2.replace(/XXX/gm, '\n\n')
  
  let matches = [...step3.matchAll(/ — ([\s\S]*?) — /gm)]
  let allNames = matches.map(item => item[1][0].toUpperCase() + item[1].substring(1))
  let uniqueNames = allNames.filter((value, index, self) => self.indexOf(value) === index)
  let sortedNames = uniqueNames.sort()
  
  $('#tProcessed').val(step3)
  $('#tViewers').val(sortedNames.join('\n'))  
  $('#dResults').addClass('d-block').removeClass('d-none')
}
