export interface Product {
  name: string
  price: number
  id: string
  images: string[]
}

export interface AllProducts {
  chairs: Product[]
  tables: Product[]
  sofas: Product[]
  cabinets: Product[]
}
