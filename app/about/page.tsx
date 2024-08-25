
import { PrismaClient } from "@prisma/client"
import useSWR from "swr"
import Table from "../components/Table"
export default async function Page() {

    const prisma = new PrismaClient()

    const data = await prisma.user.findMany()


    return (
        <>
            <h1>this is static generated</h1>
            <h1>{data[0].email}</h1>
            <Table />
        </>
    )
}

