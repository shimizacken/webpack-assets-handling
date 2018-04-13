import React from 'react';
import Hearts from 'react-svg-loader!../../assets/images/svg/hearts.svg';
import ThreeDots from 'react-svg-loader!../../assets/images/svg/three-dots.svg';
import Grid from 'react-svg-loader!../../assets/images/svg/grid.svg';

const HeartsLoader = (width, height) => (
    <Hearts width={width} height={height} />
);

const ThreeDotsLoader = (width, height) => (
    <ThreeDots width={width} height={height} />
);

const GridLoader = (width, height) => (
    <Grid width={width} height={height} />
);

export {
    HeartsLoader,
    ThreeDotsLoader,
    Grid
};