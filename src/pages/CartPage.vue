<template>
<h1>CartPage</h1>

<div v-if="cart">
<div v-for="product in cart" :key="product.id">
    <h2>{{ product.title }} || {{ product.brand }}</h2>
    <p>{{ product.title }}</p>
</div>
</div>

</template>

<script setup lang='ts'>
import type { Product } from '@/types';
import { inject, type Ref } from 'vue';


const cart = inject<Ref<Product[]>>('cart')

</script>