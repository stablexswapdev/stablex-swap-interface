import React from 'react';
import {Helmet} from "react-helmet";

const Ticker = props => (
    <div>
    <Helmet>
              <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/coinMarquee.js" />
            </Helmet>
        <div id="coinmarketcap-widget-marquee" coins="4943,4687,3408,825" currency="USD" theme="dark" transparent="true" show-symbol-logo="true"/>
    </div>
);

export default Ticker
