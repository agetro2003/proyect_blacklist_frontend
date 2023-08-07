import React from "react";
import "./pricing.css"



const Pricing = () => {
    const handleLoginClick = () => {
        window.location.href = "/Login";
    };

    return (
        <div className="wrapper">
            {/* <!-- PRICING-TABLE CONTAINER --> */}
            <div className="pricing-table group">
                <h1 className="heading">
                    Pricing overview
                </h1>
                {/* <!-- PERSONAL --> */}
                <div className="block personal fl">
                    <h2 className="title">Basic</h2>
                    {/* <!-- CONTENT --> */}
                    <div className="content">
                        <p className="price">
                            <sup>$</sup>
                            <span>00</span>
                            <sub>/mo.</sub>
                        </p>
                        <p className="hint">Perfect for freelancers</p>
                    </div>
                    {/* <!-- /CONTENT --> */}
                    {/* <!-- FEATURES --> */}
                    <ul className="features">
                        <li><span className="fontawesome-cog"></span>Access to Services</li>
                        <li><span className="fontawesome-star"></span>10 Request</li>
                        <li><span className="fontawesome-dashboard"></span> # </li>
                        <li><span className="fontawesome-cloud"></span> # </li>
                    </ul>
                    {/* <!-- /FEATURES --> */}
                    {/* <!-- PT-FOOTER --> */}
                    <div className="pt-footer">
                        <button className="cta" onClick={handleLoginClick}>
                            <span className="hover-underline-animation"> Sing In </span>
                            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                            </svg>
                        </button>
                    </div>
                    {/* <!-- /PT-FOOTER --> */}
                </div>
                {/* <!-- /PERSONAL --> */}
                {/* <!-- PROFESSIONAL --> */}
                <div className="block professional fl">
                    <h2 className="title">Standart</h2>
                    {/* <!-- CONTENT --> */}
                    <div className="content">
                        <p className="price">
                            <sup>$</sup>
                            <span>9.99</span>
                            <sub>/mo.</sub>
                        </p>
                        <p className="hint">Suitable for startups</p>
                    </div>
                    {/* <!-- /CONTENT --> */}
                    {/* <!-- FEATURES --> */}
                    <ul className="features">
                        <li><span className="fontawesome-cog"></span>10 WordPress Install</li>
                        <li><span className="fontawesome-star"></span>100,000 visits/mo.</li>
                        <li><span className="fontawesome-dashboard"></span>Unlimited Data Transfer</li>
                        <li><span className="fontawesome-cloud"></span>20GB Local Storage</li>
                    </ul>
                    {/* <!-- /FEATURES --> */}
                    {/* <!-- PT-FOOTER --> */}
                    <div className="pt-footer">
                        <button className="cta" onClick={handleLoginClick}>
                            <span className="hover-underline-animation"> Buy </span>
                            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                            </svg>
                        </button>
                    </div>
                    {/* <!-- /PT-FOOTER --> */}
                </div>
                {/* <!-- /PROFESSIONAL --> */}
                {/* <!-- BUSINESS --> */}
                <div className="block business fl">
                    <h2 className="title">Premium</h2>
                    {/* <!-- CONTENT --> */}
                    <div className="content">
                        <p className="price">
                            <sup>$</sup>
                            <span>19.99</span>
                            <sub>/mo.</sub>
                        </p>
                        <p className="hint">For established business</p>
                    </div>
                    {/* <!-- /CONTENT --> */}

                    {/* <!-- FEATURES --> */}
                    <ul className="features">
                        <li><span className="fontawesome-cog"></span>25 WordPress Install</li>
                        <li><span className="fontawesome-star"></span>400,000 visits/mo.</li>
                        <li><span className="fontawesome-dashboard"></span>Unlimited Data Transfer</li>
                        <li><span className="fontawesome-cloud"></span>30GB Local Storage</li>
                    </ul>
                    {/* <!-- /FEATURES --> */}

                    {/* <!-- PT-FOOTER --> */}
                    <div className="pt-footer">
                        <button className="cta" onClick={handleLoginClick}>
                            <span className="hover-underline-animation"> Buy </span>
                            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                            </svg>
                        </button>
                    </div>
                    {/* <!-- /PT-FOOTER --> */}
                </div>
                {/* <!-- /BUSINESS --> */}
            </div>
            {/* <!-- /PRICING-TABLE --> */}
        </div>
    );
};



export default Pricing