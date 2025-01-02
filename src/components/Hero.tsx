import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: theme.palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundImage: `url(${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard.jpg)`,
  backgroundSize: 'cover',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    backgroundImage: `url(${process.env.TEMPLATE_IMAGE_URL || 'https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg)`,
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: theme.palette.grey[700],
  }),
}));

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playbackSpeed, setPlaybackSpeed] = useState(0.3);
  const homeVideo = require("../assets/videos/Prism.mov");
  const [values, setValues] = useState({
    email: "",
  });
  const [message, setMessage] = useState<string>("");
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null);

  const setPlayBack = () => {
    if (videoRef.current) { // Ensure videoRef.current is not null
      videoRef.current.playbackRate = 0.5;
    }
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID as string, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string, 
      values, 
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
    )
      .then(
        () => {
          setMessage("Success! Your email was sent.");
          setMessageType("success");
        },
        (error) => {
          setMessage("Please try again. Email failed to send.");
          setMessageType("error");
        }
      );
  };

  const handleChange = (name: any) => (e: any) => {
    setValues({ ...values, [name]: e.target.value });
  };

  // Hide the message after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timer on unmount or message change
    }
  }, [message]);

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
        height: "105vh"
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <video 
          ref={videoRef} 
          src={homeVideo} 
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            objectFit: "cover",
            zIndex: "1",
            minHeight: "100%",
            width: "100%",
            height: "100vh",
          }} 
          autoPlay muted loop playsInline
          onCanPlay={() => setPlayBack()}
        />

        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', display: "flex", justifyContent: "flex-start", width: { xs: '100%', sm: '70%' }, zIndex:"10", paddingTop: "3%", height: "100vh" }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'column' },
              alignItems: 'center',
              justifyContent: "center",
              textAlign: "center",
              color: "white",
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
              textShadow: "-0.2px -0.2px 0 #000, 0.2px -0.2px 0 #000, -0.2px 0.2px 0 #000, 0.2px 0.2px 0 #000",
            }}
          >
            Gamify your&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'secondary.dark',
              })}
            >
              finance
            </Typography>
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontSize: { xs: '20px', md: '16px' },
              width: { sm: '100%', md: '100%' },
              color: "white",
              textShadow: "-0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000",
              textAlign: "center",
            }}
          >
            Hashira is a gamified finance app 
            designed to help you reach your savings and investment goals. <Typography sx={{display: { xs: 'none', md: 'inline' }, fontSize: { xs: '20px', md: '16px' },}}>By 
            setting and achieving financial milestones, you can track their progress, 
            gain rewards, and level up in your personal financial journey.</Typography>
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: '350px' } }}
          >
            <form onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%" }}>
              <Stack sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, justifyContent: "center", gap: "12px", width: "100%"}}>
                <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
                  Email
                </InputLabel>
                <TextField
                  id="email-hero"
                  name="email"
                  value={values.email}
                  hiddenLabel
                  size="small"
                  type='email'
                  variant="outlined"
                  aria-label="Enter your email address"
                  placeholder="Your email address"
                  fullWidth
                  onChange={handleChange("email")}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  type="submit"
                  sx={{ minWidth: 'fit-content', maxWidth: {xs: "100vw", sm:"max-content"}}}
                >
                  Join The Waitlist
                </Button>
              </Stack>
            </form>
          </Stack>

          <Typography
            variant="caption"
            color="white"
            sx={{ textAlign: 'center', textShadow: "-0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000" }}
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="white">
              Terms & Conditions
            </Link>
            .
          </Typography>
          
          {/* Message Box */}
          {message && (
            <Box
              sx={{
                marginTop: 2,
                padding: 2,
                backgroundColor: 'gray[900]', // Change background color to black
                color: "white",
                textAlign: "center",
                position: 'absolute',
                width:  "fit-content",
                outlineColor: "white",
                borderRadius: `calc(2px + 8px)`,
                backdropFilter: 'blur(24px)',
                border: '0.01px solid',
                borderColor: "white",
              }}
            >
              {message}
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
