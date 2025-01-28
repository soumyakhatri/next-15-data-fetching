import { getProducts } from "@/primsa-db";
import Link from "next/link";

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}

export default async function ProductsDbPage() {
    const products: Product[] = await getProducts();

    return (
        <div className="max-w-4xl mx-auto p-8">
            <Link href="/" className="inline-block px-4 py-2 mr-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Home</Link>
            <Link href="/products-db-create" className="inline-block px-4 py-2 mb-6 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Create Product</Link>
            <h1 className="text-3xl font-bold mb-6">Products</h1>
            <ul className="grid gap-6">
                {products.map((product) => (
                    <li key={product.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                        <p className="text-gray-600 mb-2">{product.description}</p>
                        <p className="text-lg font-bold text-green-600">${product.price.toFixed(2)}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
