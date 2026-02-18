<template>
    <h1>Каталог товаров</h1>
    <div class="products_grid">
        <ProductCard v-if="!loading" v-for="product in products" :key="product.id" :product="product" />
        <ElSkeleton v-else v-for="(_) in 10" :rows="5" />

    </div>


</template>


<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import type { Product } from '@/types';
import { ElButton, ElSkeleton } from 'element-plus';
import ky from 'ky';
import { onMounted, ref } from 'vue';


const products = ref<Product[]>([])
const loading = ref(true)

onMounted(async () => {

    const data = await ky.get<Product[]>('http://localhost:3000/products').json()

    products.value = data

    loading.value = false

})


</script>


<style scoped>
.products_grid {

    display: grid;
    grid-template-columns: repeat(5, 1fr);
}
</style>