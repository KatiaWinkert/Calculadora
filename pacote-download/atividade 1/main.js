window.onload = () => {
  function writeNumber(elementId) {
    var outputValueTo = document.getElementById('field1')

    if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
      outputValueTo.value = elementId.textContent
    } else {
      outputValueTo.value += elementId.textContent
    }
  }

  function cleartxt() {
    document.getElementById('field1').value = '0'
    document.getElementById('dec').disabled = false
  }

  function setOperator(elementId) {
    var outputValueTo = document.getElementById('field1')
    if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
      outputValueTo.value = '0'
    } else {
      outputValueTo.value += elementId.textContent
      document.getElementById('dec').disabled = false
    }
  }

  function setDecimal(elementId, status) {
    var outputValueTo = document.getElementById('field1')
    outputValueTo.value += elementId.textContent
    document.getElementById('dec').disabled = status
  }

  function calculate() {}
}
