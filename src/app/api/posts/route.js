import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");
    const cat = searchParams.get("cat");
    const POST_PER_PAGE = 20;
    const quary = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            ...(cat && { catSlug: cat }),
        },
    };
    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(quary),
            prisma.post.count({
                where: quary.where,
            }),
        ]);
        return new NextResponse(
            JSON.stringify({ posts, count }, { status: 200 }),
        );
    } catch (err) {
        return new NextResponse(
            JSON.stringify(
                { messages: "Something went wrong!" },
                { status: 500 },
            ),
        );
    }
};

//CREATE A POST
export const POST = async (req) => {
    const sessions = await getAuthSession();
    if (!sessions) {
        return new NextResponse(
            JSON.stringify({ messages: "Not Authenticated!" }, { status: 401 }),
        );
    }
    try {
        const body = await req.json();
        const post = await prisma.post.create({
            data: { ...body, userEmail: sessions.user.email },
        });

        return new NextResponse(JSON.stringify(post, { status: 200 }));
    } catch (err) {
        return new NextResponse(
            JSON.stringify(
                { messages: "Something went wrong!" },
                { status: 500 },
            ),
        );
    }
};
