import React from 'react';
import Modal from './Modal';
import Classes from './apartmentInfo.module.css'
import SVG from '../../UI/Svg/Svg';


const ApartmentInfo = (props) => {

    let data = props.onShow

    console.log(data);


    return (
        <Modal onClick={props.onClick}>
            <div className={Classes["apartment-container"]}>
                <div className={Classes["apartment-box"]}>
                                <div className={Classes["apartment-image"]} style={{ backgroundImage: `url(${data.image})` }}></div>
                </div>
    
                <div className={`flex-column ${Classes["apartment-details"]}`}>
                    <h4 className={`heading-quadruple  ${Classes["apartment-state"]}`}>Lagos State</h4>
                    <h4 className="heading-quadruple heading-intro">{data.town} </h4>
                    <h2 className="heading-secondary"> {data.location}, Nigeria</h2>
                    <h2 className="heading-secondary"> {data.price}</h2>
                    <p className="paragraph">{data.description}</p>

                    <div className="flex p-1 small-icon">
                        <SVG urlId="#icon-building" value="1600" valueType="sqr ft" />
                        <SVG urlId="#icon-bed" value="2" valueType="bed" />
                        <SVG urlId="#icon-bath" value="1" valueType="bath" />
                        <SVG urlId="#icon-automobile" value="2" valueType="garage" />
                    </div>
                </div>
            </div>
        </Modal >
    )

}
export default ApartmentInfo;