import React, { useEffect, useState } from 'react'

const Market = () => {
    const url = 'http://localhost:5000/api/market/getmarket';
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(async (response) => {
            setdata(await response.json())
            console.log(data);
        }).catch((response) => {
            console.log(response);
        })
    }, [])

    let headings = ['Rank', 'Name', 'Symbol', 'Price (USD)', 'Market Cap Dominance', 'Volume (last 24H)', 'Total Supply']
    return (
        <div className='flex flex-col w-full justify-center items-center'>
            <div className='flex mf:flex-col flex-col items-center justify-center py-12'>
                <div className='flex flex-1 justify-start flex-col mf:mr-10'></div>
                <div className="overflow-x-auto relative pl-3.5">
                    <table className="w-1/2 text-sm text-left text-white white-glassmorphism border-none">
                        <thead className="text-lg text-cyan-300 uppercase">
                            <tr>
                                {headings.map((item) => (
                                    <th key={item} scope="col" className="py-3 px-6">
                                        {item}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className='border-white'>
                            {data.map((item) => (
                                <tr key={item.id} className=''>
                                    <td scope="row" className="py-4 px-6 text-center">
                                        {item.cmc_rank}
                                    </td>
                                    <td scope="row" className="py-4 px-6">
                                        {item.name}
                                    </td>
                                    <td scope="row" className="py-4 px-6">
                                        {item.symbol}
                                    </td>
                                    <td scope="row" className="py-4 px-6">
                                        {item.quote.USD.price.toPrecision(10)}
                                    </td>
                                    <td scope="row" className="py-4 px-6">
                                        {item.quote.USD.market_cap_dominance.toPrecision(10)}
                                    </td>
                                    <td scope="row" className="py-4 px-6">
                                        {item.quote.USD.volume_24h.toPrecision(10)}
                                    </td>
                                    <td scope="row" className="py-4 px-6">
                                        {item.total_supply.toPrecision(10)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Market