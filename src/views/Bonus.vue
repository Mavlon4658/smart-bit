<script>
export default {
    name: "Bonus"
}
</script>

<template>
    <div class="relative z-[1]">
        <img class="h-[200px] w-full absolute top-0 left-0 z-[1] object-cover object-bottom" src="../assets/images/header_bg.png" alt="">
        <main-container class="relative pt-[150px] lg:pt-[202px] pb-5 sm:pb-[45px]">
            <img class="absolute z-[-1] top-[47px] left-[-393px]" src="../assets/images/home_left_coin.png" alt="">
            <div class="relative z-[3]">
                <div class="relative lg:absolute z-[-1] lg:right-[-42px] lg:mt-[100px] xl:mt-0">
                    <img src="../assets/images/bonus_bg.png" class="lg:w-[500px] xl:w-[700px] 2xl:w-auto" alt="">
                    <span class="absolute top-[50%] left-[50%] -translate-x-2/4 translate-y-[calc(-50%)] sm:translate-y-[calc(-50%_-_22px)] text-black text-base sm:text-[22px] font-normal whitespace-nowrap sm:leading-7 tracking-[0%] text-center">Здесь будет скрин из лк с <br> введением бонус-кода</span>
                </div>
                <h1 class="text-[#1f263d] my-5 sm:mt-0 sm:mb-[35px] lg:text-[55px] text-4xl font-extrabold lg:leading-[70px] tracking-[0%]" v-html="$tm('bonus.title')"></h1>
                <p class="text-[#282854] mb-5 sm:mb-[45px] max-w-[500px] xl:max-w-[633px] text-base sm:text-[22px] font-normal leading-7 tracking-[0%]">{{ $t('bonus.descriptions[0]') }}</p>
                <button-blue class="pt-[14px] pb-[11px] px-[78px] mb-8 sm:mb-[86px]">{{ $t('bonus.btn') }}</button-blue>
                <div class="flex gap-5 sm:gap-[33px] mb-10 sm:mb-[70px]">
                    <div class="w-9 sm:w-[58px] h-9 sm:h-[58px] shrink-0 bg-[#36BEF8] rounded-full flex items-center justify-center text-white text-base sm:text-[22px] font-bold sm:leading-7 tracking-[0%]">
                        01
                    </div>
                    <div class="text-base sm:text-[22px] sm:leading-7 tracking-[0%]">
                        <p class="mb-5 sm:mb-[25px] font-semibold text-[#1f263d]">{{ $t('bonus.descriptions[1]') }}</p>
                        <p class="mb-4 sm:mb-[25px] font-light text-[#515971]">{{ $t('bonus.descriptions[2]') }}</p>
                        <p class="font-normal text-[#1f263d]">{{ $t('bonus.descriptions[3]') }}</p>
                    </div>
                </div>
                <div class="flex gap-5 sm:gap-[33px]">
                    <div class="w-9 sm:w-[58px] h-9 sm:h-[58px] shrink-0 bg-[#36BEF8] rounded-full flex items-center justify-center text-white text-base sm:text-[22px] font-bold sm:leading-7 tracking-[0%]">
                        02
                    </div>
                    <div class="text-base sm:text-[22px] sm:leading-7 tracking-[0%]">
                        <p class="mb-5 sm:mb-[25px] font-semibold text-[#1f263d]">{{ $t('bonus.descriptions[4]') }}</p>
                        <p class="font-normal text-[#1f263d]">{{ $t('bonus.descriptions[5]') }}</p>
                    </div>
                </div>
            </div>
        </main-container>
    </div>
</template>