import React from 'react';
import GetTime from '../../src/components/get_time.stories';

export default {
  title: 'time',
};
export const Get_time = () => (
  <GetTime
    current_time="01:42"
    current_date='05.30.2023'
    time_zone="GMT+3"
    sunset_time="21:03"
    time_color="#3f3f58"
  />
)