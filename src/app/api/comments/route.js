import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const postSlug = searchParams.get("postSlug");
    try {
        const comments = await prisma.comment.findMany({
            where: {
                ...(postSlug && {}),
            },
            include: { user: true },
        });

        return new NextResponse(JSON.stringify(comments, { status: 200 }));
    } catch (err) {
        return new NextResponse(
            JSON.stringify(
                { messages: "Something went wrong!" },
                { status: 500 },
            ),
        );
    }
};
export const POST = async (req) => {
    const sessions = await getAuthSession();
    if (!sessions) {
        return new NextResponse(
            JSON.stringify({ messages: "Not Authenticated!" }, { status: 401 }),
        );
    }
    try {
        const body = await req.json();
        const comment = await prisma.comment.create({
            data: { ...body, userEmail: sessions.user.email },
        });

        return new NextResponse(JSON.stringify(comment, { status: 200 }));
    } catch (err) {
        return new NextResponse(
            JSON.stringify(
                { messages: "Something went wrong!" },
                { status: 500 },
            ),
        );
    }
};
