import { SELECT_INSTALLATION, LOADING, LOADING_DONE } from "./actionTypes";

const initialState = {
    loading: false,
    availableInstallations: [],
    installation: {
        installationId: null,
    },
};

export const reducer = (state = initialState, action) => {
    if (action == null) return state;

    switch (action.type) {
        case LOADING:
            return { ...state, loading: true };
        case LOADING_DONE:
            return { ...state, loading: false };
        case SELECT_INSTALLATION:
            return { ...state, loading: false, installation: action.payload };
        default:
            return state;
    }
};
