import { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper, Title, LeftIcon, Subtitle, ContentWrapper
} from './styles';

const ListItem = ({
  title, subtitle, icon, onPress
}) => (
  <Wrapper onPress={onPress}>
    {icon && <LeftIcon icon={icon} />}
    <ContentWrapper>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </ContentWrapper>
  </Wrapper>
);

ListItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func
};
ListItem.defaultProps = {
  title: '',
  subtitle: '',
  icon: '',
  onPress: () => {}
};

export default memo(ListItem);