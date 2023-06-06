import user from '../data/user.json';

import { Section } from 'components/Sections/Sections';
import { Container } from 'components/Container/Container';
import { Profile } from 'components/Profile/Profile';

export const App = () => {
  return (
    <>
      <Section title="Task 1">
        <Container>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Container>
      </Section>

      <Section title="Task 2">
        <Container></Container>
      </Section>

      <Section title="Task 3">
        <Container></Container>
      </Section>

      <Section title="Task 4">
        <Container></Container>
      </Section>
    </>
  );
};
