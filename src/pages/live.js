import React from 'react';
import Layout from '../components/layout.js';
import SEO from '../components/seo.js';
// import plugins from '../components/gatsby-config.js';

const Live = () => (
    <Layout >
        <SEO title='Dru Heller Live page'/>
        <div align="center">
            <h1>Live</h1>
            <p>Gig Calendar Information</p>
            {/* This is a placeholder of a google calendar. We need a Google calendar from Dru. */}
            <iframe title='google-calendar' src="https://calendar.google.com/calendar/embed?src=okdq5ar7qo7tauol6miki94rhs%40group.calendar.google.com&ctz=America%2FDenver" width="800" height="600" frameborder="0" scrolling="no"></iframe>
            
        </div>
        <div>
            This should be the Gatsby Calendar Plugin
        </div>
    </Layout>
)

export default Live;