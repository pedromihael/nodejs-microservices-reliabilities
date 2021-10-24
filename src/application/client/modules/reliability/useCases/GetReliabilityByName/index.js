const ApiErrorFactory = require('../../../../../../shared/factories/ApiErrorFactory')

const apiErrorFactory = ApiErrorFactory()

function GetReliabilityByNameUseCase(repository) {
  const execute = async id => {
    if (id) {
      const response = await repository.findByName(id)
      return response
    } else {
      return apiErrorFactory.createError(
        'API Error',
        'GetReliabilityWithMissingName',
        400
      )
    }
  }

  return { execute }
}

module.exports = GetReliabilityByNameUseCase
