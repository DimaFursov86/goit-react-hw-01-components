import FriendList from './components/FriendList';
import friends from './friends.json';
import Section from './components/FriendList/section';
export default function App() {
  return (
    <div>
      <Section>
        <FriendList friends={friends} />
      </Section>
    </div>
  );
}
