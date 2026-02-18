<script setup lang="ts">
import type { Product } from '@/types';


// defineProps(['id', 'brand', 'price', 'title'])

// defineProps({
//     id: {
//         type: String,
//         required: true
//     },
//     brand: String,
//     price: Number,
//     title: String
// })

defineProps<{ product: Product }>()

</script>



<template>
    <div>
        <p>{{ product.brand }} || {{ product.title }}</p>
        <p>{{ product.price }} рублей</p>
        <RouterLink :to="`/products/${product.id}`">Подробнее</RouterLink>
    </div>
</template>
