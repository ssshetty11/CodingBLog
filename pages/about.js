import React from 'react';
import styles from '@/styles/contact.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>

      <p>
        Welcome to Shetty's Coding Blog! We're thrilled to have you here. If you're
        passionate about coding, software development, and technology, you've
        come to the right place. Our blog is a space where we explore the
        fascinating world of coding and share our knowledge, insights, and
        experiences with fellow enthusiasts.
      </p>

      <h3>Who We Are</h3>
      <p>
        We are a team of dedicated coders, software developers, and technology
        enthusiasts who are truly passionate about what we do. We believe that
        coding is not just a profession; it's a way of life. Our team is
        committed to providing valuable content that educates, inspires, and
        entertains our readers.
      </p>

      <h3>What We Offer</h3>
      <ul>
        <li>Informative Articles: We cover a wide range of topics...</li>
        <li>Tutorials and Guides: We create step-by-step tutorials and guides...</li>
        <li>Tech Reviews: Curious about the latest gadgets, software, or tools?...</li>
        <li>Coding Challenges: Test your coding skills with our coding challenges...</li>
        <li>Community Engagement: We value our community of readers. Join us...</li>
      </ul>

      <h3>Our Mission</h3>
      <p>
        Our mission is simple: to make coding accessible and enjoyable for
        everyone. We believe that coding is a skill that can open up countless
        opportunities, and we're here to help you along your coding journey.
        Whether you're a student, a professional developer, or someone curious
        about the tech world, we want to empower you with knowledge.
      </p>
    </div>
  );
}
