import { NextResponse } from "next/server";
import { addProduct } from "@/primsa-db";

export async function POST(request: Request) {
    try {
        const { title, price, description } = await request.json();
        
        if (!title || !price) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const product = await addProduct(title, parseInt(price), description);
        
        return NextResponse.json(product, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Error creating product" },
            { status: 500 }
        );
    }
}
