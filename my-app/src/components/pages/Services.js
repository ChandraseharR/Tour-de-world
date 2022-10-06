import React, { useState, useEffect } from 'react';
import '../../App.css';
import Footer from '../Footer';
import axios from 'axios';

function Services() {
    const [data, setData] = useState([]);

    async function fetchData(xid) {
        try {
            const res = await axios.get('https://api.opentripmap.com/0.1/en/places/xid/'+xid+'?apikey=5ae2e3f221c38a28845f05b61cf9ff614d3e7ce7d8c01eb2ff7f49b6');

            setData((data) => [
                ...data,
                res.data
            ]);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        var xidArray = ['N3309149440', 'Q1104733', 'R3721155', 'W35107548' ,'W39519529','N2218035420',
        'R3721155',
        'N693052141',
        ];
        console.log(xidArray.length)
        for (let i = 0; i < xidArray.length; i++) {
            fetchData(xidArray[i]);
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            {data && data.map((item,id) => (
                <>
                    <img className="image" src={item.preview.source} key={id} alt='Images' />
                    {/* <h6>{item.preview.source}</h6> */}
                </>
            ))}
            <Footer />
        </>
    );

}

export default Services;