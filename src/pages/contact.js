import React from 'react';
import Layout from '../components/layout.jsx';
import SEO from '../components/seo.js';
import ContactForm from '../components/ContactForm.js';

const Contact = () => (
    <Layout>
        <SEO title='Dru Heller Contact page'/>
        <div>
            {/* <h1>Contact Dru</h1> */}
            <h5 align='center'>
							Hi! I would love to hear from you. Please feel free to send me a message!
						</h5>
            {/* <a href="mailto:druheller@gmail.com">druheller@gmail.com</a> */}
        </div>
				< ContactForm />
    </Layout>
)

export default Contact;