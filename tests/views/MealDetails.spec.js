import { shallowMount } from '@vue/test-utils'
import MealDetails from '../.././src/views/MealDetails.vue'
import api from '../../api'

const response = {
  meals: [{
    "idMeal": "1",
    "strMeal": "Corba",
    "strTags": "Turkish",
    "strCategory": "starter",
  }]
}

jest.mock('../../api', () => ({
  get: jest.fn(() => Promise.resolve({ data: response }))
}))


describe('MealDetails.vue', () => {
  const wrapper = shallowMount(MealDetails, { global: { mocks: { $route: { params: { id: 1 } } } } })
  it('should correctly mocks the API and checks if it is called', async () => {
    expect(api.get).toHaveBeenCalledWith('lookup.php?i=1')
  })
})