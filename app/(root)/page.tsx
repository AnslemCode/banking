import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const LoggedIn = {
    firstName: "Anslem",
    lastName: "Obi",
    email: "obianslem14@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={LoggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.25}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={LoggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500.25 }]}
      />
    </section>
  );
};

export default Home;
