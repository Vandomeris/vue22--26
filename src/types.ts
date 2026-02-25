export interface Product {
    id: string,
    title: string,
    brand: string,
    price?: number
}

export interface KursApi {
    time_last_update_utc: string,
    base_code: string
    rates: Record<string, number>
}