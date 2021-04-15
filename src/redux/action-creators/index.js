import {
INC,
INC_CUSTOM,
DEC,
RESET,
INC_TWO,
INC_CUSTOM_TWO,
DEC_TWO,
RESET_TWO,
ON_USERS_LOADED,
    ON_ADD_TO_BAD,
ON_REMOVE_FROM_BAD
} from '../action-types'

const incAction = () => ({type: INC})
const incCustomAction = (payload) => ({type: INC_CUSTOM, payload})
const decAction = () => ({type: DEC})
const resetAction = () => ({type: RESET})
const incAction2 = () => ({type: INC_TWO})
const incCustomAction2 = (payload) => ({type: INC_CUSTOM_TWO, payload})
const decAction2 = () => ({type: DEC_TWO})
const resetAction2 = () => ({type: RESET_TWO})
const onUserLoaded = (payload) => ({type: ON_USERS_LOADED, payload})
const onAddToBad = (payload) => ({type: ON_ADD_TO_BAD, payload})
const onRemoveFromBad = (payload) => ({type: ON_REMOVE_FROM_BAD, payload})



export {
    incAction,
    incCustomAction,
    decAction,
    resetAction,
    incAction2,
    incCustomAction2,
    decAction2,
    resetAction2,
    onUserLoaded,
    onAddToBad,
    onRemoveFromBad
}