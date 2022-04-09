import React from 'react'
import { useState } from 'react';




const Balance = () => {
    const [walletAddress, setWalletAddress] = useState("");
    async function requestAccount() {
        console.log('requesting account..');
        if(window.ethereum) {
            console.log('detected');
            try {

                const accounts = await window.ethereum.request({method: "eth_requestAccounts",});

              //  console.log(accounts);

                //accounts is an array okay o

                setWalletAddress(accounts[0]);

            }catch (error) {

                console.log('Error connecting..');

            }

            } else {

            alert('metamask not detected');

        }

    }

  const checkEthBalance = async () => {
        let balance = await window.ethereum.request({ method: 'eth_getBalance',
            params: [
                accounts[0]
            ]
    }).catch((err) => {
        console.log(err);
    });
    
    
    balance = parseInt(balance);
    balance = balance / Math.pow(10, 18);
    console.log(balance);
    document.getElementById("balance").innerHTML =checkEthBalance();
    }

   /* async function connectWallet() {
        if(typeof window.ethereum !== 'undefined') {
            await requestAccount();

           // const provider = new ethers.providers.web3Provider(window.ethereum);
          
        } */ 
    
    


  return (
    <div>
    <header className='flex-auto  font-semibold text-slate-900'>
        <button className=' h-10  px-6 font-semibold rounded-md bg-indigo-900 text-white ' onClick={requestAccount }>
            Connect Wallet</button>
        <h3>Wallet Address:   {walletAddress}</h3>

        <h3 id='balance'> Balance: </h3>
    </header>
    </div>
  )
  }

export default Balance
