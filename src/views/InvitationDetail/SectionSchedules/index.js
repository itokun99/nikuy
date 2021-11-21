import { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Schedule, View, Container, Text, Gap
} from 'components';

const SectionSchedules = ({ schedules }) => (
  <View>
    <Container>
      <Text size="m" bold>Jadwal Acara</Text>
      <Gap height="m" />
      {schedules.map(schedule => (
        <Schedule
          key={schedule.id}
          name={schedule.name}
          location={schedule.location}
          start={schedule.start}
          end={schedule.end}
          date={schedule.date}
        />
      ))}
    </Container>
    <Gap height="l" />
  </View>
);

SectionSchedules.propTypes = {
  schedules: PropTypes.array
};
SectionSchedules.defaultProps = {
  schedules: []
};

export default memo(SectionSchedules);