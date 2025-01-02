import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Laptop() {
  const DashVideo = require("../assets/videos/Dashboard.mp4");

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 }, width: "100%", maxWidth: "100%" }}>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: { xs: "32px", md: "48px", lg: "64px" } }}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            backgroundImage: "linear-gradient(80deg, rgba(214,0,186,1) 0%, rgba(0,212,255,1) 100%)",
            color: "transparent",
            backgroundClip: "text",
          }}
        >
          <Chip label="Introducing Hashira" sx={{ padding: "20px", '& .MuiChip-label': { fontSize: 16 } }} />
          <Typography
            sx={{
              display: "flex",
              width: { sm: "100%", md: "80%", lg: "60%" },
              fontSize: { sm: "24px", md: "32px", lg: "48px" },
              textAlign: "center",
            }}
          >
            Coming soon to your favorite web and mobile platforms.
          </Typography>
        </Stack>
        <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Stack
            sx={{
              position: "relative",
              width: "90vw",
              height: { xs: "250px", sm: "70vh", md: "80vh", lg: "93vh" },
              maxHeight : {  sm: "65vh", md: "90vh", lg: "95vh" },
              minHeight: {sm: "60vh", md: "65vh", lg: "85vh"},
              overflow: "hidden",
            }}
          >
            {/* Video setup */}
            <video
              autoPlay
              loop
              muted
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)", // Centers the video
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensures the video fills the container without stretching
              }}
              src={DashVideo}
            />
            {/* Image (Macbook frame) */}
            <img
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
              src="https://cdn.prod.website-files.com/5ffc51a847b677701a3da52b/6637ddb56a7207c608bd5659_macbook-pro-frame.png"
              alt="MacBook Frame"
            />
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
