/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import {Image} from "react-native";
import PropTypes from "prop-types";
import _ from "lodash";

const AutoHeightImage = ({image, imageWidth, style ={}}) => {

    const [imgHeight, setImgHeight] = useState(0);
    const [imgWidth, setImgWidth] = useState(0);

    useEffect(() => {
        setImageSize();
    }, [image]);

    const setImageSize = async () =>{
        try {
            if (_.result(image, "uri")){
                const {width, height} = await new Promise ((resolve, reject)=>{
                    Image.getSize(image.uri, (defautlWidth, defautlHeight) => {
                        resolve({
                            width:defautlWidth, 
                            height:defautlHeight
                        });
                    }, (error)=>{
                        reject(error);
                    });
                }); 

                if (imageWidth) {
                    setImgWidth(imageWidth);
                    setImgHeight(height * (imageWidth / width));
                }
            }   
            else {
                const {width, height} = Image.resolveAssetSource(image);
                setImgWidth(imageWidth);
                setImgHeight(height * (imageWidth / width));
            }   
        }
        catch (err){
            console.log("AutoHeightImageErr", err);
        }
    };

    return (
        <Image 
            style={{width:imgWidth, height:imgHeight, minWidth:imageWidth, ...style}} 
            source={_.result(image, "require") ? image.require : image}
        />
    );
};

AutoHeightImage.propTypes = {
    image:PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    imageWidth:PropTypes.number,
    style:PropTypes.object
};


export default AutoHeightImage;
