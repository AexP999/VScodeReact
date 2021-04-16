import {
INC,
INC_CUSTOM,
DEC,
RESET,
INC_TWO,
INC_CUSTOM_TWO,
DEC_TWO,
RESET_TWO,
} from '../action-types'

const incAction = () => ({type: INC})
const incCustomAction = (payload) => ({type: INC_CUSTOM, payload})
const decAction = () => ({type: DEC})
const resetAction = () => ({type: RESET})
const incAction2 = () => ({type: INC_TWO})
const incCustomAction2 = (payload) => ({type: INC_CUSTOM_TWO, payload})
const decAction2 = () => ({type: DEC_TWO})
const resetAction2 = () => ({type: RESET_TWO})

export {
    incAction,
    incCustomAction,
    decAction,
    resetAction,
    incAction2,
    incCustomAction2,
    decAction2,
    resetAction2
}