

import {createSlice} from "@reduxjs/toolkit"




const initialState = {

  selectedUserToChat:""

}





const selectedUserToChatSlice = createSlice({

   name:"selectedUserToChat", 
  initialState,
  reducers:{

     setSelectedUserToChat:(state, action) =>{

        
       state.selectedUserToChat = action?.payload

     },


 
  }
    

});




  export const {setSelectedUserToChat} = selectedUserToChatSlice.actions




   export default selectedUserToChatSlice.reducer






