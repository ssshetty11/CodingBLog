import { useState } from "react";
import styles from "@/styles/contact.module.css";

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const senddata = {name,phone,email,desc}

    fetch('http://localhost:3000/api/postcontact/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(senddata),
    })
      .then(response => response.json())
      .then(senddata => {
        alert(`Thanks ${name} for contacting us`)
        setDesc('');
        setName('');
        setPhone('');
        setEmail('');
      })
      .catch((error) => { 
        console.error('Error:', error); 
        }); 
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'desc') {
      setDesc(value);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>

      <form onSubmit={handleSubmit} className={styles.outbox}>
        <div className={styles.mb3}>
          <label htmlFor="username" className={styles.label}>
            Coder's Name (Your Name):
          </label>
          <br />
          <input
            type="text" 
            name="name"
            className={styles.formcontrol}
            id="username"
            value={name}
            onChange={handleChange}
            aria-describedby="username"
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="useremail" className={styles.label}>
            Coder's email address:
          </label>
          <br />
          <input
            type="email"
            name="email"
            className={styles.formcontrol}
            id="useremail"
            value={email}
            onChange={handleChange}
            aria-describedby="useremail"
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="usernumber" className={styles.label}>
            Coder's Phone no.:
          </label>
          <br />
          <input
            type="tel" 
            name="phone"
            className={styles.formcontrol}
            id="usernumber"
            value={phone}
            onChange={handleChange}
            aria-describedby="usernumber"
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.label}>
            Comments:
          </label>
          <br />
          <textarea
            type="text"
            name="desc"
            className={styles.formcontrol}
            value={desc}
            onChange={handleChange}
            placeholder="Elaborate your concern"
            id="desc"
            aria-describedby="desc"
          />
        </div>

        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
}

