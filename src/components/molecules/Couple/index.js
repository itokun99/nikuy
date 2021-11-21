import { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper, Photo, Title, TextWrapper, Description
} from './styles';

const Couple = ({
  photo, name, description, position
}) => (
  <Wrapper position={position}>
    {position === 'left' && <Photo src={photo} />}
    <TextWrapper position={position}>
      <Title>{name}</Title>
      <Description>{description}</Description>
    </TextWrapper>
    {position === 'right' && <Photo src={photo} />}
  </Wrapper>
);

Couple.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  position: PropTypes.oneOf(['right', 'left'])
};

Couple.defaultProps = {
  photo: '',
  name: '',
  description: '',
  position: 'left'
};

export default memo(Couple);