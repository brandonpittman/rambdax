const escape = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')

const getOccurances = input => input.match(/{{\s*.+?\s*}}/g)

const getOccuranceProp = occurance => occurance.replace(/{{\s*|\s*}}/g, '')

const replace = ({
  inputHolder,
  prop,
  replacer
}) => inputHolder.replace(new RegExp(`{{\\s*${escape(prop)}\\s*}}`), replacer)

function template(input, templateInput) {
  if (arguments.length === 1) {
    return templateInputHolder => template(input, templateInputHolder)
  }

  const occurances = getOccurances(input)
  if (occurances === null) return input
  let inputHolder = input
  for (const occurance of occurances) {
    const prop = getOccuranceProp(occurance)
    const replacer = new Function('templateInput', `with(templateInput) { return ${prop} }`)(templateInput)

    inputHolder = replace({
      inputHolder,
      prop,
      replacer
    })
  }

  return inputHolder
}
