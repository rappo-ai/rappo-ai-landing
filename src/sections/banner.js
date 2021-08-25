/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Text, Image, Button } from 'theme-ui';
import React, { useState } from 'react';
import { Link } from 'components/link';
import LandingGraphic from 'assets/landing/landing_graphic.png'

import client1 from 'assets/sponsor/paypal.svg';
import client2 from 'assets/sponsor/google.svg';
import client3 from 'assets/sponsor/dropbox.svg';

const data = [
  {
    id: 1,
    path: '#',
    image: client1,
    title: 'paypal',
  },
  {
    id: 2,
    path: '#',
    image: client2,
    title: 'google',
  },
  {
    id: 3,
    path: '#',
    image: client3,
    title: 'dropbox',
  },
];

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" sx={styles.banner.headingText} variant="heroPrimary">
            Instantly Connect with Your Customers
          </Heading>
          <Text as="p" sx={styles.banner.headingSubText} variant="heroSecondary">
            Add Rappo live chat to your website in minutes.
            Chat with your visitors as they browse your website. Boost your sales.
          </Text>
          <Button variant="primary" aria-label={'Get free live chat'}
            className="get_started_button"
            onClick={() => {
              if (!Rappo || !Rappo.widget) {
                return
              }
              Rappo.widget.contentWindow.postMessage('', '*')
            }}
          >
            {'Get free live chat'}
          </Button>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={LandingGraphic} alt="banner" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    // backgroundImage: `url(${BannerBG})`,
    // backgroundRepeat: `no-repeat`,
    // backgroundPosition: 'top left',
    // backgroundSize: 'cover',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['0px', null, null, '60px', null, 10, '80px'],
    // backgroundColor: 'primary',
    container: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexWrap: ['wrap', null, null, 'nowrap'],
    },
    contentBox: {
      width: ['100%', null, '100%', '50%', '50%', '50%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
      // backgroundColor: 'blue'
    },
    imageBox: {
      // display: ['null', null, null, 'block'],
      justifyContent: 'center',
      ml: [-30, null, null, '0px', '0px', '0px', '0px', '0px'],
      // mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-290px'],
      mr: [-30, null, null, '-145px', '-145px', '-145px', '-145px', '-145px'],
      // mt: [0, null, null, '40px', 4, 7, 0],
      // mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      textAlign: 'right',
      // backgroundColor: 'rgba(255,0,0,0.5)',
    },
    headingText: {
      textAlign: ['center', null, null, 'left'],
      fontWeight: 700,
      color: 'black',
      fontSize: ['38px', '52px', '52px', '38px', '52px', '52px'],
      // marginBottom: 24,
    },
    headingSubText: {
      textAlign: ['center', null, null, 'left'],
      fontSize: ['18px', '18px', '21px', '18px', '21px', '21px'],
      fontWeight: 400,
      color: 'black',
    },
  },
  sponsorTitle: {
    color: 'white',
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  sponsorBox: {
    pt: ['35px', null, null, null, null, '45px'],
    flexDirection: ['column', null, 'row'],
    sponsor: {
      display: 'flex',
      alignItems: 'center',
      '> a': {
        mr: [5, null, null, 4, 6],
        display: 'flex',
        '&:last-of-type': {
          mr: 0,
        },
      },
    },
  },
};
