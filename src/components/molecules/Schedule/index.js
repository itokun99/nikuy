import { memo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Wrapper, Subtitle, Title, Description, Icon, TextWrapper
} from './styles';

const Schedule = ({
  name, start, end, date, location
}) => {
  const subtitle = `${moment(start, 'HH:mm:ss').format('HH:mm')} - ${moment(end, 'HH:mm:ss').format('HH:mm')}, ${moment(date).format('DD MMMM YYYY')}`;

  return (
    <Wrapper>
      <Icon />
      <TextWrapper>
        <Title>{name}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{location}</Description>
      </TextWrapper>
    </Wrapper>
  );
};

Schedule.propTypes = {
  name: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string
};
Schedule.defaultProps = {
  name: '',
  start: moment().format('HH:mm:ss'),
  end: moment().format('HH:mm:ss'),
  date: moment().format('YYYY-MM-DD'),
  location: ''
};

export default memo(Schedule);