'use client'

import React, { useEffect } from "react"

export default function Table({ data }: any) {
    console.log(data, 'dd')
    return (
        <ul>
            {
                data?.products.map((item: any) => (
                    <li>{item.title}</li>
                ))
            }
        </ul>
    )
}