import React, { useState } from 'react';
import data from '../../data/ApartmentData';
import Classes from './apartment.module.css'
import SVG from '../UI/Svg/Svg';
import Button from '../UI/Button/Button';
import ApartmentInfo from './preview/ApartmentInfo';

const ApartmentCard = ({show}, props) => {
    const [overlay, doShowOverlay] = useState();


    const toogleOverlayHandler =(item)=>{
        doShowOverlay(item);
    }
    const closeModal =()=>{
        doShowOverlay();
    }

    const options = data.map((item, index) => {
        if (index < show) {
            return (
                <div key={index} className={Classes.card}>
                    <div className={Classes["card-gallery"]}>
                        <img src={item.image} className={Classes['card-image']} alt="house"></img>
                    </div>
                    <div className={Classes['card-details']}>
                        <div className={`flex ${Classes["apartment-flex"]}`}>
                            <div className="p-1">
                                <h4 className={`heading-quadruple  ${Classes["apartment-state"]}`}>Lagos State</h4>
                                <h2 className={`heading-secondary  ${Classes["apartment-location"]}`}> {item.location}, Nigeria</h2>
                                <h4 className={`heading-quadruple ${Classes["apartment-time"]}`}>Ade Ayo</h4>
                            </div>
                            <h4 className={`heading-quadruple p-1 ${Classes["apartment-time"]}`}>4 months ago</h4>
                        </div>
                        <div className="flex p-1 small-icon">
                            <SVG urlId="#icon-building" value="1600" valueType="sqr ft" />
                            <SVG urlId="#icon-bed" value="2" valueType="bed" />
                            <SVG urlId="#icon-bath" value="1" valueType="bath" />
                            <SVG urlId="#icon-automobile" value="2" valueType="garage" />
                        </div>
                        <Button className={Classes["preview-button"]} onClick={() => toogleOverlayHandler(item)}>Preview</Button>
                    </div>
                </div>
            )
        } else { return null; }
    });
    return (
        <div className={`grid  ${Classes["apartment-container"]}`}>
            {options}
            {overlay && <ApartmentInfo onShow={overlay} onClick={closeModal}/>}
        </div>)
}
export default ApartmentCard;