import { Label, Input } from 'components/atoms';
import { Wrapper } from './styles';

const FormInput = ({ label, value, onChange }) => (
  <Wrapper>
    <Label>{label}</Label>
    <Input onChangeText={onChange} value={value} />
  </Wrapper>
);

export default FormInput;