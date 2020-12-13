import React from "react";
import PropTypes from "prop-types";
import {AutoHeightImage} from "components/common";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";


const SliderItem = ({image}) => {

    return (
        <AutoHeightImage 
            image={image}
            imageWidth={wp("100%")}
        />
        
    );
};

SliderItem.propTypes = {
    image:PropTypes.object, 
};

export default SliderItem;
