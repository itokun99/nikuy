import { memo } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'components/atoms';
import {
  Wrapper, InputFile, TagWrapper, ImageIcon, TagTitle, HelperText
} from './styles';

const UploadImage = ({
  error, errorMessage, helper, name, onChange, tag, inputProps, tagTitle, image
}) => {
  const onChangeInput = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setTimeout(() => {
        if (reader.result) {
          onChange(e, { image: reader.result, file });
        }
      }, 100);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const renderHelperText = () => {
    if (error && errorMessage) {
      return (
        <HelperText error={error}>
          {errorMessage}
        </HelperText>
      );
    }

    if (helper) {
      return (
        <HelperText>
          {HelperText}
        </HelperText>
      );
    }

    return null;
  };

  return (
    <>
      <Wrapper image={image}>
        {tag && (
        <TagWrapper>
          <ImageIcon />
          <TagTitle>{tagTitle}</TagTitle>
        </TagWrapper>
        )}
        <InputFile
          type="file"
          name={name}
          accept=".jpg,.png,.jpeg,.svg"
          onChange={onChangeInput}
          {...inputProps}
        />
      </Wrapper>
      <Container>
        {renderHelperText()}
      </Container>
    </>
  );
};

UploadImage.propTypes = {
  name: PropTypes.string,
  tagTitle: PropTypes.string,
  tag: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  helper: PropTypes.string
};
UploadImage.defaultProps = {
  tagTitle: '+ Upload Image',
  tag: true,
  name: '',
  error: false,
  errorMessage: '',
  helper: ''
};

export default memo(UploadImage);