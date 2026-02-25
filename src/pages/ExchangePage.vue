<template>
<h1>Обмен валют</h1>


<input v-model="rubles" type="number" placeholder="Сколько рублей" >

<select v-model="currency">

    <option 
    v-if="kurs" 
    v-for="(value, key) in kurs.rates" 
    :key="key" 
    :value="key"
    >{{key}}</option>

</select>


<span>{{ result }}</span>


</template>

<script setup lang='ts'>
import type { KursApi } from '@/types';
import ky from 'ky';
import { computed, onMounted, ref } from 'vue';


const kurs = ref<KursApi>()

onMounted(async () => {
    const data = await ky.get<KursApi>('https://open.er-api.com/v6/latest/RUB').json()

    kurs.value = data
})

const rubles = ref(0)
const currency = ref('usd')

const result = computed(() =>  {
    if(kurs.value){
        return rubles.value * kurs.value.rates[currency.value]!
    }else{
        return 0
    }
})

</script>