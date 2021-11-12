import { memo } from 'react';
import { defaultImage } from 'utils';
import { Button } from 'components/atoms';
import {
  Wrapper, Photo, ContentWrapper
} from './styles';

const CardSignIn = () => (
  <Wrapper>
    <Photo src={defaultImage('user')} width={48} height={48} />
    <ContentWrapper>
      <Button title="Masuk" />
    </ContentWrapper>
  </Wrapper>
);

export default memo(CardSignIn);