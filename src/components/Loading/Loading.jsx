import React from "react";

import Layout from "../Layout/Layout";

import '../../styles/loading/loading.scss';

// TODO: Custom spinner.

/*
    In this case, Gatsby's prerender would make my loading page useless. 
    I crafted this component just in case the 3D model requires some seconds to load.
    In that case, I would need this to be functional and to have an outro animation.
*/

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
