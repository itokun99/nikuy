import React, { memo } from 'react';
import PropTypes from 'prop-types';
import View from '../View';
import { Wrapper, Content, Bullet } from './styles';
import Text from '../Text';

const List = ({
  title,
  children,
  titleProps,
  withBullet,
  bulletSize,
  bulletColor,
  ...props
}) => {
  const renderContent = () => {
    if (children) {
      return children;
    }

    return (
      <Text size="xs" {...titleProps}>
        {title}
      </Text>
    );
  };

  return (
    <Wrapper {...props}>
      {withBullet ? (
        <Content>
          <Bullet bulletSize={bulletSize} bulletColor={bulletColor} />
          <View>{renderContent()}</View>
        </Content>
      ) : (
        renderContent()
      )}
    </Wrapper>
  );
};

List.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  titleProps: PropTypes.object,
  withBullet: PropTypes.bool,
  bulletSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bulletColor: PropTypes.string
};
List.defaultProps = {
  title: null,
  titleProps: null,
  children: null,
  withBullet: false,
  bulletSize: 'xs',
  bulletColor: 'dark'
};

export default memo(List);