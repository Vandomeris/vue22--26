<template>
    <Transition name="crazyspin">
        <div v-if="show" class="modal-overlay" @click="$emit('modal-close')">
            <div class="modal-body" @click.stop>
                <div class="modal-close">
                    <slot name="header"></slot>
                    <button @click="$emit('modal-close')">X</button>
                </div>
                <div>
                    <slot name="body"></slot>
                </div>


                <slot>
                    Некое значение которое будет отображаться по умолчанию
                </slot>
            </div>
        </div>
    </Transition>

</template>


<script setup lang='ts'>

defineProps<{
    show: boolean
}>()

</script>

<style scoped>
.modal-close {
    display: flex;
    justify-content: space-between;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-body {
    max-width: 600px;
    width: 100%;
    background-color: white;
    border-radius: 25px;
    padding: 20px;
}
</style>