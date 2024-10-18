import React from 'react';
import styles from './styles.module.css';
import Spacer from '@site/src/components/Spacer';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PowerIcon from '@mui/icons-material/Power';
import Typography from '@mui/material/Typography';
import MapIcon from '@mui/icons-material/Map';
import LaptopIcon from '@mui/icons-material/Laptop';
import BotPng from '@site/static/img/bot.png';
import OverviewPng from '@site/static/img/overview.png';
import PerformancePng from '@site/static/img/performance.png';
import { useMediaQuery, useTheme } from '@mui/material';
import Translate from '@docusaurus/Translate';


function CustomizedTimeline() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Timeline position={matches ? "alternate": "right"}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  color="secondary">
            <PowerIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left">
          <img src={OverviewPng} className={styles.svg} />
          <Spacer height={20} />
          <Typography variant="h5" component="span">
          <Translate
            id='site.howItWorks.step1'>
            Define clear employee objectives easily from our templates or bring your own ones
          </Translate>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <MapIcon />
          </TimelineDot>
          <TimelineConnector  sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent data-aos={matches ? "fade-right": "fade-left"}>
          <img src={BotPng} className={styles.svg} />
          <Spacer height={20} />
          <Typography variant="h5" component="span">
            <Translate
              id='site.howItWorks.step2'>
              Let your employees build evidence along the way with our simple chatbot & Social Feed
            </Translate>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <LaptopIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left">
          <img src={PerformancePng} className={styles.svg} />
          <Spacer height={20} />
          <Typography variant="h5" component="span">
            <Translate
              id='site.howItWorks.step3'>
              Have a clear overview of the state of your team and company to take the correct actions at the correct time.
            </Translate>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

const HowItWorksSection: React.FC = () => {
  return (
    <div className={styles.Container} >
      <div className={styles.Content} >
        <div className={styles.HeaderContainer} data-aos="flip-left" data-aos-duration="1000">
          <h3 className={styles.Tagline}><Translate id='site.howItWorks.title'>How it works?</Translate></h3>
          <Spacer height={20} />
        </div>
      </div>

      <CustomizedTimeline/>
    </div>
  );
};

export default HowItWorksSection;
