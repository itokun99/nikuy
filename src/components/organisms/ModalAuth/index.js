import { memo, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Modal, Button, View, Container, Gap
} from 'components/atoms';

const ModalAuth = () => {
  const router = useRouter();

  const [visible, setVisible] = useState(false);

  const onClickEmail = () => {
    setVisible(false);
    setTimeout(() => {
      router.push('/masuk');
    }, 300);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 100);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Modal backdrop={false} closeButton={false} visible={visible}>
      <View>
        <Container>
          <Button
            color="light"
            withBorder
            borderColor="border"
            radius="xxxxl"
            icon="ic-google"
            title="Masuk dengan Google"
          />
          <Gap height="xs" />
          <Button
            color="light"
            withBorder
            borderColor="border"
            radius="xxxxl"
            icon="ic-email"
            title="Masuk dengan Email"
            onPress={onClickEmail}
          />
        </Container>
        <Gap height="m" />
      </View>
    </Modal>
  );
};

export default memo(ModalAuth);