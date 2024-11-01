import {api} from "../../api/api";
import {setMaterias} from "./crtcSlice";

export const startLoadingSignatures = () => {
    return async (dispatch) => {
        //const response = await api.get('providers')
        const response = {
            "Física": 8,
            "Algebra": 7,
            "Matematica Discreta": 10,
            "Quimica": 4,
            "Analisis Matematico 1": 7
        }


        dispatch(setMaterias(response))

    }
}