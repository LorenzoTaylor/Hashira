import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { useRef, useState } from 'react';

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
  const homeVideo = require("../assets/videos/Prism.mov")

  const setPlayBack = () => {
    if (videoRef.current) { // Ensure videoRef.current is not null
      videoRef.current.playbackRate = 0.5;
    }
  };

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
  autoPlay muted loop
  onCanPlay={() => setPlayBack()}
/>

        <Stack
          spacing={3}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' }, zIndex:"10", paddingTop: "10%", height: "100vh" }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              color: "white",
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
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
          <Typography
            sx={{
              textAlign: 'center',
              width: { sm: '100%', md: '80%' },
              color: "white"
            }}
          >
            Hashira is a gamified finance app designed to help you reach your 
            savings and investment goals. By setting and achieving financial milestones, 
            you can track their progress, gain rewards, and level up in your personal financial journey.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: '350px' } }}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              fullWidth
              slotProps={{
                htmlInput: {
                  autoComplete: 'off',
                  'aria-label': 'Enter your email address',
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: 'fit-content' }}
            >
              Start now
            </Button>
          </Stack>
          <Typography
            variant="caption"
            color="white"
            sx={{ textAlign: 'center' }}
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="white">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
