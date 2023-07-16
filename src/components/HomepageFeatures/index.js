import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Disclaimer ',
    Svg: require('/static/img/undraw_no_data_re_kwbl.svg').default,
    description: (
      <>
Please note that the opinions expressed on this website and my connected social media profiles are solely my own and do not represent the views or positions of my employer. 
mentions of specific assets should not be interpreted as endorsements of any position, product, or service.
Additionally, this Website does not generate any income for me.

<b> <code>I would greatly appericate receiving inforamtion about any errors noticed by the readers so that they may be corrected as soon as possible in future.Contact me on any Social  media means.
  </code>  </b> 
 However, if you would like to support my efforts, 
you can send me a message to buy me a coffee. Thank you for understanding.

      </>
    ),
  },

  {
    title: 'Whoami ',
    Svg: require('/static/img/undraw_hacker_mind_-6-y85.svg').default,
    description: (
      <>Welcome! I am a Network Security Engineer and Implementation Engineer working in the field of Cyber Security. With a passion for all things related to the industry, 
      I created this website as a way to share the information and insights I have gained throughout my career. 
      I hope it serves as a helpful resource for others in the field and as a central  for the references I frequently use.
<h4>
  
       <b> <code>I welcome any questions, comments, or suggestions you may have. I am always open to constructive criticism and appreciate the opportunity to improve and grow in my career. 
      Thank you for visiting my website. </code> </b> </h4>
      </>
    ),
  },
  
  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
