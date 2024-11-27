import { NextResponse } from "next/server";
import {prisma} from "@/utils/prisma";

export async function GET(){
    try {
        const data = await request.json();

    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return NextResponse.json({ success: false },{
          status: 500,
        });
    }
}

export async function POST(request){
    try {
        const data = await request.json();

    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return NextResponse.json({ success: false },{
          status: 500,
        });
    }
}

export async function PUT(request){
    try {
          const data = await request.json();''
    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return NextResponse.json({ success: false },{
          status: 500,
        });
    }
}

export async function PATCH(request){
    try {
        const data = await request.json();

    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return NextResponse.json({ success: false },{
          status: 500,
        });
    }
}

export async function DELETE(request){
    try {
        const data = await request.json();
        
    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        return NextResponse.json({ success: false },{
          status: 500,
        });
    }
}