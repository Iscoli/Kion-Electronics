import React from "react";
import { useState } from "react";
import styles from "./Main.module.scss";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import linkedel from "../../assets/linkedel.svg";
import star2 from "../../assets/star1.png";
import star1 from "../../assets/star.png";
import star3 from "../../assets/star22.png";
import axios from "axios";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  useNavigate } from "react-router-dom";



function Main() {
   const nav = useNavigate()

  const [form, setForm] = useState({
    firstname: "",
    email: "",
    message: "",
    phone: "",
  });

  const { firstname, message, email, phone } = form;

  const [loading, setLoading] = useState(true);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (firstname === "") {
      toast("please fill in your name");
       setLoading(false);
      return;
    }
    else if (email === "") {
      toast("please fill in your email");
       setLoading(false);
      return;
    } 
    else if (phone === "") {
      toast("please fill in the phone number box");
      setLoading(false);
      return;
    }
    else if (message === "") {
      toast("please fill in th message box");
       setLoading(false);
      return;
    } 
    else {
      try {
        const url = "https://backend.getlinked.ai/hackathon/contact-form";

        const data = {
          email,
          phone_number: phone,
          first_name: firstname,
          message,
        };
        const response = await axios.post(url, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
         toast.success('your message has been sent succefully')

         setForm({
          firstname: '',
          email: '', 
          phone:'',
          message: '',
        })
       
       

        nav('/')
        // Handle a successful response here
        console.log("Response:", response.data);
      } catch (error) {
        toast.error('something went wrong')
        // Handle errors here
        console.error("Error:", error);
      }
    }
  };

  return (
    <section
     style={{position:'relative'}}
    className={styles.MainContainer}>
      <img
      className={`${styles.star1} ${styles.blink}`}
       src={star3}
      />
      <img
      className={`${styles.star2} ${styles.blink2}`}
       src={star2}
      />
      <img
      className={`${styles.star3} ${styles.blink3}`}
       src={star3}
      />
      <img
       className={`${styles.star4} ${styles.blink2}`}
       src={star1}
      />
      <div className={styles.header}>
        <div className={styles.header1}>
          <p
          style={{color:'#D434FE',
          fontSize:'20px',
          marginBottom:'10px'}}
          >Get in touch</p>
          <p
           style={{
           marginBottom:'10px'}}
          >
            Contact <br></br>
            Information
          </p>
          <p
          style={{
          marginBottom:'10px'}}
          >
            27,Alara Street <br></br>
            Yaba 100012 <br></br>
            Lagos State
          </p>
          <p
          style={{
            marginBottom:'10px'}}
          >Call Us : 07067981819</p>
          <p
           style={{
            marginBottom:'10px'}}
          >
            we are open from Monday-Friday <br></br>
            08:00am - 05:00pm
          </p>

          <p>
            <span 
            style={{
             color:'#D434FE'}}
            className={styles.color}>Share on</span>
            <br></br>
            <img className={styles.social} src={facebook} />
            <img className={styles.social} src={twitter} />
            <img className={styles.social} src={instagram} />
            <img className={styles.social} src={linkedel} />
          </p>
        </div>

        <div className={styles.header2}>
          <p>
            Questions or need <br></br>
            assistance? <br></br>
            Let us know about it
          </p>
          <p>Email us below to any question related to our event.</p>
        </div>
      </div>

      <div className={styles.FormContainer}>
        <p className={styles.assistance}>Questions or need assistance?</p>
        <p className={styles.assistance}>Let us know about it!</p>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={firstname}
              name="firstname"
              placeholder="First Name"
              onChange={HandleChange}
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              placeholder="Mail"
              name="email"
              onChange={HandleChange}
            />
          </div>
          <div>
            <input
              type="number"
              value={phone}
              placeholder="Phone Number"
              name="phone"
              onChange={HandleChange}
            />
          </div>
          <div>
            <textarea
              type="text"
              name="message"
              value={message}
              placeholder="Enter your text here..."
              onChange={HandleChange}
            ></textarea>
          </div>

          <div className={styles.btn}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Main;
