import {createStore} from "redux"
import { Reducer,initialstate } from "./reducer"

export const ConfigureStore=()=>{
    const store=createStore(Reducer,initialstate)
    return store ;
}