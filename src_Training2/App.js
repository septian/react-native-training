/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './asset/style';
import Activity from './component/Activity';
import ActivityList from './component/ActivityList';

const App = () => {
  const [activities, setActivities] = useState([]);
  const dataActivities = data => {
    setActivities(activities.concat(data));
  };
  return (
    <View style={styles.container} >
      <Activity dataActivity={dataActivities} />
      <ActivityList ActivitiesList={activities} />
    </View>
  );
};

export default App;
