import React, { useEffect, useState } from 'react';
import styles from '@/styles/blog.module.css';
import Link from 'next/link';
import * as fs from 'fs';

export default function Blog(props) {
  const [data, setData] = useState(props.allBlogs);

  return (
    <div>
      <h1 className={styles.btitle}>Popular Blogs</h1>
      <div className={styles.bfaq}>
        {data.map((item) => (
          <div key={item.slug} className={styles.wraperfaq}>
            <ul>
              <li className={styles.faql}>
                <div className={styles.faq}>
                  <Link href={`/${item.slug}`}>
                    <h3>{item.title}</h3>
                    <br />
                    <p>{item.content.substring(0, 100)}....</p>
                    <br />
                    <span>Learn more</span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        ))}
        <p className={styles.lastLine}><b>Yay! You have seen it all</b></p>
      </div>
    </div>
  );
}

export async function getStaticProps(content) {
  let data = await fs.promises.readdir('blogdata');
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8');
    allBlogs.push(JSON.parse(myfile));
  }
  return {
    props: { allBlogs },
  };
}
