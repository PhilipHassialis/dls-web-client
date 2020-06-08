import axios from "axios";
import {
    AVAILABLE_INSTALLATIONS_LOADED,
    AVAILABLE_INSTALLATIONS_LOADING,
} from "../../store/actionTypes";

export const loadInstallationsAsync = () => {
    return (dispatch, getState) => {
        console.log("Inside loadInstallationsAsync");
        dispatch({ type: AVAILABLE_INSTALLATIONS_LOADING });
        axios
            .get("http://89.210.47.136:39005/installations", {
                Allowcrossdomain: true,
            })
            .then(
                (response) => {
                    dispatch({
                        type: AVAILABLE_INSTALLATIONS_LOADED,
                        payload: response.data,
                    });
                },
                (error) => {
                    console.log(error);
                }
            )
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: AVAILABLE_INSTALLATIONS_LOADED,
                    payload: [],
                });
            });
    };
};
