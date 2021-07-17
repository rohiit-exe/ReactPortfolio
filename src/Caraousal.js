import axios from 'axios';
import React, { useEffect } from 'react';

export default function Caraousal (){

  
    useEffect(()=>{
            axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=technology&b783fe401df74b4fbc3f597ba3bab48c=b7`)
            .then(Response=>{
                console.log(Response);
            })
    }
    );

    return (<div>

    </div>

    )
};
