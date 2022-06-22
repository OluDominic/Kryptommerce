import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext';
import dummyData from '../utils/dummyData';
import { shortenedAddres } from '../utils/shortenedAddress';
import useFetch from '../hooks/useFetch';

const TransactionCard=({ addressTo, addressFrom, timestamp, message, keyword, amount, url})=> {
    const gifUrl = useFetch({ keyword });

    return (
        <div className="transactionCard">
            <div className="card">
                <div className="card-trans">
                    <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
                        <p>
                            From: {shortenedAddres(addressFrom)}
                        </p>
                    </a>
                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
                        <p>
                            To: {shortenedAddres(addressTo)}
                        </p>
                    </a>
                    <p className="trans-amount">Amount: {amount} ETH</p>
                    {message && (
                        <>
                            <br />
                            <p className="trans-message">
                                Message: {message}
                            </p>
                        </>
                    )}
                    
                    {/* <img 
                        src={gifUrl || url}
                        alt="gif"
                        
                    /> */}
                    <div className="trans-timestamp">
                        <p className="timestamp">
                            {timestamp}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Transactions =()=> {
    const { currentAccount } = useContext(TransactionContext)
    return(
        <div className="transactions">
            <div className="trans-sub">
                {currentAccount ? (
                    <h3>Latest Transactions</h3>
                ) : 
                    (<h3>Connect your account to see the latest transactions.</h3>)
                }

                <div className="trans">
                    {dummyData.reverse().map((transaction, i)=> (
                        <TransactionCard key={i} {...transaction} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Transactions;