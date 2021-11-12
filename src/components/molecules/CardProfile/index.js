import { memo } from 'react';
import PropTypes from 'prop-types';
import { defaultImage } from 'utils';
import {
  Wrapper, Photo, Name, Subname, ContentWrapper
} from './styles';

const CardProfile = ({ name, subname, image }) => (
  <Wrapper>
    <Photo src={image || defaultImage('user')} width={48} height={48} />
    <ContentWrapper>
      <Name>{name}</Name>
      <Subname>{subname}</Subname>
    </ContentWrapper>
  </Wrapper>
);

CardProfile.propTypes = {
  name: PropTypes.string,
  subname: PropTypes.string,
  image: PropTypes.string
};
CardProfile.defaultProps = {
  name: '',
  subname: '',
  image: ''
};

export default memo(CardProfile);