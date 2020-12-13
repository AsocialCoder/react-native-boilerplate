

import images from "consts/images";

export const getImages = () => {

    try {
        return images;
    }
    catch (error) {
        console.log("imageErr", error);
    }
};