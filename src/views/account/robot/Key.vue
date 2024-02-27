<script>
export default {
    name: 'Key',
    data () {
        return {
            key: '',
        }
    }
}
</script>

<template>
    <div class="flex flex-col md:flex-row justify-start gap-6 shadow-[0px_0px_15.3px_0px_#daddff] rounded-[25px] bg-[#fcfffe] p-5 md:pt-6 md:pb-[27px] md:pl-[47px] md:pr-[59px] mb-[45px]">
        <div class="md:w-[576px]">
            <label class="block text-[#515971] text-base font-semibold leading-6 mb-4">{{ $t('robot.key.label') }}</label>
            <main-input class="h-[45px] lg:h-[52px]" v-model:value="key" :placeholder="$t('robot.key.placeholder')"/>
        </div>
        <div class="min-w-[247px] flex-col flex items-center justify-end">
            <button-green @click="voise_animation = true" class="h-[45px] lg:h-[51px] w-full">
                <span class="text-[17px] font-extrabold leading-[22px]">{{ $t('robot.key.btn') }}</span>
            </button-green>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[92px]">
        <div class="shadow-[0px_4px_70px_0px_#a760f426] px-5 lg:px-0 backdrop-blur-[26px] rounded-[40px] bg-white py-5 md:py-10 lg:pt-[58px] lg:pb-[65px] flex flex-col place-items-center">
            <div class="text-2xl lg:text-[32px] font-black lg:leading-9 mb-7 lg:mb-[34px]">STANDART</div>
            <div class="text-[#282b51] text-4xl lg:text-5xl font-bold lg:leading-[64px]">1000$</div>
            <div class="text-[#495381] text-lg lg:text-[22px] font-medium lg:leading-9 mb-5 lg:mb-9">{{ $t('robot.tarif.day[0]') }}</div>
            <div class="text-[#495381] text-lg lg:text-[22px] font-medium lg:leading-[30px] opacity-50 text-center max-w-[250px] mx-auto mb-8">{{ $t('robot.tarif.description[0]') }}</div>
            <button-blue class="h-[45px] h-lg:[52px] w-full lg:w-[247px]">
                <span class="text-[17px] font-extrabold leading-[22px]">{{ $t('robot.tarif.btn') }}</span>
            </button-blue>
        </div>
        <div class="shadow-[0px_4px_70px_0px_#a760f426] px-5 lg:px-0 backdrop-blur-[26px] rounded-[40px] bg-white py-5 md:py-10 lg:pt-[58px] lg:pb-[65px] flex flex-col place-items-center">
            <div class="text-2xl lg:text-[32px] font-black lg:leading-9 mb-7 lg:mb-[34px]">PREMIUM</div>
            <div class="text-[#282b51] text-4xl lg:text-5xl font-bold lg:leading-[64px]">2000$</div>
            <div class="text-[#495381] text-lg lg:text-[22px] font-medium lg:leading-9 mb-5 lg:mb-9">{{ $t('robot.tarif.day[1]') }}</div>
            <div class="text-[#495381] text-lg lg:text-[22px] font-medium lg:leading-[30px] opacity-50 text-center max-w-[250px] mx-auto mb-8">{{ $t('robot.tarif.description[1]') }}</div>
            <button-green class="h-[45px] lg:h-[52px] w-full lg:w-[247px]">
                <span class="text-[17px] font-extrabold leading-[22px]">{{ $t('robot.tarif.btn') }}</span>
            </button-green>
        </div>
        <div class="shadow-[0px_4px_70px_0px_#a760f426] px-5 lg:px-0 backdrop-blur-[26px] rounded-[40px] bg-white py-5 md:py-10 lg:pt-[58px] lg:pb-[65px] flex flex-col place-items-center">
            <div class="text-2xl lg:text-[32px] font-black lg:leading-9 mb-7 lg:mb-[34px]">VIP КЛЮЧ</div>
            <div class="text-[#282b51] text-4xl lg:text-5xl font-bold lg:leading-[64px]">5000$</div>
            <div class="text-[#495381] text-lg lg:text-[22px] font-medium lg:leading-9 mb-5 lg:mb-9">{{ $t('robot.tarif.day[2]') }}</div>
            <div class="text-[#495381] text-lg lg:text-[22px] font-medium lg:leading-[30px] opacity-50 text-center max-w-[250px] mx-auto mb-8">{{ $t('robot.tarif.description[2]') }}</div>
            <button-picton class="h-[45px] lg:h-[52px] w-full lg:w-[247px]">
                <span class="text-[17px] font-extrabold leading-[22px]">{{ $t('robot.tarif.btn') }}</span>
            </button-picton>
        </div>
    </div>
</template>