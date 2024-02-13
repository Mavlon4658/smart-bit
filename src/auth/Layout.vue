<script>
export default {
    name: "Layout"
}
</script>

<template>
    <div class="relative z-[1]">
        <img class="h-[200px] w-full absolute top-0 left-0 z-[1] object-cover object-bottom" src="../assets/images/header_bg.png" alt="">
        <main-container class="relative pt-[202px] pb-[80px]">
            <div class="border w-[1026px] h-[880px] absolute z-[-1] top-[107px] left-[-351px] rounded-[50%] blur-[250px] bg-[#D8DBFF]"></div>
            <img class="absolute z-[-1] right-[-22px] top-[196px] grayscale blur-[10px]" src="../assets/images/faq_bg.png" alt="">
            <div class="relative z-[3] flex flex-col items-center">
                <router-view></router-view>
            </div>
        </main-container>
    </div>
</template>