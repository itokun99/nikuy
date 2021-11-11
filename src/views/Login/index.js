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

const Login = () => (
  <>
    <NavbarBack title="Masuk" />
    <BackgroundImage image="/assets/images/img-register.svg" />
    <Wrapper>
      <Container>
        <FormGroup>
          <FormInput
            label="Email"
            name="email"
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
        <Gap height="xs" />
        <FormGroup>
          <Text align="right" size="xxs" link="/lupa-sandi">Lupa kata sandi?</Text>
        </FormGroup>
        <Gap height="xs" />
        <FormGroup>
          <Button title="Masuk" />
        </FormGroup>
        <Gap height="xs" />
        <FormGroup>
          <Text size="xxs">
            Belum punya akun?
            {' '}
            <Text size="xxs" link="/daftar">daftar disini</Text>
          </Text>
        </FormGroup>
      </Container>
    </Wrapper>
  </>
);

export default Login;