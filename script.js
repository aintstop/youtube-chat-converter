$(() => {
  $('#bProcess').click(processText)
  $('#bCopyProcessed').click('#tProcessed', copyText)
  $('#bCopyViewers').click('#tViewers', copyText)
})

function processText () {
  let originalText = $('#tOriginal').val()
  let step1 = originalText.replace(/\n\n/gm, 'XXXXXXXX')
  let step2 = step1.replace(/\n/gm, ' — ')
  let step3 = step2.split('XXXXXXXX')
  
  let matches = [...step3.join('').matchAll(/ — ([\s\S]*?) — /gm)]
  let allNames = matches.map(item => item[1][0].toUpperCase() + item[1].substring(1))
  let uniqueNames = allNames.filter((value, index, self) => self.indexOf(value) === index)
  let sortedNames = uniqueNames.sort()
  
  $('#lProcessed').html(`Texto a ser salvo no Google Drive: [<b>${step3.length} Comentário(s)</b>]`)
  $('#tProcessed').val(step3.join('\n\n'))
  
  $('#lViewers').html(`Listagem de espectadores em ordem alfabética: [<b>${sortedNames.length} Pessoa(s)</b>]`)
  $('#tViewers').val(sortedNames.join('\n'))
  
  $('#dResults').addClass('d-block').removeClass('d-none')
}

function copyText (target) {
  $(target.data)[0].select()
  document.execCommand('copy')
}
