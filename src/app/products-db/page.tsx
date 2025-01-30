import { removeProduct } from "@/actions/products";
import { getProducts } from "@/primsa-db";
import Link from "next/link";
import { FaHome, FaTrash } from 'react-icons/fa';  // Add this import at the top
import { ProductsDetail } from "./products-detail";

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}

export default async function ProductsDbPage({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
    const { query } = await searchParams
    const products: Product[] = await getProducts(query);

    return (
        <ProductsDetail products={products} />
    )
}
