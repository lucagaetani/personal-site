import {
  Box,
  Container, Typography 
} from '@mui/material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const CenterPage = () => {
  const landingRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);

  useEffect(() => {
    const landingTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: landingRef.current,
        start: 'top 20px',
        end: '+=100%',
        scrub: 1,
      },
    });

    landingTimeline.fromTo(
      landingRef.current,
      { opacity: 1 },
      { opacity: 0, ease: 'power1.out' }
    );

    const project1Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: project1Ref.current,
        start: 'top center',
        end: '+=40%',
        scrub: 1,
      },
    });

    project1Timeline.fromTo(
      project1Ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, ease: 'power1.out' }
    );

    const project2Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: project2Ref.current,
        start: 'top center',
        end: '+=40%',
        scrub: 1,
      },
    });

    project2Timeline.fromTo(
      project2Ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, ease: 'power1.out' }
    );
  }, []);

  return (
    <Container>
      <div ref={landingRef}>
        <Box sx={{ height: "98vh", display: "flex", alignItems: 'center' }}>
          <Box>
            <Typography sx={{ typography: {xs: "h4", md: "h1"} }} fontWeight={"bold"}>
              {"Hi i'm Luca Gaetani"}
            </Typography>
            <Typography sx={{ typography: {xs: "h5", md: "h2"} }}>
              {"I'm a Fullstack & Software Developer"}
            </Typography>
            <Typography sx={{ typography: {xs: "normal", md: "h3"} }}>
              {"Swipe to see my projects (placeholder for now)"}
            </Typography>
          </Box>
        </Box>
      </div>

      <div ref={project1Ref} style={{ height: '98vh', backgroundColor: '#f0f0f0', padding: '50px' }}>
        <Typography variant="h2">
          Project 1
        </Typography>
      </div>

      <div ref={project2Ref} style={{ height: '98vh', backgroundColor: '#e0e0e0', padding: '50px' }}>
        <Typography variant="h2">
          Project 2
        </Typography>
      </div>

      {/* Add more sections for additional projects */}

    </Container>
  );
};

export default CenterPage;
