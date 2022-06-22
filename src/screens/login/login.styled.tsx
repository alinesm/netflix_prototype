import styled from 'styled-components';
import { Grid } from '@mui/material';

export const Wrapper = styled(Grid)`
  min-height:100vh;
  background-color: ${(props) => props.theme.palette.core.secondary};
`;

export const Logo = styled.img`
  width: 100%;
  height: 67px;
  margin-bottom: 100px;
`;
