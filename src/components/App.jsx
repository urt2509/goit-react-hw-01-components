import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';

import { Section } from 'components/Sections/Sections';
import { Container } from 'components/Container/Container';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';

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
        <Container>
          <Statistics title="Upload stats" stats={data} />
        </Container>
      </Section>

      <Section title="Task 3">
        <Container>
          <FriendList friends={friends} />
        </Container>
      </Section>

      <Section title="Task 4">
        <Container></Container>
      </Section>
    </>
  );
};
