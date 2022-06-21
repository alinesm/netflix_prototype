import styled from 'styled-components';
import { Grid } from '@mui/material';

export const Wrapper = styled(Grid)`
  min-height:100vh;
  background-color: ${(props) => props.theme.pallete.core.secondary};
  // background: linear-gradient(
  //   to bottom,
  //   rgba(0, 0, 0, 0.8) 0%,
  //   rgba(0, 0, 0, 0.8) 100%
  // ), url("https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg");
  // background-size: cover;
`;

export const Logo = styled.img`
  width: 100%;
  height: 67px;
  margin-bottom: 100px;
`;
