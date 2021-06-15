import { DIET_COMPANY_LST,GET_MEAL_PLANS,CATEGORY_MEAL_PLAN,DIET_INSTRUCTIONS} from "../utils/Constants.js";
const initalState = {
    DietCompanyList: [],DietMealPlan:[],CategoryMealPlan:[],diet_Instructions:[]
};

const DietReducer= (state = initalState, action) => {
  switch (action.type) {
    case DIET_COMPANY_LST:
      return { ...state, DietCompanyList: action.payload };
    case GET_MEAL_PLANS:
       return {...state,DietMealPlan:action.payload}  
    case CATEGORY_MEAL_PLAN:
        return {...state,CategoryMealPlan:action.payload}  
    case DIET_INSTRUCTIONS:
        return {...state,diet_Instructions:action.payload}      
    default:
      return state;
  }
}

export default DietReducer;