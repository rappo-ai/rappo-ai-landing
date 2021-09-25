/** @jsx jsx */
import { jsx, Container, Box, Text, Input, Button } from 'theme-ui';
import Image from 'components/image';

import ChatGraphic from 'assets/landing/chat_graphic.svg';


export default function Register() {
  return (
    <section sx={styles.coreFeature}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={ChatGraphic} alt="Chat Graphic" />
        </Box>
        <Box sx={styles.contentBox}>
          <Text sx={styles.signUpMsg}>
            Signup Now To Get Live Chat For Free
          </Text>
          <Input sx={styles.emailInput} type="email" id="email"
            name="email" placeholder={'Email Address'} />
          <Button variant="primary" aria-label={'Sign Up'} sx={styles.signUp}
            onClick={() => {
              const email = document.getElementById('email').value
              if (!email || !Rappo || !Rappo.sendMessage) {
                return
              }
              Rappo.sendMessage('/subscribe', email, {email: email})
            }}
          >
            {'Sign up for free'}
          </Button>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  coreFeature: {
    // mt: 60,
    mt: [60, 60, 60, 20, 20, 20],
    py: [0, null, null, 2, null, 7],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: ['auto', null, null, '50%'],
      bottom: ['100px', 0, null, 'auto'],
      left: 0,
      background: 'linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)',
      height: [350, 550, '60%'],
      width: '50%',
      zIndex: -1,
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
      transform: ['translateY(0)', null, null, 'translateY(-50%)'],
    },
  },
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: ['column', null, null, 'row'],
    // height: 400,
  },
  thumbnail: {
    display: ['none', null, null, 'block'],
    // pl: [0, 5, 0, null, 7, 95],
    // pr: [0, 5, null, null, null, 75, 95],
    // order: [2, null, null, 0],
    // background: 'red'
  },
  contentBox: {
    // width: ['100%', 450, 550, 350, 500, 570],
    // width: ['100%', 300, 300, 300, 300, 300],
    height: '100%',
    // marginLeft: 60,
    // marginRight: 60,
    flexShrink: 0,
    // background: 'blue',
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    lineHeight: 1.2,
    // ml: 'auto',
    // mr: 'auto',
    width: 320,
  },
  signUpMsg: {
    fontFamily: "'Montserrat', sans-serif",
    // paddingLeft: 30,
    // paddingRight: 30,
    paddingBottom: 20,
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: 700,
    color: 'black',
    fontSize: ['42px', '42px', '42px', '42px', '42px', '42px'],
    // width: 320,
    alignSelf: 'center'
  },
  emailInput: {
    width: '100%',
    marginBottom: 30,
    fontFamily: "'Montserrat', sans-serif"
  },
  signUp: {
    width: '100%',
    marginBottom: '8px',
    // flex: 1,
  }
};
