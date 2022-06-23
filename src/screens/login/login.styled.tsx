import styled from 'styled-components';
import { Grid } from '@mui/material';

export const Wrapper = styled(Grid)`
  min-height:100vh;  
  background: linear-gradient( 
    rgba(17, 17, 17, 0.8), rgba(20, 20, 20, 1)
  ), url("https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg");
  background-size: cover;
`;

export const Logo = styled.img`
  width: 100%;
  height: 67px;
  margin-bottom: 100px;
`;
