import {NextRequest, NextResponse} from "next/server"
import prisma from "@/lib/prisma"

export async function GET(request: NextRequest){
    try {
        const videos=await prisma.video.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })
    } catch (error: any) {
        
    }
}