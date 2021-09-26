import FriendList from './components/FriendList';
import friends from './friends.json';
import Section from './components/FriendList/section';
import Profile from './components/Profile';
import user from './user.json';
import SectionTwo from './components/Profile/section';
import Statistics from './components/Statistics';
import statisticalData from './statistical-data.json';
import SectionThree from './components/Statistics/section';
import TransactionHistory from './components/TransactionHistory';
import transactions from './transactions.json';
import SectionFour from './components/TransactionHistory/section';
export default function App() {
  return (
    <div>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <SectionTwo>
        <Profile user={user} />
      </SectionTwo>
      <SectionThree>
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </SectionThree>
      <SectionFour>
        <TransactionHistory transactions={transactions} />
      </SectionFour>
    </div>
  );
}
