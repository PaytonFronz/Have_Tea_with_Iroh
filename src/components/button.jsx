import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
const bootstrap = require('bootstrap');


const Button = () => {

    const [quote, setQuote] = useState("");

    const irohAPI = async () => {
        let arrayOfQuotes = [];
        try {
            const data = await axios.get("https://api.thedragonofthe.rest/quote");
            arrayOfQuotes = data.data;
            console.log(data)
        } catch (e) {
            console.log(e)
        }

        try {
            setQuote(arrayOfQuotes.quote);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        irohAPI();
    }, []);

    return (
        <div id="container">
            <div className="getWisdom">
                <div className="irohsWisdom">
                    "{quote}" <div className="byIroh">-Uncle Iroh
                    </div>
                    <button className="wisdomButton" onClick={irohAPI}>Share Tea with Iroh🍵</button>
                </div>
            </div>
        </div>
    )
}

export default Button;