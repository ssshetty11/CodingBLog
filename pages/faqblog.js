import React, { useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';



const FaqBox = () => {
    const data = [
      { id: 1, question: "How to learn coding", answers: "Learning coding involves a step-by-step approach. Begin with a beginner-friendly language like Python. Utilize online resources, coding courses, and tutorials. Practice regularly, solving small problems and gradually tackling more complex challenges. Join coding communities and collaborate with others. Work on personal projects to apply what you've learned. Seek feedback and constantly explore new concepts and technologies. Stay patient, as coding proficiency takes time and persistence." },

    
      { id: 2, question: "How to learn JavaScript", answers: "JavaScript , often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior,[10] often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices. JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[11] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM)." },

      { id: 3, question: "How to learn Flask", answers: "To learn Flask, a Python web framework, start with its official documentation and tutorials. Understand routing, views, and templates. Explore database integration with SQLAlchemy. Build small projects to apply your knowledge. Study popular extensions for added functionality. Join Flask communities and forums for support. Expand your skills by building web applications, and consider online courses for in-depth understanding. Regular practice and project development will help you become proficient in Flask web development." },

      { id: 4, question: "How to learn Next-Js", answers: "To effectively use Next.js, it helps to be familiar with JavaScript, React, and related web development concepts. But JavaScript and React are vast topics. How do you know when you’re ready to learn Next.js? Welcome to the Next.js Foundations course! This beginner-friendly, example-led course will guide you through the prerequisite knowledge for Next.js. You will build a simple project step-by-step; starting with a JavaScript application, then migrating it to React and Next.js. Each section builds on the previous one, so you can choose where to start depending on what you already know." },

      { id: 5, question: "How to be a front-end devloper", answers: "To become a front-end developer, start by learning HTML, CSS, and JavaScript, the core technologies for web development. Practice building web pages and user interfaces. Explore responsive design and frameworks like Bootstrap. Familiarize yourself with version control systems like Git. Gain proficiency in JavaScript libraries and frameworks such as React or Angular. Keep up with industry trends and best practices, and build a portfolio of projects to showcase your skills. Collaboration with designers and understanding user experience is key. Continuous learning is essential as the field evolves rapidly." },

      { id: 6, question: "How to be a back-end developer", answers: "To become a back-end developer, begin by mastering server-side programming languages like Python, Java, or Node.js. Learn to create and manage databases using technologies such as SQL or NoSQL. Understand server deployment and cloud platforms like AWS or Azure. Explore frameworks like Django, Spring, or Express.js. Implement security measures and API development. Practice testing and debugging. Collaborate with front-end developers to ensure smooth data flow. Continuous learning and staying updated with industry standards are essential. Build a portfolio of projects to demonstrate your back-end expertise." }
    ];

    
    return (
      <>
      
        {data.map((item) => (
          <div key={item.id} className={styles.wraperfaq}>
            <ul>
              <li className={styles.faql}>
                <div className={styles.faq}>
                  <Link href={`/blog/${item.id}`}><h3>{item.question}</h3></Link>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </>
    );
  };
  
  const FaqBlog = () => {
    return <FaqBox />;
  };
  
  export default FaqBlog;
  