import {
  Gap,
  Text,
  Button,
  FormGroup,
  Container,
  FormInput,
  NavbarBack,
  BackgroundImage
} from 'components';
import { Wrapper } from './styles';

const Register = () => (
  <>
    <NavbarBack title="Daftar" />
    <BackgroundImage image="/assets/images/img-register.svg" />
    <Wrapper>
      <Container>
        <FormGroup>
          <FormInput
            label="Nama Lengkap"
            name="name"
            placeholder="Masukan nama kamu"
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="Masukan email kamu"
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            label="Kata Sandi"
            name="password"
            type="password"
            placeholder="Masukan kata sandi kamu"
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            label="Konfirmasi Kata Sandi"
            name="password_confirmation"
            type="password"
            placeholder="Masukan konfirmasi kata sandi"
          />
        </FormGroup>
        <FormGroup>
          <Button title="Buat Akun" />
        </FormGroup>
        <Gap height="xs" />
        <FormGroup>
          <Text size="xxs">
            Sudah punya akun?
            {' '}
            <Text size="xxs" link="/masuk">Masuk disini</Text>
          </Text>
        </FormGroup>
      </Container>
    </Wrapper>
  </>
);

export default Register;