import { useEffect, useCallback } from 'react';
import { Container, Text, Gap } from 'components';

const SectionDisqus = () => {
  const loadDisqus = useCallback(() => {
    const d = document;
    const s = d.createElement('script');
    s.src = 'https://halonikah.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }, []);

  const loadCounter = useCallback(() => {
    const d = document;
    const s = d.createElement('script');
    s.src = 'https://halonikah.disqus.com/count.js';
    s.setAttribute('id', 'dsq-count-scr');
    (d.head || d.body).appendChild(s);
  }, []);

  useEffect(() => {
    loadDisqus();
    loadCounter();
  }, [loadDisqus, loadCounter]);

  return (
    <Container>
      <Gap height="m" id="ucapan" />
      <Text size="m" bold>Ucapan dan Do'a</Text>
      <Gap height="m" />
      <div id="disqus_thread" />
    </Container>
  );
};

export default SectionDisqus;