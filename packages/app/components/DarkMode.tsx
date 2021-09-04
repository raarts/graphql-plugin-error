import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Switch } from 'react-native';
import { toggleDarkMode } from '../graphql/localFields';

export const QUERY = gql`
  query getDarkMode {
    isDarkMode @client
  }
`;

export function DarkMode(): React.ReactElement {
  const { data } = useQuery(QUERY);

  return <Switch onValueChange={toggleDarkMode} value={data?.isDarkMode} />;
}
