"use client"

import { removeProduct } from "@/actions/products";
import { getProducts } from "@/primsa-db";
import Link from "next/link";
import { useOptimistic } from "react";
import { FaHome, FaTrash } from 'react-icons/fa';  // Add this import at the top

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}

export function ProductsDetail({products}: {products: Product[]}) {

    const [optimisticProducts, setOptimisticProducts] = useOptimistic(products, (currentProducts, productId) => {
        return currentProducts.filter(product => product.id !== productId)
    })

    const removeProductOptimistically = async (id: number) => {
        setOptimisticProducts(id)
        await removeProduct(id)
    }

    return (
        <>
            <nav className="bg-white shadow-md p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-2 w-fit px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                            <FaHome /> Home
                        </Link>
                        <Link href="/products-db-create" className="w-fit px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Create Product</Link>
                    </div>
                    {/* You can add more menu items on the right side if needed */}
                </div>
            </nav>

            <div className="max-w-4xl mx-auto p-8">

                <h1 className="text-3xl font-bold mb-6 mt-6">Products</h1>
                <ul className="grid gap-6">
                    {optimisticProducts.map((product) => (
                        <div key={product.id} className="flex items-start gap-4">
                            <Link href={`/products-db/${product.id}`} className="flex-1 border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                                <p className="text-gray-600 mb-2">{product.description}</p>
                                <p className="text-lg font-bold text-green-600">${product.price.toFixed(2)}</p>
                            </Link>
                            <form action={removeProductOptimistically.bind(null, product.id)}>
                                <button 
                                    className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                                    type="submit"
                                >
                                    <FaTrash size={20} />
                                </button>
                            </form>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    )
}
