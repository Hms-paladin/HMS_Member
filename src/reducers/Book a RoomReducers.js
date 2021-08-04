import { BOOKROOM_LIST,PARTICULAR_ROOM_LIST,
        ROOM_DETAILS,GET_ROOM_BOOKINGS,GET_BOOKINGS_HISTORY
} from "../utils/Constants.js";
  const initalState = {
      BookList:[],Particular_RoomList:[],RoomDetails:[],GetBookingDetail:[],BookingHistory:[]
  };
  
  const DietReducer= (state = initalState, action) => {
    console.log(action.payload,"payload")
    switch (action.type) {
      case BOOKROOM_LIST:
        return { ...state, BookList: action.payload }; 
      case PARTICULAR_ROOM_LIST:
        return { ...state, Particular_RoomList: action.payload};   
      case ROOM_DETAILS:
        return {...state,RoomDetails: action.payload};
      case GET_ROOM_BOOKINGS:
        return {...state,GetBookingDetail:action.payload}
      case GET_BOOKINGS_HISTORY:
        return {...state,BookingHistory:action.payload}  
      default:
        return state;
    }
  }
  
  export default DietReducer;