import styles from "./MainComponent.module.scss";
import TechGuy from "../../assets/TechGuy.png";
import star2 from "../../assets/star1.png";
import star3 from "../../assets/star22.png";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./Modal";

import { useNavigate } from "react-router-dom";

function MainComponent() {
  const nav = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const [form, setForm] = useState({
    suna: "",
    waya: "",
    email: "",
    topic: "",
  });
  const [selectedOption, setSelectedOption] = useState("");

  const [selectedOption1, setSelectedOption1] = useState("");

  const [term, setTerm] = useState(false);

  const { suna, waya, email, topic } = form;

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  const handleSelectChange1 = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption1(selectedValue);
  };

  const handleTerms = (e) => {
    if (e.target.value !== "") {
      setTerm(true);
    } else {
      setTerm(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (suna === "") {
      toast("please fill in the name field");
      return;
    } else if (waya === "") {
      toast("please fill in the phone field");
      return;
    } else if (email === "") {
      toast("please fill in the email field");
      return;
    } else if (topic === "") {
      toast("please fill in the topic field");
      return;
    } else if (selectedOption === "") {
      toast("please select the category you are in");
      return;
    } else if (selectedOption1 === "") {
      toast("please select the group you are in");
      return;
    } else if (term === false) {
      toast("click on the terms and condition button");
      return;
    } else {
      try {
        const url = "https://backend.getlinked.ai/hackathon/registration";
        const data = {
          email,
          phone_number: waya,
          team_name: suna,
          group_size: selectedOption1,
          project_topic: topic,
          category: selectedOption,
          privacy_poclicy_accepted: "true",
        };
        console.log(data, "datas");
        const response = await axios.post(url, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        setOpenModal(true);
        // Handle a successful response here
        console.log("Response:", response.data);
      } catch (error) {}
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <section className={styles.MainContainer}>
        <Modal openModal={openModal} />

        <img className={`${styles.star1} ${styles.blink3}`} src={star3} />

        <img className={`${styles.star2} ${styles.blink}`} src={star2} />
        <div className={styles.imgDiv}>
          <img className={styles.TechGuy} src={TechGuy} />
        </div>
        <div style={{ position: "relative" }} className={styles.formDiv}>
          <img className={`${styles.star3} ${styles.blink}`} src={star2} />
          <div>
            <h3 style={{ marginLeft: "10%" }}>Register</h3>
            <p style={{ marginLeft: "10%" }}>Be part of this movement!</p>

            <h3 style={{ marginLeft: "10%" }}>Create Your Account</h3>

            <form onSubmit={onSubmit}>
              <div className={styles.formDivider} style={{ marginLeft: "10%" }}>
                <div className={styles.inputDiv}>
                  <label>Team's Name</label>
                  <br></br>
                  <input
                    type="name"
                    placeholder="Enter the name of the group"
                    name="suna"
                    value={suna}
                    onChange={onChange}
                  />
                </div>

                <div className={styles.inputDiv}>
                  <label>Phone</label>
                  <br></br>
                  <input
                    type="name"
                    placeholder="Enter your phone number"
                    name="waya"
                    value={waya}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className={styles.formDivider} style={{ marginLeft: "10%" }}>
                <div className={styles.inputDiv}>
                  <label>Email</label>
                  <br></br>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </div>

                <div className={styles.inputDiv}>
                  <label>Project Topic</label>
                  <br></br>
                  <input
                    type="text"
                    placeholder="Enter your project topic"
                    name="topic"
                    value={topic}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className={styles.formDivider} style={{ marginLeft: "10%" }}>
                <div className={styles.inputDiv}>
                  <label>Category</label>
                  <br></br>
                  <select value={selectedOption} onChange={handleSelectChange}>
                    <option value="">Select your category</option>
                    <option value="1">category1</option>
                    <option value="2">category2</option>
                    <option value="3">category3</option>
                  </select>
                </div>

                <div className={styles.inputDiv}>
                  <label>Group Size</label>
                  <br></br>
                  <select
                    value={selectedOption1}
                    onChange={handleSelectChange1}
                  >
                    <option>Select </option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                  </select>
                </div>
              </div>

              <p style={{ marginLeft: "10%" }}>
                Please review your registration details before submitting
              </p>

              <div
                style={{
                  marginLeft: "10%",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <input
                  type="radio"
                  checked={term === true}
                  onChange={handleTerms}
                />
                <label style={{ marginLeft: "10px" }}>
                  I agreed with the event terms and conditions and privacy
                  policy
                </label>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button className={styles.RegisterBtn}>Register</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainComponent;
