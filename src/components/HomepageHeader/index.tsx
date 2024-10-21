import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Spacer from '@site/src/components/Spacer';
import styles from './styles.module.css';
import OpaloImage from '@site/static/img/opalo.png';
import { TypeAnimation } from "react-type-animation";
import Translate, {translate} from '@docusaurus/Translate';

const HeaderView: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const [toTypeWords] = useState([
       translate({message: "In the Cloud", id: "site.homepageHeader.destination1"}), 2500,
       translate({message: "In Markdown", id: "site.homepageHeader.destination2"}), 2500,
    ]);

  return (
    <div
      className={styles.Container}
      style={{ height: 700 }}>
      <div>
        <h1 className={styles.HeaderTitle}>
        <Translate
         id='site.homepageHeader.header1'>
          Your knowledge 
         </Translate> 
         <span className={styles.SeparatorText}><Translate id='site.homepageHeader.header2'> base</Translate></span>
        </h1>
        <Spacer height={10} />
        <TypeAnimation
          className={styles.HeaderTyper}
          sequence={toTypeWords}
          repeat={Infinity}
          />
        <Spacer height={20} />
        <p className={styles.DescriptionText}>{siteConfig.tagline}</p>
        <Spacer height={50} />
        <div className={styles.ButtonContainer}>
          <a className={"button button--primary"} href="#tally-open=n0jV1Q&tally-layout=modal&tally-width=300&tally-hide-title=1&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=0&level=free">
          <Translate id='site.homepageHeader.cta'>Join Beta</Translate>
          </a>
        </div>
      </div>
      <img src={OpaloImage} className={styles.OpaloImage}/>
    </div>
  );
};

export default HeaderView;
