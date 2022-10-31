import React, { useEffect, useState } from 'react'
import newsimg from '../../images/news.jpg';

const News = () => {
    const url = 'http://localhost:5000/api/getnews';
    const [data, setdata] = useState(null)
    useEffect(() => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(async (response) => {
            let res = await response.json();
            setdata(res.results);
        }).catch((response) => {
            console.log(response);
        })
    }, [])

    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">
                <div className="flex flex-wrap justify-center items-start mt-10">
                    {data && data.map((item) => (
                        <div className="bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] min-w-full flex-col p-3 rounded-md hover:shadow-2xl">
                            <div key={item.title} className="flex flex-col items-center w-full mt-3">
                                <img src={item.image_url || newsimg} alt="nature" className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover" />
                                <div className="display-flex justify-start w-full mb-6 p-2">
                                    <a href={item.link} target="_blank" rel="noreferrer">
                                        <p className="text-cyan-300 text-xl">{item.title}</p>
                                    </a>
                                    <a href={item.link} target="_blank" rel="noreferrer">
                                        <p className="text-white text-sm">{item.content === null ? item.content : `${item.content.slice(0, 300)}...`}</p>
                                    </a>
                                    <p className="text-cyan-300 text-xs">Source: {item.source_id}</p>
                                </div>
                                <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                                    <p className="text-[#37c7da] font-bold">{item.pubDate}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default News