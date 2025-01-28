"use client"

import Submit from "@/components/submit";
import { createProduct, InitialState } from "@/actions/products";
import { useActionState } from "react";
import Link from "next/link";



export default function ProductsDbCreate() {
    const initialState: InitialState = {
        errorsState: {}
    }

    const [state, formAction, isPending] = useActionState(createProduct, initialState)

    console.log(state)

    return (
        <div className="max-w-2xl mx-auto p-4">
            <Link href="/products-db" className="inline-block px-4 py-2 mb-6 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Products</Link>
            <h1 className="text-2xl font-bold mb-4">Add New Product</h1>

            <form action={formAction} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-1">Product Name</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="w-full p-2 border rounded"
                    />
                    {state.errorsState.title && <p className="text-red-500">Title is required</p>}
                </div>

                <div>
                    <label htmlFor="price" className="block mb-1">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        className="w-full p-2 border rounded"
                    />
                    {state.errorsState.price && <p className="text-red-500">Price is required</p>}

                </div>

                <div>
                    <label htmlFor="description" className="block mb-1">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        className="w-full p-2 border rounded"
                        rows={4}
                    />
                    {state.errorsState.description && <p className="text-red-500">Description is required</p>}

                </div>
                <button
                    type="submit"
                    disabled={isPending}
                    className={`
                        px-4 py-2 rounded-lg font-medium
                        bg-blue-500 text-white
                        hover:bg-blue-600 
                        transition-colors duration-200
                        disabled:opacity-50 disabled:cursor-not-allowed
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                    `}
                    >
                    {isPending ? 'Submitting...' : 'Submit'}
                </button>
                {/* <Submit /> */}
            </form>
        </div>
    )
}