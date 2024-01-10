import {useState, useEffect} from "react"
import {io} from "socket.io-client"

const socket = io.connect("http://localhost:4877");


   const useSocketFunction = () =>{


          return socket


   }


export default useSocketFunction






