// pages/api/fetchData.js
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: any) {

    const prisma = new PrismaClient();
    const data = await prisma.user.findMany();
    return NextResponse.json(data, { status: 200 });
}
