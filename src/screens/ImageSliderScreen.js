/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Container} from "components/common";
import _ from "lodash";
import {useSelector, useDispatch} from "react-redux";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

import {fetchImages} from "actions/imagesActions";
import ImageSlider from "components/ImageSliderScreen/ImageSlider";

const ImageSliderScreen = () => {

    const {images} = useSelector((state) => state.images);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchImages());
    }, []);


    return (
        <Container style={styles.container}>
            {
                !_.isEmpty(images) ?
                    <ImageSlider images={images}/>
                    :
                    <View style={styles.imageContainer}>
                        <Text style={styles.text}>No Images Found.</Text>
                    </View>
                    
            }
        </Container>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black"
    },
    imageContainer:{
        width:"100%",
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        color:"white",
        fontSize:wp("5%")
    },
});

export default ImageSliderScreen;
