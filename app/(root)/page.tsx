import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'


const Home = () => {
  const loggedIn = { firstName: 'Prerana', lastName:'Raghuwanshi', 
    email: 'preranaraghuwanshi6@gmail.com'
  };
  
  return (
   <section className="home">
     <div className="home-content">
      <header className="home-header">
       
       <HeaderBox
       type="greeting"
       title="Welcome"
       user={loggedIn?.firstName || 'Guest'}
       subtext="Access and manage your account and transactions efficiently."
        
       />
       <TotalBalanceBox
       accounts={[]}
       totalBanks={1}
       totalCurrentBalance={10000}

       />
      </header>

      Recent transactions
     </div>
     <RightSidebar  
     user={loggedIn}
     transactions={[]}
     banks={[{ currentBalance: 123.50}, {
      currentBalance: 500.50
     }]}
     />
   </section>
  )
}

export default Home
