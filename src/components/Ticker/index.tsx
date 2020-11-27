import React from 'react';
import ScriptTag from 'react-script-tag';

const Ticker = (
    <>
        <ScriptTag type="text/javascript" src="https://files.coinmarketcap.com/static/widget/coinMarquee.js"/>
        <div id="coinmarketcap-widget-marquee" coins="4943,4687,3408,825" currency="USD" theme="dark" transparent="true" show-symbol-logo="true"/>
    </>
);