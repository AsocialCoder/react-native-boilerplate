/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import {StyleSheet, Animated, PanResponder} from "react-native";
import PropTypes from "prop-types";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import _ from "lodash";

import SliderItem from "components/ImageSliderScreen/SliderItem";


const ImageSlider = ({images}) => {


    const [imageList, setImageList] = useState(images);
    const [position, setPosition] = useState(new Animated.Value(0));
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    let panresponderEnabled = true;

    useEffect(() => {
        if (currentImageIndex%(imageList.length-1) === 0 || currentImageIndex === 1){
            panresponderEnabled = false;
            const baseImageArray = [...imageList, ...images];

            if (baseImageArray.length > images.length*2){
                baseImageArray.splice(0, images.length);
            }
            setCurrentImageIndex(-1*(images.length-1));
            position.setValue(-1*(images.length-1)*wp("100%"));
            setImageList(baseImageArray);
            panresponderEnabled = true;
        }
    }, [currentImageIndex]);

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => panresponderEnabled,

        onPanResponderGrant:()=>{
            position.setOffset(position._value);
            position.setValue(0);
        },  

        onPanResponderMove:(event, gestureState) => {
            if (gestureState.dx < -100){
                panresponderEnabled = false;
            }
            else if (gestureState.dx > 100){
                panresponderEnabled = false;
            }
            else if (panresponderEnabled){
                position.setValue(gestureState.dx);
            }
        },
        
        onPanResponderRelease:(event, gestureState)=>{
            position.flattenOffset();
            if (gestureState.dx < 0 && !panresponderEnabled){
                Animated.timing(position, {
                    toValue: wp(`${(currentImageIndex-1)*100}%`),
                    duration: 500,
                    useNativeDriver:false
                }).start(()=>{
                    panresponderEnabled = true;
                    setCurrentImageIndex(currentImageIndex-1);
                });
            }
            else if (gestureState.dx > 0 && !panresponderEnabled){
                const toValue = currentImageIndex === 0 ? 100 : (currentImageIndex < 0 ? (currentImageIndex+1)*100 : currentImageIndex*100);
                Animated.timing(position, {
                    toValue: wp(`${toValue}%`),
                    duration: 500,
                    useNativeDriver:false 
                }).start(()=>{
                    panresponderEnabled = true;
                    setCurrentImageIndex(currentImageIndex+1);
                });
            }
            else if (panresponderEnabled || gestureState.dx === 0){
                panresponderEnabled = false;
                Animated.timing(position, {
                    toValue: wp(`${(currentImageIndex)*100}%`),
                    duration: 500,
                    useNativeDriver:false
                }).start(()=>{
                    panresponderEnabled = true;
                });
            }
        }
    });


    return (
        <Animated.View 
            style={[styles.container, {transform: [{translateX: position}]}]}
            {...panResponder.panHandlers}>
            {_.map(imageList, (image, index)=>(
                <SliderItem
                    image={{uri:image.url}}
                    key={index}
                />
            ))}
        </Animated.View>
    );
};

ImageSlider.propTypes = {
    images:PropTypes.array, 
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
    },
});

export default ImageSlider;
