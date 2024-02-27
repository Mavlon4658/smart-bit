<script>
export default {
    name: "AbouUs"
}
</script>

<template>
    <div class="relative z-[1]">
        <img class="h-[200px] w-full absolute top-0 left-0 z-[1] object-cover object-bottom" src="../assets/images/header_bg.png" alt="">
        <main-container class="relative pt-[150px] lg:pt-[202px]">
            <img class="absolute hidden lg:block z-[-1] top-0 right-[-236px]" src="../assets/images/about_us_bg.png" alt="">
            <img class="absolute hidden lg:block z-[-1] top-[71px] right-[-236px]" src="../assets/images/home_right_coin.png" alt="">
            <img class="absolute hidden lg:block z-[-1] top-[47px] left-[-393px]" src="../assets/images/home_left_coin.png" alt="">
            <div class="relative z-[3]">
                <h1 class="text-[#1f263d] mb-[25px] lg:text-[55px] text-4xl font-extrabold lg:leading-[70px] tracking-[0%]">{{ $t('about_us.title') }}</h1>
                <p class="text-[#282854] mb-5 sm:mb-[35px] lg:max-w-[531px] text-base sm:text-[22px] font-normal sm:leading-7 tracking-[0%]">{{ $t('about_us.descriptions[0]') }}</p>
                <p class="text-[#7d7d93] mb-5 sm:mb-[35px] lg:max-w-[531px] text-base text-[22px] font-normal sm:leading-7 tracking-[0%]">{{ $t('about_us.descriptions[1]') }}</p>
                <button-blue class="pt-[14px] pb-[11px] px-[78px] mb-10 sm:mb-[86px]">{{ $t('about_us.btn') }}</button-blue>
                <p class="text-[#7d7d93] text-base sm:text-[22px] font-normal sm:leading-7 tracking-[0%] mb-[55px]">
                    {{ $t('about_us.descriptions[2]') }}
                    <br><br>
                    {{ $t('about_us.descriptions[3]') }}
                </p>
            </div>
        </main-container>
    </div>
</template>