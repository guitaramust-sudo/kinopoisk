import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

import Footer from './components/ui/Footer/footer';
import NavBar from './components/ui/Navbar/navbar';

const Layout = () => {
  return (
    <Container
      fixed
      sx={{
        minWidth: '90vw',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box sx={{ p: 4 }}></Box>
      <NavBar />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
