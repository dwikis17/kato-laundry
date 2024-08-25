'use client'

import React, { useEffect, useState } from "react"


export default function Table() {
    const [data, setData] = useState<any>()

    useEffect(() => {
        async function fetchNow() {
            const test = await fetch('/api/fetch', {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache'
                }
            })
            const data2 = await test.json()
            setData(data2)

        }

        fetchNow()
    }, [])

    console.log(data, 'djasldkfjsakdl')
    return (
        <>
            <h1>this is not static generated</h1>
            {data && data.length > 0 && (<h1>{data[0].email}</h1>)}
        </>
    )
}