class ParameterException extends Error {
  constructor(errors) {
    super('Invalid Parameters')
    this.status = 400
    this.errors = errors
  }
}

class DuplicatingFields extends Error {
  constructor(field) {
    super(`重复的${field}`)
  }
}

function patchFieldForData(doc) {
  return (
    doc &&
    typeof doc.toObject === 'function' &&
    doc.toObject({
      versionKey: false,
      transform(doc, result) {
        Reflect.set(result, 'id', result._id)
        Reflect.deleteProperty(result, '_id')
        return result
      },
    })
  )
}

module.exports = {
  ParameterException,
  DuplicatingFields,
  patchFieldForData,
}
