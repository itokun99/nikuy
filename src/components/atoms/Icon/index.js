import PropTypes from 'prop-types';
import React from 'react';
import { THEMES } from 'utils';

import icNotif from '../../../../public/assets/icons/ic-notif.svg';
import icHome from '../../../../public/assets/icons/ic-home.svg';
import icHomeLight from '../../../../public/assets/icons/ic-home-light.svg';
import icSearch from '../../../../public/assets/icons/ic-search.svg';
import icSearchLight from '../../../../public/assets/icons/ic-search-light.svg';
import icList from '../../../../public/assets/icons/ic-list.svg';
import icListLight from '../../../../public/assets/icons/ic-list-light.svg';
import icProfile from '../../../../public/assets/icons/ic-profile.svg';
import icProfileLight from '../../../../public/assets/icons/ic-profile-light.svg';
import icClose from '../../../../public/assets/icons/ic-close.svg';
import icGoogle from '../../../../public/assets/icons/ic-google.svg';
import icEmail from '../../../../public/assets/icons/ic-email.svg';
import icBack from '../../../../public/assets/icons/ic-back.svg';
import icLove from '../../../../public/assets/icons/ic-love.svg';
import icEdit from '../../../../public/assets/icons/ic-edit.svg';
import icPaper from '../../../../public/assets/icons/ic-paper.svg';
import icInfo from '../../../../public/assets/icons/ic-info.svg';
import icLogout from '../../../../public/assets/icons/ic-logout.svg';
import icImage from '../../../../public/assets/icons/ic-image.svg';
import icEditLight from '../../../../public/assets/icons/ic-edit-light.svg';
import icHideLight from '../../../../public/assets/icons/ic-hide-light.svg';
import icTrashLight from '../../../../public/assets/icons/ic-trash-light.svg';
import icShowLight from '../../../../public/assets/icons/ic-show-light.svg';

const icons = {
  'ic-home': icHome,
  'ic-home-light': icHomeLight,
  'ic-search': icSearch,
  'ic-search-light': icSearchLight,
  'ic-list': icList,
  'ic-list-light': icListLight,
  'ic-user': icProfile,
  'ic-user-light': icProfileLight,
  'ic-notif': icNotif,
  'ic-close': icClose,
  'ic-google': icGoogle,
  'ic-email': icEmail,
  'ic-back': icBack,
  'ic-love': icLove,
  'ic-edit': icEdit,
  'ic-paper': icPaper,
  'ic-info': icInfo,
  'ic-logout': icLogout,
  'ic-image': icImage,
  'ic-edit-light': icEditLight,
  'ic-hide-light': icHideLight,
  'ic-trash-light': icTrashLight,
  'ic-show-light': icShowLight
};

// Komponen Icon
const Icon = ({
  icon,
  fill,
  size,
  onPress,
  alt,
  title,
  style,
  layout,
  width,
  height,
  transform,
  ...props
}) => {
  if (!icon) {
    return null;
  }

  const getSize = selection => {
    if (width && height) {
      return selection;
    }

    return size;
  };

  const Wrapper = icons[icon];
  return (
    <Wrapper
      onClick={onPress}
      width={getSize(width)}
      height={getSize(height)}
      style={style}
      {...props}
    />
  );
};

Icon.propTypes = {
  fill: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func,
  alt: PropTypes.string,
  layout: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
  transform: PropTypes.bool,

  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};
Icon.defaultProps = {
  onPress: null,
  alt: '',
  title: '',
  layout: 'fixed',
  transform: false,
  fill: THEMES.colors.dark,
  icon: null,
  size: 16,
  style: null,
  width: null,
  height: null
};

export default React.memo(Icon);