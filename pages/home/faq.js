import React, { useState } from 'react';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const FaqBox = () => {
  const data = [
    { id: 1, question: "How to learn coding", answers: "Start with beginner-friendly languages like Python or C, practice regularly, use online resources, and collaborate with communities to enhance your skills.",slug: "how-to-learnCoding" },

  
    { id: 2, question: "How to learn JavaScript", answers: "Start with basics, study advanced concepts, practice coding regularly, and build web applications to improve your JavaScript skills.",slug: "how-to-learnJs" },

    { id: 3, question: "How to learn Flask", answers: "Study Flask's official documentation, build projects, explore extensions, and join forums for support in mastering this Python web framework.",slug: "how-to-learnFlask" },

    { id: 4, question: "How to learn Next-Js", answers: "Explore Next.js documentation, build web apps, utilize server rendering, and understand routing for mastering this React framework.",slug: "how-to-learnNext" },

    { id: 5, question: "How to be a front-end devloper", answers: " Learn HTML, CSS, and JavaScript, practice responsive design, master libraries like React, and focus on user experience.",slug: "how-to-be-front-end-developer" },

    { id: 6, question: "How to be a back-end developer", answers: " Learn server-side languages, database management, security, and deployment. Master frameworks like Express.js and Django, and keep up with industry trends. ",slug: "how-to-be-a-back-end-developer"}
  ];

  const [openItem, setOpenItem] = useState(null);

  function handleItemClick(id) {
    setOpenItem(id === openItem ? null : id);
  }

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className={styles.wraperfaq}>
          <ul>
            <li className={styles.faql}>
              <div className={styles.faq} onClick={() => handleItemClick(item.id)}>
                <h3>{item.question}</h3>
                {openItem === item.id && (
                  <div>
                    <p>{item.answers}</p>
                    <br />
                    <div>
                    <Link  className ={styles.lin} href={`/${item.slug}`}>Explore more</Link>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

const Faq = () => {
  return <FaqBox />;
};

export default Faq;







