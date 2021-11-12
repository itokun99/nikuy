import { memo } from 'react';
import { useRouter } from 'next/router';
import { Button, Gap } from 'components/atoms';
import { routePaths } from 'routes';
import {
  Wrapper, ContentWrapper, Name, Photo
} from './styles';

const CardSignIn = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <ContentWrapper>
        <Photo src="/assets/images/img-create.svg" layout="responsive" width={279} height={210} />
        <Gap height="m" />
        <Name>Yuk gabung dan mulai buat undangan kamu sendiri</Name>
        <Button onPress={() => router.push(routePaths.AUTH)} title="MULAI" />
      </ContentWrapper>
    </Wrapper>
  );
};

export default memo(CardSignIn);