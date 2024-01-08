

import {createSlice} from "@reduxjs/toolkit"




const initialState = {

  notifications:[]

}





const notificationSlice = createSlice({

   name:"notifications", 
  initialState,
  reducers:{

     addNotifications:(state, action) =>{

        
       state?.notifications?.push(action?.payload)

     },

    removeNotifications:(state, action) =>{

      state?.notifications?.splice(state?.notifications?.findIndex((data) => data?.senderId !== action?.payload), 1)

    }


  }
    

});




  export const {addNotifications, removeNotifications} = notificationSlice.actions




   export default notificationSlice.reducer






