import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const category = await prisma.category.findMany();
        return new NextResponse(JSON.stringify(category, { status: 200 }));
    } catch (err) {
        return new NextResponse(
            JSON.stringify(
                { messages: "Something went wrong!" },
                { status: 500 },
            ),
        );
    }
};
