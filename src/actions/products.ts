"use server"

import { addProduct, updateProduct } from "@/primsa-db";
import { redirect } from "next/navigation";

export type Errors = {
    title?: string;
    price?: string;
    description?: string;
}

export type InitialState = {
    errorsState: Errors;
}

export const createProduct = async (prevState: InitialState, formData: FormData) => {
    const title = formData.get('title') as string;
    const price = formData.get('price') as string;
    const description = formData.get('description') as string;

    const errors: Errors = {}
    if(!title){
        errors.title = 'Title is required'
    }
    if(!price){
        errors.price = 'Price is required'
    }
    if(!description){
        errors.description = 'Description is required'
    }

    if(Object.keys(errors).length > 0){
        return {errorsState: errors}
    }

    await addProduct(title, parseInt(price), description);

    redirect('/products-db');
}
export const editProduct = async (id: number, prevState: InitialState, formData: FormData) => {
    const title = formData.get('title') as string;
    const price = formData.get('price') as string;
    const description = formData.get('description') as string;

    const errors: Errors = {}
    if(!title){
        errors.title = 'Title is required'
    }
    if(!price){
        errors.price = 'Price is required'
    }
    if(!description){
        errors.description = 'Description is required'
    }

    if(Object.keys(errors).length > 0){
        return {errorsState: errors}
    }

    await updateProduct(id, title, parseInt(price), description);

    redirect('/products-db');
}