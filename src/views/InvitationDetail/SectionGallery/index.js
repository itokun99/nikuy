import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Container,
  Text,
  Gap
} from 'components';
import { GalleryWrapper } from './styles';
import GalleryItem from './GalleryItem';
import GalleryModal from './GalleryModal';

const SectionGallery = ({ galleries }) => {
  const [modal, setModal] = useState(false);
  const [current, setCurrent] = useState(0);

  const openModal = index => {
    setCurrent(index);
    setModal(true);
  };

  return (
    <>
      <View>
        <Container>
          <Text size="m" bold>Galeri</Text>
        </Container>
        <Gap height="m" />

        <GalleryWrapper>
          {galleries.map((gallery, index) => (
            <GalleryItem onPress={() => openModal(index)} key={gallery.id} image={gallery.url} />
          ))}
        </GalleryWrapper>
        <Gap height="xl" />
      </View>

      <GalleryModal
        current={current}
        show={modal}
        galleries={galleries}
        onClose={() => setModal(v => !v)}
      />
    </>
  );
};

SectionGallery.propTypes = {
  galleries: PropTypes.array
};
SectionGallery.defaultProps = {
  galleries: []
};

export default memo(SectionGallery);