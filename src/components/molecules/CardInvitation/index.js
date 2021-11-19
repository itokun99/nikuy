import { memo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Gap, Button } from 'components/atoms';
import {
  Wrapper, ContentBody, Thumbnail, Title, Date, Location, Footer
} from './styles';

moment.locale('id');

const CardInvitation = ({
  title,
  date,
  location,
  image,
  onEdit,
  onView,
  onDelete
}) => (
  <Wrapper>
    <Thumbnail image={image} />
    <ContentBody>
      <Title>{title}</Title>
      <Date>{moment(date).format('dddd, DD MMMM YYYY')}</Date>
      <Location>{location}</Location>
    </ContentBody>
    <Footer>
      <Button onPress={onEdit} icon="ic-edit-light" size="s" color="primary" title="" />
      <Gap width="xs" />
      <Button onPress={onView} icon="ic-show-light" size="s" color="secondary" title="" />
      <Gap width="xs" />
      <Button onPress={onDelete} icon="ic-trash-light" size="s" color="danger" title="" />
    </Footer>
  </Wrapper>
);

CardInvitation.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string
};
CardInvitation.defaultProps = {
  title: '',
  date: '',
  location: '',
  image: ''
};

export default memo(CardInvitation);