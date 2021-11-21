import {
  Text, Container, Gap, View, RenderHtml
} from 'components';
import { FONTS } from 'utils';

const SectionTop = ({ title, location, description }) => (
  <View>
    <Container>
      <Text bold size="l">{title}</Text>
      <Gap height="xs" />
      <Text size="xs" color="deepGray">{location}</Text>
      <Gap height="m" />
      <RenderHtml style={{ fontSize: FONTS.size.xs }} htmlString={description} size="s" lineHeight={24} />
      <Gap height="xl" />
    </Container>
  </View>
);

export default SectionTop;