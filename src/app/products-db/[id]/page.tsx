import EditProduct from "@/components/editProduct";
import { getProduct } from "@/primsa-db";
import { notFound } from "next/navigation";

export default async function ProductsDbEdit({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const product = await getProduct(parseInt(id))
    if(!product) {
        notFound()
    }

    return (
        <EditProduct product={product} id={id}/>
    )
}