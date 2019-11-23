import React from 'react';
import {gql} from "apollo-boost";
import {ThemeProvider} from "styled-components";
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import Router from './Router';
import { useQuery } from 'react-apollo-hooks';

const QUERY = gql`
  {
    lsLoggedIn @client
  }
`;

export default () => {
  const {data: {lsLoggedIn}} = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles/>
      <Router isLoggedIn={lsLoggedIn} />
    </>
  </ThemeProvider>
  )
}