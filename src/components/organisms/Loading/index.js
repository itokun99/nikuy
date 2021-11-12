import { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper, Content, LoadingIcon, LoadingTitle
} from './styles';

function Loading({ visible, title }) {
  return (
    <Wrapper visible={visible}>
      <Content>
        <LoadingIcon />
        <LoadingTitle>{title}</LoadingTitle>
      </Content>
    </Wrapper>
  );
}

Loading.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string
};

Loading.defaultProps = {
  visible: false,
  title: 'Loading'
};

export default memo(Loading);