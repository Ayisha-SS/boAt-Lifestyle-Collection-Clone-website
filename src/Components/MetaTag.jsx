import React from 'react'
import {Helmet} from "react-helmet";
// import profileLogo from "../assets/images/og-img.jpeg";


function MetaTag() {
  return (
    <Helmet>
        <title>Collections | clone</title>
        <meta property="og:title" content="Collections"/>
        <meta property="og:image" content="../assets/images/og-img.jpeg"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="628"/>
        <meta name="description" content="Check out the breathtaking collection of Earbuds, Headphones, Earphones &amp; Wireless Speakers with contemporary designs and best features from India's No.1 Earwear Audio Brand - boAt Lifestyle."/>
    </Helmet>
  )
}

export default MetaTag