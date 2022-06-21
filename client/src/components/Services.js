import React from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard =({color, title, icons, subtitle})=> {
    return (
        <div className="service-card">
        <div style={{width: '40px', height: '40px', borderRadius: '50% 50%', justifyContent: 'center', alignItems: 'center', backgroundColor: `${color}` }}>
           <div>{icons}</div> 
        </div>
        <div className="title" style={{marginLeft: '20px', display: 'flex', flexDirection: 'column', flex: '1'}}>
            <h1>{title}</h1>
            <p style={{marginTop: '-10px'}}>{subtitle}</p>
        </div>
    </div>
    );
}

const Services =()=> {

    
    return(
        <div className="services">
            <div className="services-sub1">
                <div className="services-sub2">
                    <h1>
                        Services that we
                        <br />
                        continue to improve
                    </h1>
                </div>
            </div>
            <div className="services-sub-sub">
                <ServiceCard 
                    title="Security Guaranteed"
                    icons ={<BsShieldFillCheck fontSize={21} style={{color: 'white'}}/>}
                    subtitle="Security is guaranteed. We always maintain privacy and the quality of our products."
                />
                <ServiceCard 
                    color='#89845F8'
                    title="Best exchange rates"
                    icons ={<BiSearchAlt fontSize={21} style={{color: 'white'}}/>}
                    subtitle="Security is guaranteed. We always maintain privacy and the quality of our products."
                />
                <ServiceCard 
                    title="Fastest transactions"
                    icons ={<RiHeart2Fill fontSize={21} style={{color: 'white'}}/>}
                    subtitle="Security is guaranteed. We always maintain privacy and the quality of our products."
                />
            </div>
        </div>
    );
}

export default Services;