<script>
export default {
    name: "MainInput",
    props: {
        placeholder: {
            type: String,
            deafult: ''
        },
        value: {
            type: String,
            deafult: ''
        }
    },
    emits: ['update:value']
}
</script>

<template>
    <input
        type="text"
        :placeholder="placeholder"
        :value="value"
        @input="e => $emit('update:value', e.target.value)"
        class="outline-none box-border w-full border h-[45px] px-[18px] rounded-md border-solid border-[#dbdbdb] bg-white text-[13px] font-normal leading-6 tracking-[0%] text-[#5B6076]"
    >
</template>
