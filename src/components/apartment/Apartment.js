import React, { useState } from 'react';
import data from '../../data/ApartmentData';
import Button from '../UI/Button/Button';
import Classes from './apartment.module.css'
import ApartmentCard from './ApartmentCards';

const Apartment = () => {

    const [showSome, setSHowSome] = useState(6);

    return (
        <section>
            <h4 className="center heading-quadruple">Otter Agency</h4>
            <h2 className="center heading-secondary"><span className="bolder">Feautured</span> Properties.</h2>
            <ApartmentCard show={showSome}/>
            {showSome <= 6 && <Button className={Classes.button} onClick={() => { setSHowSome(data.length) }}>More</Button>}
            {showSome > 6 && <Button className={Classes.button} onClick={() => { setSHowSome(6) }}>Less</Button>}

        </section>
    )
}
export default Apartment;
