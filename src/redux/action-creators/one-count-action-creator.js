import {
INC,
DEC,
RESET,
} from '../action-types'

const incAction = (()=>({type:INC}))
const decAction = (()=>({type:DEC}))
const resetAction = (() => ({ type: RESET }));

export {
incAction,
decAction,
resetAction , 
}