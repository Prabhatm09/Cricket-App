import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './news.css';

export function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=cricket&from=2022-11-22&sortBy=publishedAt&apiKey=e53ee295b9c7459da80e049c910e8e0f`)
            .then((response) => {
                setNews([...response.data.articles]);
            });
    }, []);

    return (
        <>
            <h3 className='venue-Heading'>All Charts</h3>
            <div className='newscontainer'>
                {
                    news.map(({ url, urlToImage, title, description }) =>
                        <>
                            <div className='cricket_div' key={url}>
                                <div className='cricket_img_div'>
                                    <img src={urlToImage} alt=""></img>
                                </div>
                                <div className='cricket_content_div'>
                                    <h1>{title}</h1>
                                    <span>
                                        <p>{description.length > 200 ? `${description.substring(0, 200)}...` : description}<button className='read_more_btn'><a href={url}>Read more</a></button></p>
                                    </span>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}