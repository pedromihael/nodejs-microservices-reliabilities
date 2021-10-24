const knex = require('../../../../../infra/db/adapters/knex')
const ApiErrorFactory = require('../../../../../shared/factories/ApiErrorFactory')

const errorFactory = ApiErrorFactory()

function PostgresReliabilityRepository() {
  const create = async data => {
    try {
      const { name, meta_percent } = data
      await knex('reliability').insert({ name, meta_percent });

      return { ok: true }
    } catch (error) {
      return errorFactory.createError(error, 'createReliability')
    }
   }
  
  const findAll = async () => {
    try {
      const results = await knex('reliability').orderBy('id')
      return results
    } catch (error) {
      return errorFactory.createError(error, 'findAllReliabilities')
    }
   }
  
  const findById = async id => {
    try {
      const result = await knex('reliability').where({ id })
      if (result.length) {
        return result[0]
      } else {
        return null
      }
    } catch (error) {
      return errorFactory.createError(error, 'findReliabilityById')
    }
  }

  const findByName = async (name) => {
    try {
      const result = await knex('reliability').where({ name });
      return result[0];
    } catch (error) {
      return errorFactory.createError(error, 'findReliabilityByName')
    }
  };
  
  const remove = async id => {
    try {  
      await knex('reliability').where({ id }).delete();

      return { ok: true };
    } catch (error) {
      return errorFactory.createError(error, 'deleteReliability');
    }
  }

  const save = async (id, data) => {
    try {
      const { field, value } = data
      await knex('reliability')
        .update({ [`${field}`]: value })
        .where({ id });
  
      return { ok: true };
    } catch (error) {
      return errorFactory.createError(error, 'updateReliability');
    }
  }
  
  return {
    create,
    findAll,
    findById,
    findByName,
    remove,
    save
  }
}

module.exports = { PostgresReliabilityRepository }