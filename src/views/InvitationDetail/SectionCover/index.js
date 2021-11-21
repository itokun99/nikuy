import { Container, Button } from 'components';
import { Wrapper, ImageWrapper, BottomWrapper } from './styles';

const SectionCover = ({ cover, onOpen, show }) => (
  <Wrapper show={show}>
    <ImageWrapper image={cover}>
      <Container style={{ flex: 1, justifyContent: 'flex-end' }}>
        <BottomWrapper>
          <Button title="Buka Undangan" onPress={onOpen} />
        </BottomWrapper>
      </Container>
    </ImageWrapper>
  </Wrapper>
);

export default SectionCover;