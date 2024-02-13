<script>
import { vMaska } from "maska";

export default {
    name: 'InputDay',
    directives: { maska: vMaska },
    props: {
        placeholder: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            maskedValue: this.money,
            bindedObject: {
                masked: "",
                unmasked: "",
                completed: false,
            },
        }
    }
}
</script>

<template>
    <input
        type="text"
        :placeholder="placeholder"
        v-model="maskedValue"
        v-maska="bindedObject"
        data-maska="####"
        @maska="$emit('update:money', (bindedObject.unmasked))"
        class="pt-[18px] pb-[19px] rounded-[6px] outline-none w-full text-[rgb(159,165,#dbdbdb)] text-base font-normal leading-6 tracking-[0%] border border-solid border-[#DBDBDB] text-center"
    >
</template>