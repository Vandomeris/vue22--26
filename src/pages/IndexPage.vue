<script setup lang="ts">
import ModalWindow from '@/components/ModalWindow.vue';
import { ref } from 'vue';

const show = ref(false)

</script>

<template>
    <div>
        <h1>Главная страница</h1>
        <button @click="show = true">Открыть модальное окно</button>
        <ModalWindow @modal-close="show = false" :show="show">
            <template #header>
                <h2>Регистрация</h2>
            </template>
            <template #body>
                <form>
                    <input placeholder="Name" type="text">
                    <input placeholder="Surname" type="text">
                    <button>Register</button>
                </form>
            </template>
        </ModalWindow>
    </div>
</template>
