import FriendList from './FriendList';
import friends from '../friends.json';
import Section from './Section/section';
import Profile from './Profile';
import user from '../user.json';
// import SectionTwo from './Profile/section';
import Statistics from './Statistics';
import statisticalData from '../statistical-data.json';
// import SectionThree from './Statistics/section';
import TransactionHistory from './TransactionHistory';
import transactions from '../transactions.json';
// import SectionFour from './TransactionHistory/section';
export default function App() {
  return (
    <div>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <Profile user={user} />
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
