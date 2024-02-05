<script>
export default {
    name: "MainSelect",
    props: {
        options: {
            type: Array,
            default: []
        },
        text_white: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<template>
    <select
        class="w-full h-[45px] px-[18px] outline-none box-border border rounded-md border-solid border-[#dbdbdb] text-[13px] font-normal leading-6 tracking-[0%] text-[#7a809f]"
        :class="text_white ? 'text-white' : 'text-[#7a809f]'"
    >
        <option
            v-for="(item, i) in options"
            :key="i"
            :value="item"
            :class="{'text-black': text_white}"
        >{{ item }}</option>
    </select>
</template>
