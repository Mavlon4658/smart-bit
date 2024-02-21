<script>
export default {
    name: "InputPhone",
    props: {
        height: {
            type: Number,
            default: 0,
        },
        gap: {
            type: Number,
            default: 0,
        },
        width: {
            type: Number,
            default: 0,
        },
        size: {
            type: Number,
            default: 0
        }
    }
}
</script>

<template>
    <div 
        class="flex w-full gap-[15px] items-center"
        :class="gap != 0 ? `gap-[${gap}px]` : ''"
    >
        <main-input
            type="tel"
            value="+7"
            class="block text-center"
            :class="[
                (height != 0 ? `h-[${height}px]` : ''),
                (size != 0 ? `text-[${size}px]`: '')
            ]"
            :style="width != 0 ? `width: ${width}px;` : ''"
        ></main-input>
        <main-input
            type="tel"
            placeholder="Телефон"
            :class="[
                (height != 0 ? `h-[${height}px]` : ''),
                (size != 0 ? `text-[${size}px]`: ''),
            ]"
        ></main-input>
    </div>
</template>