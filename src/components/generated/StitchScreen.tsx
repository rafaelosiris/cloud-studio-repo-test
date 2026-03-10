import React, { useState, useEffect } from 'react';
import { TestSuiteDashboard, fetchRandomProfileServerSide } from '@escala/plugin-test-suite';

export function StitchScreen() {
  const [activeView, setActiveView] = useState<'home' | 'deposit' | 'withdraw' | 'transfer' | 'test-suite' | 'cards' | 'activity'>('home');
  const [totalBalance, setTotalBalance] = useState<number | null>(null);
  const [isLoadingBalance, setIsLoadingBalance] = useState<boolean>(true);
  const [activeSavings, setActiveSavings] = useState<number | null>(null);
  const [isLoadingSavings, setIsLoadingSavings] = useState<boolean>(true);
  const [recentActivityAmount, setRecentActivityAmount] = useState<number | null>(null);
  const [isLoadingActivity, setIsLoadingActivity] = useState<boolean>(true);
  const [cardBalance, setCardBalance] = useState<number | null>(null);
  const [isLoadingCardBalance, setIsLoadingCardBalance] = useState<boolean>(true);
  const [lastExpense, setLastExpense] = useState<number | null>(null);
  const [isLoadingLastExpense, setIsLoadingLastExpense] = useState<boolean>(true);
  const [activityViewAmount, setActivityViewAmount] = useState<number | null>(null);
  const [isLoadingActivityView, setIsLoadingActivityView] = useState<boolean>(true);

  useEffect(() => {
    const fetchTotalBalance = async () => {
      setIsLoadingBalance(true);
      try {
        const response = await fetch('https://apiproxydev.escalahq.com/api/proxy/my-wallet-test/Retool/dBNljW/data/4', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-security': 'my-wallet-test',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const balanceValue = data.balance !== undefined ? data.balance : 
                             data.amount !== undefined ? data.amount : 
                             data.total !== undefined ? data.total : 0;

        setTotalBalance(Number(balanceValue));

      } catch (error) {
        console.error('Error al obtener el balance de Retool:', error);
        setTotalBalance(0);
      } finally {
        setIsLoadingBalance(false);
      }
    };

    const fetchActiveSavings = async () => {
      setIsLoadingSavings(true);
      try {
        const response = await fetch('https://apiproxydev.escalahq.com/api/proxy/my-wallet-test/Retool/dBNljW/data/5', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-security': 'my-wallet-test',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const savingsValue = data.balance !== undefined ? data.balance : 
                             data.amount !== undefined ? data.amount : 
                             data.total !== undefined ? data.total : 0;

        setActiveSavings(Number(savingsValue));

      } catch (error) {
        console.error('Error al obtener active savings de Retool:', error);
        setActiveSavings(0);
      } finally {
        setIsLoadingSavings(false);
      }
    };

    const fetchRecentActivity = async () => {
      setIsLoadingActivity(true);
      try {
        const response = await fetch('https://apiproxydev.escalahq.com/api/proxy/my-wallet-test/Retool/dBNljW/data/6', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-security': 'my-wallet-test',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const activityValue = data.balance !== undefined ? data.balance : 
                              data.amount !== undefined ? data.amount : 
                              data.total !== undefined ? data.total : 0;

        setRecentActivityAmount(Number(activityValue));

      } catch (error) {
        console.error('Error al obtener activity de Retool:', error);
        setRecentActivityAmount(0);
      } finally {
        setIsLoadingActivity(false);
      }
    };

    const fetchCardBalance = async () => {
      setIsLoadingCardBalance(true);
      try {
        const response = await fetch('https://apiproxydev.escalahq.com/api/proxy/my-wallet-test/Retool/dBNljW/data/7', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-security': 'my-wallet-test',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const cardValue = data.balance !== undefined ? data.balance : 
                          data.amount !== undefined ? data.amount : 
                          data.total !== undefined ? data.total : 0;

        setCardBalance(Number(cardValue));

      } catch (error) {
        console.error('Error al obtener card balance de Retool:', error);
        setCardBalance(0);
      } finally {
        setIsLoadingCardBalance(false);
      }
    };

    const fetchLastExpense = async () => {
      setIsLoadingLastExpense(true);
      try {
        const response = await fetch('https://apiproxydev.escalahq.com/api/proxy/my-wallet-test/Retool/dBNljW/data/8', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-security': 'my-wallet-test',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const expenseValue = data.balance !== undefined ? data.balance : 
                             data.amount !== undefined ? data.amount : 
                             data.total !== undefined ? data.total : 0;

        setLastExpense(Number(expenseValue));

      } catch (error) {
        console.error('Error al obtener last expense de Retool:', error);
        setLastExpense(0);
      } finally {
        setIsLoadingLastExpense(false);
      }
    };

    const fetchActivityViewAmount = async () => {
      setIsLoadingActivityView(true);
      try {
        const response = await fetch('https://apiproxydev.escalahq.com/api/proxy/my-wallet-test/Retool/dBNljW/data/9', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-security': 'my-wallet-test',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const amountValue = data.balance !== undefined ? data.balance : 
                            data.amount !== undefined ? data.amount : 
                            data.total !== undefined ? data.total : 0;

        setActivityViewAmount(Number(amountValue));

      } catch (error) {
        console.error('Error al obtener activity view amount de Retool:', error);
        setActivityViewAmount(0);
      } finally {
        setIsLoadingActivityView(false);
      }
    };

    fetchTotalBalance();
    fetchActiveSavings();
    fetchRecentActivity();
    fetchCardBalance();
    fetchLastExpense();
    fetchActivityViewAmount();
  }, []);

  const renderView = () => {
    switch (activeView) {
      case 'deposit':
        return (
          <div className="flex flex-col h-full px-6 py-4">
            <div className="flex items-center mb-8">
              <button onClick={() => setActiveView('home')} className="text-white mr-4">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <h2 className="text-xl font-bold">Deposit Funds</h2>
            </div>
            <div className="glass p-6 rounded-xl space-y-4">
              <p className="text-sm text-slate-400">Enter amount to deposit</p>
              <input type="number" placeholder="$0.00" className="w-full bg-transparent text-4xl font-bold outline-none border-b border-slate-700 pb-2" />
              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold mt-6">Confirm Deposit</button>
            </div>
          </div>
        );
      case 'withdraw':
        return (
          <div className="flex flex-col h-full px-6 py-4">
            <div className="flex items-center mb-8">
              <button onClick={() => setActiveView('home')} className="text-white mr-4">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <h2 className="text-xl font-bold">Withdraw Funds</h2>
            </div>
            <div className="glass p-6 rounded-xl space-y-4">
              <p className="text-sm text-slate-400">Enter amount to withdraw</p>
              <input type="number" placeholder="$0.00" className="w-full bg-transparent text-4xl font-bold outline-none border-b border-slate-700 pb-2" />
              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold mt-6">Confirm Withdraw</button>
            </div>
          </div>
        );
      case 'transfer':
        return (
          <div className="flex flex-col h-full px-6 py-4">
            <div className="flex items-center mb-8">
              <button onClick={() => setActiveView('home')} className="text-white mr-4">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <h2 className="text-xl font-bold">Transfer Funds</h2>
            </div>
            <div className="glass p-6 rounded-xl space-y-4">
              <p className="text-sm text-slate-400">Recipient</p>
              <input type="text" placeholder="Email or Phone" className="w-full bg-slate-800/50 p-3 rounded-lg outline-none border border-slate-700 mb-4" />
              <p className="text-sm text-slate-400">Amount</p>
              <input type="number" placeholder="$0.00" className="w-full bg-transparent text-4xl font-bold outline-none border-b border-slate-700 pb-2" />
              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold mt-6">Send Transfer</button>
            </div>
          </div>
        );
      case 'test-suite':
        return (
          <div className="flex flex-col h-full px-6 py-4">
            <div className="flex items-center mb-8">
              <button onClick={() => setActiveView('home')} className="text-white mr-4">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <h2 className="text-xl font-bold">Test Suite</h2>
            </div>
            <div className="glass p-6 rounded-xl space-y-4">
              <TestSuiteDashboard 
                userId='admin' 
                onGenerateProfile={() => fetchRandomProfileServerSide()} 
              />
            </div>
          </div>
        );
      case 'cards':
        return (
          <div className="flex flex-col h-full px-6 py-4 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">My Cards</h2>
              <button className="size-10 bg-slate-800/50 rounded-full flex items-center justify-center border border-slate-700/50">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            
            <div className="relative aspect-[1.58/1] w-full rounded-2xl p-6 overflow-hidden shadow-2xl group transition-transform active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/40"></div>
              <div className="absolute top-0 right-0 w-full h-full bg-[url()] opacity-20"></div>
              <div className="relative h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Premium Titanium</span>
                    <span className="text-lg font-bold italic">my-wallet</span>
                  </div>
                  <div className="size-10 bg-white/10 rounded-lg flex items-center justify-center overflow-hidden border border-white/10">
                    <span className="material-symbols-outlined text-white/40">contactless</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-xl font-display font-medium tracking-[0.25em] text-white">4532 8840 2291 0048</p>
                  <div className="flex justify-between items-end">
                    <div className="flex gap-6">
                      <div className="flex flex-col">
                        <span className="text-[8px] uppercase text-slate-400">Card Holder</span>
                        <span className="text-xs font-bold uppercase tracking-wider">Alex Johnston</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[8px] uppercase text-slate-400">Expires</span>
                        <span className="text-xs font-bold">09/28</span>
                      </div>
                    </div>
                    <div className="w-14">
                      <img alt="Visa Logo" className="w-full opacity-90 brightness-0 invert" data-alt="Official white Visa card network logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1024px-Visa_Inc._logo.svg.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6 shadow-2xl mt-6">
              <p className="text-slate-400 text-sm font-medium mb-1">Card Balance</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight">{isLoadingCardBalance ? '...' : `$${cardBalance?.toFixed(2)}`}</span>
              </div>
              <div className="mt-6 flex gap-4">
                <button className="flex-1 bg-primary/20 text-primary py-3 rounded-lg font-bold text-sm border border-primary/30">Freeze Card</button>
                <button className="flex-1 bg-slate-800 text-white py-3 rounded-lg font-bold text-sm border border-slate-700">Settings</button>
              </div>
            </div>

            <div className="glass rounded-xl p-6 shadow-2xl mt-6">
              <p className="text-slate-400 text-sm font-medium mb-1">Último Gasto</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight text-red-400">{isLoadingLastExpense ? '...' : `-$${lastExpense?.toFixed(2)}`}</span>
              </div>
            </div>
          </div>
        );
      case 'activity':
        return (
          <div className="flex flex-col h-full px-6 py-4 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">All Activity</h2>
              <button className="size-10 bg-slate-800/50 rounded-full flex items-center justify-center border border-slate-700/50">
                <span className="material-symbols-outlined">filter_list</span>
              </button>
            </div>

            <div className="space-y-4">
              <div className="glass rounded-xl p-6 shadow-2xl">
                <p className="text-slate-400 text-sm font-medium mb-1">Total Activity Amount</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {isLoadingActivityView ? '...' : `$${activityViewAmount?.toFixed(2)}`}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pb-8">
                <div className="flex items-center gap-4 glass p-3 rounded-lg">
                  <div className="size-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <span className="material-symbols-outlined text-slate-100 text-[20px]">shopping_bag</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">Apple Store</p>
                    <p className="text-[10px] text-slate-400">Electronics • 2h ago</p>
                  </div>
                  <span className="text-sm font-bold text-slate-100">-$999.00</span>
                </div>
                <div className="flex items-center gap-4 glass p-3 rounded-lg">
                  <div className="size-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-emerald-500 text-[20px]">account_balance_wallet</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">Salary Deposit</p>
                    <p className="text-[10px] text-slate-400">Income • Yesterday</p>
                  </div>
                  <span className="text-sm font-bold text-emerald-400">+$4,200.00</span>
                </div>
                <div className="flex items-center gap-4 glass p-3 rounded-lg">
                  <div className="size-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <span className="material-symbols-outlined text-slate-100 text-[20px]">restaurant</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">Starbucks</p>
                    <p className="text-[10px] text-slate-400">Food & Drink • 2 days ago</p>
                  </div>
                  <span className="text-sm font-bold text-slate-100">-$12.50</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <>
            <header className="flex items-center px-6 py-4 justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 shrink-0 overflow-hidden rounded-full border-2 border-primary/30 bg-slate-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-400">person</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-medium">Welcome back,</span>
                  <h1 className="text-lg font-bold leading-tight tracking-tight">my-wallet-test</h1>
                </div>
              </div>
              <button className="flex size-11 items-center justify-center rounded-full bg-slate-800/50 text-slate-100 border border-slate-700/50">
                <span className="material-symbols-outlined text-[24px]">notifications</span>
              </button>
            </header>
            <main className="px-6 space-y-6">
              <section className="relative overflow-hidden glass rounded-xl p-6 shadow-2xl">
                <div className="absolute -top-12 -right-12 size-40 bg-primary/20 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 size-32 bg-indigo-600/10 blur-2xl rounded-full"></div>
                <div className="relative z-10">
                  <p className="text-slate-400 text-sm font-medium mb-1">Total Balance</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold tracking-tight">{isLoadingBalance ? '...' : `$${totalBalance?.toFixed(2)}`}</span>
                    <span className="text-emerald-400 text-sm font-bold flex items-center">
                      <span className="material-symbols-outlined text-[16px]">trending_up</span>
                      2.4%
                    </span>
                  </div>
                  <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex flex-col">
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Active Savings</p>
                      <p className="text-sm font-semibold">{isLoadingSavings ? '...' : `$${activeSavings?.toFixed(2)}`}</p>
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-xs font-bold transition-all active:scale-95 min-h-[44px] flex items-center">
                      Analytics
                    </button>
                  </div>
                </div>
              </section>
              <section className="grid grid-cols-4 gap-4">
                <button onClick={() => setActiveView('deposit')} className="flex flex-col items-center justify-center gap-2 glass rounded-lg py-4 transition-all active:scale-95 min-h-[44px]">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <span className="material-symbols-outlined">south</span>
                  </div>
                  <span className="text-xs font-bold">Deposit</span>
                </button>
                <button onClick={() => setActiveView('withdraw')} className="flex flex-col items-center justify-center gap-2 glass rounded-lg py-4 transition-all active:scale-95 min-h-[44px]">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <span className="material-symbols-outlined">north</span>
                  </div>
                  <span className="text-xs font-bold">Withdraw</span>
                </button>
                <button onClick={() => setActiveView('transfer')} className="flex flex-col items-center justify-center gap-2 glass rounded-lg py-4 transition-all active:scale-95 min-h-[44px]">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <span className="material-symbols-outlined">sync_alt</span>
                  </div>
                  <span className="text-xs font-bold">Transfer</span>
                </button>
                <button onClick={() => setActiveView('test-suite')} className="flex flex-col items-center justify-center gap-2 glass rounded-lg py-4 transition-all active:scale-95 min-h-[44px]">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <span className="material-symbols-outlined">science</span>
                  </div>
                  <span className="text-xs font-bold">Testing</span>
                </button>
              </section>
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold tracking-tight">Your Visa Card</h3>
                  <button onClick={() => setActiveView('cards')} className="text-primary text-sm font-bold">Manage</button>
                </div>
                <div className="relative aspect-[1.58/1] w-full rounded-2xl p-6 overflow-hidden shadow-2xl group transition-transform active:scale-95" onClick={() => setActiveView('cards')}>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/40"></div>
                  <div className="absolute top-0 right-0 w-full h-full bg-[url()] opacity-20"></div>
                  <div className="relative h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Premium Titanium</span>
                        <span className="text-lg font-bold italic">my-wallet</span>
                      </div>
                      <div className="size-10 bg-white/10 rounded-lg flex items-center justify-center overflow-hidden border border-white/10">
                        <span className="material-symbols-outlined text-white/40">contactless</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-xl font-display font-medium tracking-[0.25em] text-white">4532 8840 2291 0048</p>
                      <div className="flex justify-between items-end">
                        <div className="flex gap-6">
                          <div className="flex flex-col">
                            <span className="text-[8px] uppercase text-slate-400">Card Holder</span>
                            <span className="text-xs font-bold uppercase tracking-wider">Alex Johnston</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[8px] uppercase text-slate-400">Expires</span>
                            <span className="text-xs font-bold">09/28</span>
                          </div>
                        </div>
                        <div className="w-14">
                          <img alt="Visa Logo" className="w-full opacity-90 brightness-0 invert" data-alt="Official white Visa card network logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1024px-Visa_Inc._logo.svg.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold tracking-tight">Recent Activity</h3>
                  <button onClick={() => setActiveView('activity')} className="text-slate-400 text-xs font-bold">View All</button>
                </div>
                <div className="space-y-3 pb-8">
                  <div className="flex items-center gap-4 glass p-3 rounded-lg">
                    <div className="size-10 rounded-full bg-slate-800 flex items-center justify-center">
                      <span className="material-symbols-outlined text-slate-100 text-[20px]">shopping_bag</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold">Apple Store</p>
                      <p className="text-[10px] text-slate-400">Electronics • 2h ago</p>
                    </div>
                    <span className="text-sm font-bold text-slate-100">
                      {isLoadingActivity ? '...' : `-$${recentActivityAmount?.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 glass p-3 rounded-lg">
                    <div className="size-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-emerald-500 text-[20px]">account_balance_wallet</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold">Salary Deposit</p>
                      <p className="text-[10px] text-slate-400">Income • Yesterday</p>
                    </div>
                    <span className="text-sm font-bold text-emerald-400">
                      {isLoadingActivity ? '...' : `+$${recentActivityAmount?.toFixed(2)}`}
                    </span>
                  </div>
                </div>
              </section>
            </main>
          </>
        );
    }
  };

  return (
    <div className="stitch-root">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden pt-12 pb-24">
        {renderView()}
        
        {(activeView === 'home' || activeView === 'cards' || activeView === 'activity') && (
          <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10 px-6 pb-6 pt-3 flex justify-between items-center rounded-t-lg">
            <a className={`flex flex-col items-center gap-1 ${activeView === 'home' ? 'text-primary' : 'text-slate-500'}`} onClick={(e) => { e.preventDefault(); setActiveView('home'); }} href="#">
              <span className="material-symbols-outlined text-[26px]">home</span>
              <span className="text-[10px] font-bold">Home</span>
            </a>
            <a className={`flex flex-col items-center gap-1 ${activeView === 'cards' ? 'text-primary' : 'text-slate-500'}`} onClick={(e) => { e.preventDefault(); setActiveView('cards'); }} href="#">
              <span className="material-symbols-outlined text-[26px]">credit_card</span>
              <span className="text-[10px] font-bold">Cards</span>
            </a>
            <div className="relative -top-8">
              <button className="size-14 bg-primary text-white rounded-full shadow-lg shadow-primary/40 flex items-center justify-center border-4 border-background-dark active:scale-90 transition-transform">
                <span className="material-symbols-outlined text-[32px]">add</span>
              </button>
            </div>
            <a className={`flex flex-col items-center gap-1 ${activeView === 'activity' ? 'text-primary' : 'text-slate-500'}`} onClick={(e) => { e.preventDefault(); setActiveView('activity'); }} href="#">
              <span className="material-symbols-outlined text-[26px]">history</span>
              <span className="text-[10px] font-bold">Activity</span>
            </a>
            <a className="flex flex-col items-center gap-1 text-slate-500" href="#">
              <span className="material-symbols-outlined text-[26px]">settings</span>
              <span className="text-[10px] font-bold">Settings</span>
            </a>
          </nav>
        )}
      </div>
    </div>
  );
}

export default StitchScreen;