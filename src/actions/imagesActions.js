import {getImages} from "models/image";

export const fetchImages = () => {
    return (dispatch) => {
        dispatch({
            type:"START_ADD_IMAGE"
        });

        const images = getImages();

        dispatch({
            type:"ADD_IMAGE",
            payload:images
        });

        dispatch({
            type:"DONE_ADD_IMAGE"
        });
    };
};