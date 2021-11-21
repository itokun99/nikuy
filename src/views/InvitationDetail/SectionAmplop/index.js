import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Container, Text, Gap
} from 'components';
import Image from 'next/image';
import {
  Button, ButtonWrapper, ButtonTitle, ItemWrapper, ContentWrapper, GreetingWrapper
} from './styles';

const SectionAmplop = ({
  show, rekening, ewallets, onClose
}) => {
  const [tab, setTab] = useState('bank');

  const renderHeader = () => (
    <Container>
      <ButtonWrapper>
        <Button onPress={() => setTab('bank')} active={Boolean(tab === 'bank')}>
          <ButtonTitle active={Boolean(tab === 'bank')}>BANK</ButtonTitle>
        </Button>
        <Button onPress={() => setTab('ewallet')} active={Boolean(tab === 'ewallet')}>
          <ButtonTitle active={Boolean(tab === 'ewallet')}>EWALLET</ButtonTitle>
        </Button>
      </ButtonWrapper>
    </Container>
  );

  const renderBody = () => {
    if (tab === 'bank') {
      return (
        <Container>
          {rekening.map(data => (
            <ItemWrapper key={data.id}>
              <Text size="s" bold>Rekening</Text>
              <Gap height="xs" />
              <Text size="s">{data.bank}</Text>
              <Gap height="xs" />
              <Text size="s">{data.owner}</Text>
              <Gap height="xs" />
              <Text size="s">{data.rekening}</Text>
              <Gap height="m" />
            </ItemWrapper>
          ))}
        </Container>
      );
    }

    if (tab === 'ewallet') {
      return (
        <Container>
          {ewallets.map(data => (
            <ItemWrapper key={data.id}>
              <Text size="s" bold>E-Wallet</Text>
              <Gap height="xs" />
              {data.qr && <Image src={data.qr} width={480} height={480} alt="" layout="responsive" />}
              <Gap height="xs" />
              <Text size="s">{data.name}</Text>
              <Gap height="xs" />
              <Text size="s">{data.akun}</Text>
              <Gap height="m" />
            </ItemWrapper>
          ))}
        </Container>
      );
    }

    return null;
  };

  return (
    <Modal
      title="Kirim Amplop"
      visible={show}
      onPressClose={onClose}
    >
      {renderHeader()}
      <Container>
        <GreetingWrapper>
          <Text size="s" color="light">
            Terima kasih, bagi anda yang berkenan memberi kami hadiah :)
          </Text>
        </GreetingWrapper>
      </Container>
      <ContentWrapper>
        {renderBody()}
      </ContentWrapper>
    </Modal>
  );
};

SectionAmplop.propTypes = {
  show: PropTypes.bool,
  rekening: PropTypes.array,
  ewallets: PropTypes.array
};
SectionAmplop.defaultProps = {
  show: false,
  rekening: [],
  ewallets: []
};

export default SectionAmplop;