import { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper, InputFile, TagWrapper, ImageIcon, TagTitle, HelperText
} from './styles';

const UploadImage = ({
  name,
  error,
  errorMessage,
  helper,
  onChange,
  tag,
  inputProps,
  image
}) => {
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

  return (
    <>
      <Wrapper image={image}>
        {tag && !image ? (
          <TagWrapper>
            <ImageIcon />
            <TagTitle>+</TagTitle>
          </TagWrapper>
        ) : null}
        <InputFile
          name={name}
          type="file"
          onChange={onChangeInput}
          accept=".jpg,.png,.jpeg,.svg"
          {...inputProps}
        />
      </Wrapper>
      {renderHelperText()}
    </>
  );
};

UploadImage.propTypes = {
  name: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  helper: PropTypes.string,
  tagTitle: PropTypes.string,
  tag: PropTypes.bool,
  image: PropTypes.string
};
UploadImage.defaultProps = {
  tagTitle: '+ Upload Image',
  tag: true,
  name: '',
  error: false,
  errorMessage: '',
  helper: '',
  image: ''
};

export default memo(UploadImage);