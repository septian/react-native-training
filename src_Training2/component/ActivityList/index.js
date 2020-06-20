import React from 'react';
import {
  Text
} from 'react-native';

const ActivityList = ({ActivitiesList}) => {
    return (
      <>
        <Text>
          Activities
        </Text>
        {ActivitiesList.map(data => (
            <Text>
                Activity : {data.activity} | Status : {data.status}
            </Text>
        ))}
      </>
    );
};

export default ActivityList;
