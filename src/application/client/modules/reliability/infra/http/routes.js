const {
  CreateReliabilityUseCase,
  UpdateReliabilityUseCase,
  GetReliabilityByIdUseCase,
  ListAllReliabilitiesUseCase,
  GetReliabilityByNameUseCase,
  DeleteReliabilityUseCase
} = require('../../useCases')

const { PostgresReliabilityRepository } = require('../../repositories/PostgresReliabilityRepository')
const repository = PostgresReliabilityRepository()

const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  const listAllReliabilitiesUseCase = ListAllReliabilitiesUseCase(repository)
  const response = await listAllReliabilitiesUseCase.execute()

  if (response.isApiError) res.status(response.code).send(response)
  
  else res.send(response)

  res.send(response)
})

router.get('/:id', async (req, res) => {
  const getReliabilityByIdUseCase = GetReliabilityByIdUseCase(repository)
  const response = await getReliabilityByIdUseCase.execute(req.params.id)

  if(!response) res.status(404).send({ok: false, message: 'not found'})

  if (response.isApiError) res.status(response.code).send(response)
  
  else res.send(response)
})

router.get('/name/:name', async (req, res) => {
  const getReliabilityByNameUseCase = GetReliabilityByNameUseCase(repository)
  const response = await getReliabilityByNameUseCase.execute(req.params.name)

  if(!response) res.status(404).send({ok: false, message: 'not found'})

  if (response.isApiError) res.status(response.code).send(response)
  
  else res.send(response)
})

router.post('/', async (req, res) => {
  const createReliabilityUseCase = CreateReliabilityUseCase(repository)
  const response = await createReliabilityUseCase.execute(req.body)

  if (response.isApiError) res.status(response.code).send(response)
  
  else res.send(response)
})

router.put('/:id', async (req, res) => {
  const data = req.body
  const updateReliabilityUseCase = UpdateReliabilityUseCase(repository)
  const response = await updateReliabilityUseCase.execute(req.params.id, data)

  if (response.isApiError) res.status(response.code).send(response)
  
  else res.send(response)})

router.delete('/:id', async (req, res) => {
  const deleteReliabilityUseCase = DeleteReliabilityUseCase(repository)
  const response = await deleteReliabilityUseCase.execute(req.params.id)

  res.send(response)
})

module.exports = router