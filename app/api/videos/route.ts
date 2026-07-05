import {NextRequest, NextResponse} from "next/server"
import prisma from "@/lib/prisma"

export async function GET(request: NextRequest){
    try {
        /*
            schema mein model ka naam Video hai (capital V) — Prisma convention follow karta hai:
            Schema mein: model Video { ... }
            Generated client mein: prisma.video (lowercase, camelCase)
        */
        const videos=await prisma.video.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })
        return NextResponse.json(videos)
    } catch (error: any) {
        return NextResponse.json({error:"Error fetching videos"},{status: 500})
    } finally{
        await prisma.$disconnect()
    }
}