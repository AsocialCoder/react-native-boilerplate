/* eslint-disable no-undef */
import React from "react";
import {create} from "react-test-renderer";
import ImageSlider from "components/ImageSliderScreen/ImageSlider";

const images = [
    {"url": "https://via.placeholder.com/600x1000/468DBD"},
    {"url": "https://via.placeholder.com/600x1000/2D5C7A"},
    {"url": "https://via.placeholder.com/600x1000/5CBBFA"},
    {"url": "https://via.placeholder.com/600x1000/162C3B"},
    {"url": "https://via.placeholder.com/600x1000/53A8E0"}
];

jest.useFakeTimers();

const tree = create(
    <ImageSlider images={images}/>
);

test("ImageSlider Test", async ()=>{
    expect(tree).toMatchSnapshot();
   
});