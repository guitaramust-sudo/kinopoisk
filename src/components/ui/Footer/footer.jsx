import { Box, Divider, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ marginTop: 'auto' }}>
      <Divider />
      <Stack
        component={'footer'}
        sx={{
          paddingTop: 4,
          pb: 4,
          flexDirection: { sm: 'row' },
          justifyContent: { sm: 'space-between' },
          alignItems: { sm: 'center' },
        }}
      >
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} &laquo;Balbecinema&raquo; 18+
          <br />
          Данный сайт создан исключительно в целях заработать много денег.
        </Typography>

        <Typography color="primary.main" variant="h4">
          Balbecinema
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
