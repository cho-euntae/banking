import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/HeaderBox';
import React from 'react';

const home = () => {
    const loggedIn = {firstName: 'Adrian'};

    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently."
                    />
                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                />
                </header>
            </div>
        </section>
    );
};

export default home;