import PropTypes from 'prop-types';
import React, {
  useEffect, useRef, useState, useCallback
} from 'react';
import { createPortal } from 'react-dom';
import Text from '../Text';
import TouchableOpacity from '../TouchableOpacity';
import Icon from '../Icon';
import {
  Backdrop,
  Background,
  MiddleWrapper,
  ModalHeader,
  Wrapper,
  BackdropAction,
  LineWrapper,
  Line
} from './styled';

const Modal = ({
  id,
  body,
  title,
  middle,
  header,
  footer,
  visible,
  children,
  backdrop,
  renderBody,
  toggleModal,
  closeButton,
  renderHeader,
  onPressClose,
  renderFooter,
  backdropProps,
  onBackdropPress
}) => {
  const [ready, setReady] = useState(false);
  const [allow] = useState(false);
  const idModal = `modal-${id}`;

  const ModalRef = useRef(null);

  useEffect(() => {
    const rootContainer = document.createElement('div');
    rootContainer.setAttribute('id', idModal);
    const root = document.getElementById('__next');
    root.appendChild(rootContainer);
    setReady(true);

    if (!document.getElementById(idModal)) {
      document.body.appendChild(rootContainer);
    }
  }, [idModal]);

  const toggle = useCallback(() => {
    if (toggleModal) toggleModal();
  }, [toggleModal]);

  const handleClickOutside = useCallback(event => {
    if (
      ModalRef?.current
      && !ModalRef?.current?.contains?.(event.target)
      && allow
    ) { toggle(); }
  }, [allow, toggle]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    if (visible) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [visible]);

  const renderHeaderSection = () => {
    if (!header) {
      return null;
    }

    if (renderHeader) {
      return renderHeader;
    }

    if (!closeButton) {
      return (
        <ModalHeader>
          <LineWrapper>
            <Line />
          </LineWrapper>
        </ModalHeader>
      );
    }

    return (
      <ModalHeader>
        <Text size="xl" bold>
          {title}
        </Text>
        {closeButton && (
          <TouchableOpacity onPress={onPressClose}>
            <Icon icon="ic-close" size={32} />
          </TouchableOpacity>
        )}
      </ModalHeader>
    );
  };

  const renderBodySection = () => {
    if (!body) {
      return null;
    }

    if (renderBody) {
      return renderBody;
    }

    return children;
  };

  const renderFooterSection = () => {
    if (!footer) {
      return null;
    }

    if (renderFooter) {
      return renderFooter;
    }

    return null;
  };

  if (!ready) return null;

  if (middle) {
    return (
      <div>
        {document && document.getElementById(idModal) && (
          <div>
            {createPortal(
              <>
                {backdrop && (
                <Backdrop
                  onClick={onBackdropPress}
                  visible={visible}
                  {...backdropProps}
                />
                )}
                <MiddleWrapper visible={visible} className="modal-wrapper" ref={ModalRef}>{children}</MiddleWrapper>
              </>,
              document.getElementById(idModal)
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      {document && document.getElementById(idModal) && (
        <div>
          {createPortal(
            <>
              {backdrop && <Backdrop visible={visible} {...backdropProps} />}
              <Wrapper visible={visible} className="modal-wrapper" ref={ModalRef}>
                <BackdropAction onClick={onBackdropPress} visible={visible} />
                {backdrop && <BackdropAction onClick={onBackdropPress} visible={visible} />}
                <Background>
                  {renderHeaderSection()}
                  {renderBodySection()}
                  {renderFooterSection()}
                </Background>
              </Wrapper>
            </>,
            document.getElementById(idModal)
          )}
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  body: PropTypes.bool,
  visible: PropTypes.bool,
  title: PropTypes.string,
  header: PropTypes.bool,
  middle: PropTypes.bool,
  footer: PropTypes.bool,
  children: PropTypes.any,
  backdrop: PropTypes.bool,
  renderBody: PropTypes.any,
  renderHeader: PropTypes.any,
  renderFooter: PropTypes.any,
  onPressClose: PropTypes.func,
  toggleModal: PropTypes.func,
  closeButton: PropTypes.bool,
  backdropProps: PropTypes.object,
  onBackdropPress: PropTypes.func
};
Modal.defaultProps = {
  id: '',
  children: null,
  visible: false,
  body: true,
  title: null,
  header: true,
  footer: false,
  backdrop: true,
  renderBody: null,
  renderHeader: null,
  renderFooter: null,
  closeButton: true,
  backdropProps: {},
  onBackdropPress: () => {},
  onPressClose: () => {},
  toggleModal: () => {},
  middle: false
};

export default Modal;