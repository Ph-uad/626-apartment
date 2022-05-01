import React from 'react';
import data from '../../data/ApartmentData.js';
import Classes from './properties.module.css';

const Properties = () => {

    function groupBy(objectArray, property) {
        return objectArray.reduce((acc, obj) => {
            let key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj)
            return acc
        }, {})
    }

    const extract = groupBy(data, "town");
    let p = [];
    for (let town in extract) {
        let units = extract[town].length;
        p.push({ town, units });
    }

    const options = p.map((e, index) => {

        return (
            <div key={index} className={Classes["properties-grid__rows"]}>
                <h3>{e.town}</h3>
                <h3>{e.units}</h3>
            </div>

        )
    })


    return (
        <section>
            <h4 className="heading-quadruple center heading-intro">otter's Agency</h4>
            <h2 className="heading-secondary center"> Properties <span className="bolder"> by LGA </span></h2>
            <div className={`grid ${Classes["properties-grid"]}`}>
                {options}
            </div>
        </section>
    );
}

export default Properties;