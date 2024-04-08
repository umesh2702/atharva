    import React from 'react';
    import { ParallaxBanner } from 'react-scroll-parallax';

    const AdvancedBannerTop = () => {
    const background = {
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg',
        translateY: [0, 50],
        opacity: [1, 0.3],
        scale: [1.05, 1],
        shouldAlwaysCompleteAnimation: true
    };

    const headline = {
        translateY: [0, 30],
        scale: [1, 1.05],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
        <div className="inset center">
            <h1 className="headline white">Hello World!</h1>
        </div>
        )
    };

    const foreground = {
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png',
        translateY: [0, 15],
        scale: [1, 1.1],
        shouldAlwaysCompleteAnimation: true
    };

    const gradientOverlay = {
        opacity: [0, 1],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className="gradient inset" />
    };

    return (
        <ParallaxBanner
        layers={[background, headline, foreground, gradientOverlay]}
        className="full"
        />
    );
    };

    export default AdvancedBannerTop;