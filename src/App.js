import FriendList from './components/FriendList';
import friends from './friends.json';
import Section from './components/FriendList/section';
import Profile from './components/Profile';
import user from './user.json';
import SectionTwo from './components/Profile/section';
export default function App() {
  return (
    <div>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <SectionTwo>
        <Profile user={user} />
      </SectionTwo>
    </div>
  );
}
