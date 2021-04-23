import React, { useState } from 'react';
import * as Icon from 'react-feather';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';
import { baseAxios } from '../utils/useAxios';
import Head from 'next/head';
import axios from 'axios';

function Contact({ dataProfile }) {
  const [loading, setLoading] = useState(false);
  const [formdata, setFormdata] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!formdata.first_name) {
      setError(true);
      setMessage('First Name is required');
    } else if (!formdata.last_name) {
      setError(true);
      setMessage('Last Name is required');
    } else if (!formdata.email) {
      setError(true);
      setMessage('Email is required');
    } else if (!formdata.phone) {
      setError(true);
      setMessage('Phone is required');
    } else if (!formdata.message) {
      setError(true);
      setMessage('Message is required');
    } else {
      try {
        setLoading(true);
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/message`, formdata);
        setError(false);
        setMessage('You message has been sent!!!');
        setFormdata({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          message: '',
        });
        setLoading(false);
      } catch (error) {
        setError(true);
        setMessage('Something Wrong');
        setLoading(false);
      }
    }
  };
  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const numberFormatter = (number) => {
    const phnNumber = number.substring(1);
    const whatsapp = `https://api.whatsapp.com/send?phone=62${phnNumber}&text=Hai!`;
    return whatsapp;
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <Layout data={dataProfile.data}>
      <Head>
        <title>Granite Bagas - Contact</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Contact Granite Bagas" />
        <meta property="og:title" content="Contact Page of Granite Bagas Site" />
        <meta property="og:description" content="Contact Granite Bagas" />
        <meta property="og:image" content="http://api.granitebps.com/images/gbps.png" />
        <meta property="og:url" content="https://granitebps.site" />
        <meta property="og:site_name" content="Granite Bagas" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Contact Page of Granite Bagas Site" />
        <meta name="twitter:description" content="Contact Granite Bagas" />
        <meta name="twitter:image" content="http://api.granitebps.com/images/gbps.png" />
        <meta name="twitter:site" content="@granitbps" />
        <meta name="twitter:creator" content="@granitbps" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Contact Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-contact-formwrapper">
                <h4>Get In Touch</h4>
                <form action="#" className="mi-form mi-contact-form" onSubmit={submitHandler}>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-first-name">Enter your first name*</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="first_name"
                      id="contact-form-first-name"
                      value={formdata.first_name}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-last-name">Enter your last name*</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="last_name"
                      id="contact-form-last-name"
                      value={formdata.last_name}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-email">Enter your email*</label>
                    <input
                      onChange={handleChange}
                      type="email"
                      name="email"
                      id="contact-form-email"
                      value={formdata.email}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-phone">Enter your phone*</label>
                    <input
                      onChange={handleChange}
                      type="number"
                      name="phone"
                      id="contact-form-phone"
                      value={formdata.phone}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-message">Enter your Message*</label>
                    <textarea
                      onChange={handleChange}
                      name="message"
                      id="contact-form-message"
                      cols="30"
                      rows="6"
                      value={formdata.message}></textarea>
                  </div>
                  <div className="mi-form-field">
                    <button className="mi-button" type="submit" disabled={loading}>
                      {loading && (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"></span>
                      )}{' '}
                      Send Mail
                    </button>
                  </div>
                </form>
                {handleAlerts()}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-contact-info">
                <div className="mi-contact-infoblock">
                  <span className="mi-contact-infoblock-icon">
                    <Icon.Phone />
                  </span>
                  <div className="mi-contact-infoblock-content">
                    <h6>Phone / WhatsApp</h6>
                    <p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={numberFormatter(dataProfile.data.profile.phone)}>
                        {dataProfile.data.profile.phone}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mi-contact-infoblock">
                  <span className="mi-contact-infoblock-icon">
                    <Icon.Mail />
                  </span>
                  <div className="mi-contact-infoblock-content">
                    <h6>Email</h6>
                    <p>
                      <a href={`mailto:${dataProfile.data.email}`}>{dataProfile.data.email}</a>
                    </p>
                  </div>
                </div>
                <div className="mi-contact-infoblock">
                  <span className="mi-contact-infoblock-icon">
                    <Icon.MapPin />
                  </span>
                  <div className="mi-contact-infoblock-content">
                    <h6>Address</h6>
                    <p>{dataProfile.data.profile.address}</p>
                  </div>
                </div>
                <div className="mi-contact-infoblock">
                  <span className="mi-contact-infoblock-icon">
                    <Icon.ThumbsUp />
                  </span>
                  <div className="mi-contact-infoblock-content">
                    <h6>Supoort Me</h6>
                    <p>
                      <a href="https://my.domainesia.com/ref.php?u=4419">Domainesia</a>
                    </p>
                    <p>
                      <a href="https://m.do.co/c/c75b7fdabb0c">Digital Ocean</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { data: dataProfile } = await baseAxios.get('profile');

  return { props: { dataProfile: dataProfile } };
}

export default Contact;
