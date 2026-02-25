<script setup lang="ts">
import type { Product } from '@/types';
import { inject, type Ref } from 'vue';


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

const cart = inject<Ref<Product[]>>('cart')

</script>



<template>
    <div>
        <p>{{ product.brand }} || {{ product.title }}</p>
        <p>{{ product.price }} рублей</p>
        <button @click="cart?.push(product)">Купить</button>
        <RouterLink :to="`/products/${product.id}`">Подробнее</RouterLink>
    </div>
</template>
