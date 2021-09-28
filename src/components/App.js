import FriendList from './FriendList';
import friends from '../friends.json';
import Section from './Section/section';
import Profile from './Profile';
import user from '../user.json';
import Statistics from './Statistics';
import statisticalData from '../statistical-data.json';
import TransactionHistory from './TransactionHistory';
import transactions from '../transactions.json';
export default function App() {
  return (
    <div>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </Section>
      <Section>
        <TransactionHistory transactions={transactions} />
      </Section>
    </div>
  );
}
