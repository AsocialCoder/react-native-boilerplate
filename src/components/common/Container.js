import React from "react";
import {SafeAreaView, View} from "react-native";
import PropTypes from "prop-types";

const PageContainer = ({children, style}) => {

    const styles = {
        container:{
            flex:1,
            width:"100%",
            backgroundColor:"black",
            flexDirection:"column",
        },
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                ...styles.container, 
                position:"relative", 
                ...style
            }}>
                {children}
            </View>           
        </SafeAreaView>
    );
};

PageContainer.propTypes = {
    children:PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    style:PropTypes.object,
};

export default PageContainer;
