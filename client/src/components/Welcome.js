import React from 'react';
import { AiFillAlipayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle} from 'react-icons/bs';
import Loader from './Loader';


const Welcome =()=> {

    const Input=({ placeholder, name, type, value, handleChange})=> {
        return (
        <input 
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e)=> handleChange(e, name)}
        className="form-input"
        />
        );
    }

    const connectWalltet=()=> {

    }

    const handleSubmit=()=> {

    }


    return(
        <div className="welcome">
            <div className="welcome-one">
                <div className="welcome-two">
                    <h1>
                        Send crypto <br /> accross the world
                    </h1>
                    <p>Explore the crypto world. Buy and sell
                        cryptocurrencies easily on Kryptommerce.
                    </p>
                    <button type="submit" onClick={connectWalltet}>
                        Connect Wallet
                    </button>
                    <div className="features">
                        <div className="commonStyles" style={{borderTopLeftRadius: '25px'}}>
                            Reliability
                        </div>
                        <div className="commonStyles">
                            Security
                        </div>
                        <div className="commonStyles" style={{borderTopRightRadius: '25px'}}>
                            Ethereun
                        </div>
                        <div className="commonStyles" style={{borderBottomLeftRadius: '25px'}}>
                            Web3.0
                        </div>
                        <div className="commonStyles">
                            Low fees
                        </div>
                        <div className="commonStyles" style={{borderBottomRightRadius: '25px'}}>
                            Blockchain
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-sub">
                        <div className="card-mes">
                            <div className="card-message">
                                <div className="card-message-sub">
                                    <SiEthereum fontSize={21} color="#fff" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#fff"/>
                            </div>
                            <div className="block-add">
                                <p className="add">
                                    Address
                                </p>
                                <p className="add-two">
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="form">
                        <Input 
                        placeholder="Address To" 
                        name="addressTo" 
                        type="text"
                        handleChange={()=> {}}
                        />
                        <Input 
                        placeholder="Amount (ETH)" 
                        name="amount" 
                        type="number"
                        handleChange={()=> {}}
                        />
                        <Input 
                        placeholder="Keyword (Gif)" 
                        name="keyword" 
                        type="text"
                        handleChange={()=> {}}
                        />
                        <Input 
                        placeholder="Enter Message" 
                        name="message" 
                        type="text"
                        handleChange={()=> {}}
                        />
                        <div className="form-sub" />

                        {false ? 
                        (<Loader />) :
                         (
                            <button
                            type="submit"
                            onClick={handleSubmit}
                            >
                            Send Now
                            </button>
                         )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;