

import { useEffect, useState } from "react"
import Table from "../components/Table"
import { motion } from 'framer-motion'
import { PrismaClient } from "@prisma/client"
export default async function Page() {



    const products = await fetchProduct()
    console.log(products)

    return (
        <>
            <h1 className="text-7xl">hai</h1>

        </>
    )
}

async function fetchProduct() {
    const prisma = new PrismaClient()
    const res = await prisma.user.findMany()

    return res
}