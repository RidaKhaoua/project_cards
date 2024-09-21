export type TProduct = {
    id: string | undefined,
    imgUrl : string,
    title: string,
    description: string,
    price: number,
    color: string[],
    category: {
        name: string,
        imageUrl : string
    }
}