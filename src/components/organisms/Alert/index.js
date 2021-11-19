import {
  Button, Container, Gap, Modal, Text, View
} from 'components/atoms';
import PropTypes from 'prop-types';
import React from 'react';
import { resetAlert } from 'controls';
import { ActionWrapper, Wrapper } from './styles';

const Alert = ({
  visible,
  title,
  message,
  leftButtonTitle,
  rightButtonTitle,
  onPressRightButton,
  onPressLeftButton
}) => {
  const handlePressLeftButton = () => {
    if (onPressLeftButton && typeof onPressLeftButton === 'function') {
      onPressLeftButton();
    }
    resetAlert();
  };

  const handlePressRightButton = () => {
    if (onPressRightButton && typeof onPressRightButton === 'function') {
      onPressRightButton();
    }
    resetAlert();
  };

  return (
    <Modal id="alert" middle visible={visible}>
      <Container size="s" withBorderRadius>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Wrapper>
            <Text bold size="m">
              {title}
            </Text>
            <Gap height="xs" />
            <Text size="xs" lineHeight={20}>{message}</Text>
            <Gap height="s" />
            <ActionWrapper>
              {leftButtonTitle && (
              <>
                <Button
                  onPress={handlePressLeftButton}
                  title={leftButtonTitle}
                  size="xs"
                  color="transparent"
                  titleProps={{ titleColor: 'dark' }}
                />
                <Gap width="xs" />
              </>
              )}
              <Button
                title={rightButtonTitle}
                size="xs"
                color="transparent"
                onPress={handlePressRightButton}
                titleProps={{ titleColor: 'secondary' }}
              />
            </ActionWrapper>
          </Wrapper>
        </View>
      </Container>
    </Modal>
  );
};

Alert.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  leftButtonTitle: PropTypes.string,
  rightButtonTitle: PropTypes.string,
  onPressRightButton: PropTypes.func,
  onPressLeftButton: PropTypes.func
};
Alert.defaultProps = {
  visible: true,
  title: null,
  message: null,
  leftButtonTitle: null,
  rightButtonTitle: 'Ok',
  onPressRightButton: null,
  onPressLeftButton: null
};

export default Alert;