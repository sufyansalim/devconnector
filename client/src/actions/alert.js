import uuid from 'uuid';
import {SET_ALERT,REMOVE_ALERT} from './types';

export const  setAlert = (msg,alertType,timeout = 5000) => dispactch=>{
    const id = uuid.v4;
    dispactch({
        type: SET_ALERT,
        payload:{msg, alertType, id}
    })

    setTimeout (()=> dispactch({type: REMOVE_ALERT,payload:id}),timeout);
}