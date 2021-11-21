import { Container, Text, Gap } from 'components';
import Image from 'next/image';

const SectionProtocol = () => (
  <Container>
    <Text size="m" bold>Protokol Kesehatan</Text>
    <Gap height="m" />
    <Image
      src="/assets/images/img-protocol.svg"
      width={480}
      height={480}
      layout="responsive"
      alt="protocol"
      placeholder="blur"
      blurDataURL="/assets/images/img-default.svg"
    />
  </Container>
);

export default SectionProtocol;