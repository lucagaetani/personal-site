import {
  Box,
  Container, Typography 
} from '@mui/material';
import './CenterPage.css'

const CenterPage = () => {
  return (
    <Container maxWidth="md" sx={{ display:"flex", height: "98vh", alignItems: "center" }}>
      <Box>
        <Typography variant='h2' fontWeight={"bold"}>
          {"Hello, i'm Luca Gaetani"}
        </Typography>
        <Typography variant='h3'>
          {"I'm a fullstack and a software developer"}
        </Typography>
      </Box>
    </Container>
  );
};

export default CenterPage;
