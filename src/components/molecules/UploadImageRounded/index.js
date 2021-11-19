import { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper, InputFile, TagWrapper, ImageIcon, TagTitle, HelperText
} from './styles';

const UploadImage = ({
  name, error, errorMessage, helper, onChange, tag, inputProps, image
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
        {tag && !image ? (
          <TagWrapper>
            <ImageIcon />
            <TagTitle>+</TagTitle>
          </TagWrapper>
        ) : null}
        <InputFile name={name} type="file" onChange={onChangeInput} accept=".jpg,.png,.jpeg,.svg" {...inputProps} />
      </Wrapper>
      {renderHelperText()}
    </>
  );
};

UploadImage.propTypes = {
  tagTitle: PropTypes.string,
  tag: PropTypes.bool
};
UploadImage.defaultProps = {
  tagTitle: '+ Upload Image',
  tag: true
};

export default memo(UploadImage);