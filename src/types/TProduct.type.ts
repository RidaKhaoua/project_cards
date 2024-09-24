export type TProduct = {
    id?: string | undefined,
    imageUrl : string,
    title: string,
    description: string,
    price: string,
    color: string[],
    category: {
        name: string,
        imageUrl : string
    }
}