import React from 'react';
import SVG from '../UI/Svg/Svg';
import Classes from './hotDeals.module.css'



const HotDeals = () => {
    return (
        <>
            <h4 className="heading-quadruple center heading-intro">otter's Agency</h4>
            <h2 className="heading-secondary center"><span className='bolder'> Hot</span> Deals</h2>

            <div className={`flex ${Classes.hot}`}>
                <div className={Classes.black}></div>
                <div className={`flex-column ${Classes["hot-details"]}`}>
                    <h4 className="heading-quadruple heading-intro">Residency on the mainland for rent </h4>
                    <h2 className="heading-secondary"> 16 Apartments 3 rooms grade B</h2>
                    <h4 className="heading-quadruple heading-intro">Sonibare estate Maryland </h4>
                    <button className="hot-detail__button"></button>
                    <div className="flex-row small-text">
                        <div className="flex small-text">

                            <SVG urlId="#icon-building" value="1600" valueType="sqr ft" />
                            <SVG urlId="#icon-bed" value="2" valueType="bed" />
                            <SVG urlId="#icon-bath" value="1" valueType="bath" />
                            <SVG urlId="#icon-automobile" value="1" valueType="garage" />

 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HotDeals;