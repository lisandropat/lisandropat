import React from "react";

import Layout from "../Layout/Layout";

//import Logo from '../../images/pat-white.svg';

import '../../styles/loading/loading.scss';

// TODO: Custom spinner.

const Loading = () => (
    <Layout 
        pageName="loading"
        cursorColor="251, 251, 251"
    >   
        <section>
            <div className="spinner">
                <div className="bounce1" />
                <div className="bounce2" />
                <div className="bounce3" />
            </div>
            <aside>
                <p>spotting a place to park</p>
                <p>turning off the thrusters</p>
                <p>parking the spaceship</p>
            </aside>
        </section>
        {/*<img src={Logo} alt="lisandropat" />*/}
    </Layout>
)

export default Loading
