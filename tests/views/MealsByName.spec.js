import { shallowMount } from '@vue/test-utils'
import MealsByName from '../.././src/views/MealsByName.vue'
import axios from "axios";

jest.mock("axios");

describe("MealsByName.vue", () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallowMount(MealsByName);
    });
  
  it("emits search value when user types in search input", async () => {
      const searchInput = wrapper.find('[data-test-search-input]');
      const searchValue = "pizza";
  
      searchInput.setValue(searchValue);
      await wrapper.vm.$nextTick();
  
      expect(wrapper.vm.search).toBeTruthy();
      expect(wrapper.vm.search).toEqual(searchValue);
  });

    
  it("displays meals when there are matching results", async () => {
      const response = {
          data: {
            meals: [
              { idMeal: 1, strMeal: "Meal 1" },
              { idMeal: 2, strMeal: "Meal 2" },
            ],
          },
        };
      axios.get.mockResolvedValue(response);
    
      wrapper.setData({ search: "meal" });
      await wrapper.vm.$nextTick();
      expect(wrapper.findComponent({ name: 'Meals' }).exists()).toBe(true);
      expect(wrapper.vm.meals[0].strMeal).toEqual("Meal 1")
      expect(wrapper.vm.meals).toHaveLength(2);
       
  });
})
  
  
  
  
  


