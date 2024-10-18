import React from 'react';
import styles from './styles.module.css';
import Spacer from '@site/src/components/Spacer';
import Translate from '@docusaurus/Translate';

const StraightforwardView: React.FC = () => {
  return (
    <div className={styles.Container} >
      <div className={styles.Content} >
        <div className={styles.HeaderContainer} data-aos="flip-left" data-aos-duration="1000">
          <h3 className={styles.Tagline}><Translate id='site.straightforwardView.question'>Why choose us?</Translate></h3>
          <h1 className={styles.Title}><Translate id='site.straightforwardView.title'>Your Own</Translate></h1>
          <Spacer height={20} />
          <p className={styles.Description}>
            <Translate id='site.straightforwardView.text'>Opalo is free and open source, and we just want you to own your data in your current system.</Translate>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StraightforwardView;
