import { 
  DIET_COMPANY_LST,GET_MEAL_PLANS,
  CATEGORY_MEAL_PLAN,DIET_INSTRUCTIONS,
  DIET_BOOKING_LIST,DIET_BOOKING_HISTORY,
  ADD_MEAL_PLAN,
  ADD_REPEAT_MENU
} from "../utils/Constants.js";
const initalState = {
    DietCompanyList: [],DietMealPlan:[],CategoryMealPlan:[],
    diet_Instructions:[],Booking_list:[],BookingHistory:[],AddMealplan:[],
    RepeatMenu:[]
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
    case DIET_BOOKING_LIST:
        return {...state,Booking_list:action.payload} 
    case DIET_BOOKING_HISTORY:
        return {...state,BookingHistory:action.payload}  
    case ADD_MEAL_PLAN:
        return {...state,AddMealplan:action.payload}
    case ADD_REPEAT_MENU:
        return {...state,RepeatMenu:action.payload}                   
    default:
      return state;
  }
}

export default DietReducer;