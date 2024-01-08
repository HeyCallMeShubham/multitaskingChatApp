
import {createSlice} from "@reduxjs/toolkit";



const initialState = {

   currentUser:null,
   loading:false, 
   error:false

}



const userSlice = createSlice({

    name:"user",
    initialState,
    reducers:{

      signInCart:(state) =>{

      state.loading = true

      },

      signInSuccess:(state, action) => void(

      state.currentUser = action.payload,
      state.loading = false,
      state.error = false

      ),


      
     signInFailure:(state, action) => void(

        state.loading = false,
        state.error = action.payload
 
 
      )


    }


})





export const {signInCart, signInSuccess, signInFailure} = userSlice.actions



export default userSlice.reducer


