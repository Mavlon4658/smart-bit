<script>
export default {
    name: "TradeGraphic",
    props: {
        light: {
            type: Boolean,
            default: false,
        }
    },
    data () {
        return {
            crypto_list: [
                'Bitcoin',
                'Bitcoin 2',
                'Bitcoin 3',
                'Bitcoin 4',
                'Bitcoin 5',
            ],
            money_list: [
                '10$',
                '20$',
                '30$',
                '40$',
                '50$',
                '60$',
            ],
            graphics: [
                'Выбрать',
                'graphics 1',
                'graphics 2',
                'graphics 3',
                'graphics 4',
            ],
            zoom: [5, 10, 20, 40, 60],
            zoom_select: 5,
        }
    }
}
</script>

<template>
    <div class="flex flex-col lg:flex-row gap-5 sm:gap-10 xl:gap-[50px]">
        <div class="flex flex-col gap-3 xl:gap-0 justify-between">
            <div class="flex items-start flex-col xl:flex-row gap-5 xl:gap-0 justify-between">
                <div class="flex gap-6 w-full xl:w-auto flex-col sm:flex-row justify-between xl:justify-start">
                    <div class="w-full xl:w-auto">
                        <label
                            class="block text-[19px] font-bold leading-6 tracking-[0%] mb-[7px]"
                            :class="{
                                'text-[#5B6076]': light,
                                'text-white': !light
                            }"
                        >Name of graphics</label>
                        <main-select :text_white="!light" class="bg-transparent border border-solid  h-[52px] w-full xl:w-[298px]" :class="{'border-[#dbdbdb33]': !light}" :options="graphics"></main-select>
                    </div>
                    <div class="w-full sm:w-auto">
                        <label
                            class="block text-[19px] font-bold leading-6 tracking-[0%] mb-[7px] sm:text-center"
                            :class="{
                                'text-[#5B6076]': light,
                                'text-white': !light,
                            }"
                        >Traders Choise</label>
                        <div class="flex w-full sm:w-[210px] h-[45px] sm:h-[52px] overflow-hidden rounded-[25px]">
                            <div class="bg-[#F1364E] w-[70%] flex items-center justify-center text-white text-[17px] font-bold leading-6 tracking-[0%]">70%</div>
                            <div class="bg-[#57D188] w-[30%] flex items-center justify-center text-white text-[17px] font-bold leading-6 tracking-[0%]">30%</div>
                        </div>
                    </div>
                </div>
                <div>
                    <label
                        class="block text-[19px] font-bold leading-6 tracking-[0%] mb-[7px]"
                        :class="{
                            'text-[#5B6076]': light,
                            'text-white': !light
                        }"
                    >Zoom</label>
                    <div class="flex gap-2 sm:gap-4">
                        <button
                            v-for="(item, i) in zoom"
                            :key="i"
                            @click="zoom_select = item"
                            class="w-10 sm:w-[50px] h-10 sm:h-[52px] flex items-center justify-center border rounded-[10px] border-solid text-sm sm:text-[17px] font-bold leading-6 tracking-[0%]"
                            :class="{
                                'bg-[#ffffff80] border-[rgba(255,255,255,0)]': zoom_select == item && !light,
                                'bg-[#51597180] text-white': zoom_select == item && light,
                                'text-[#5B6076] border-[#dbdbdb]': light,
                                'text-white border-[rgba(255,255,255,0.5)]': !light
                            }"
                        >{{ item }}</button>
                    </div>
                </div>
            </div>
            <div class="shadow-[16px_20px_72px_0px_#1f26355e] rounded-[38.95px] overflow-hidden">
                <img src="../assets/images/trade_graphic.png" class="w-full" alt="">
            </div>
        </div>

        <div
            class="w-full lg:w-[409px]  rounded-[15px]"
            :class="{
                'bg-[#6b6b6b1a]': light,
                'bg-[#d9d9d91a]': !light
            }"
        >
            <div class="pt-[25px] pr-5 sm:pr-[50px] pl-5 sm:pl-[61px] pb-8 sm:pb-[46px]">
                <label
                    class="block mb-3 text-[17px] font-bold leading-6 tracking-[0%]"
                    :class="{
                        'text-[#5B6076]': light,
                        'text-white': !light
                    }"
                >{{ $t('trade_graphic.assets') }}</label>
                <main-select
                    :text_white="!light"
                    class="border shadow-[0px_4px_70px_0px_#a760f426] rounded-[10px] bg-[#ffffff33]"
                    :options="crypto_list"
                    :class="{
                        'text-[#5B6076] border-[rgba(91,96,118,0.4)]': light,
                        'text-white border-none': !light
                    }"
                ></main-select>
                <label class="block mb-3 mt-[22px] text-[17px] font-bold leading-6 tracking-[0%]"
                    :class="{
                        'text-[#5B6076]': light,
                        'text-white': !light
                    }"
                >{{ $t('trade_graphic.assets') }}</label>
                <main-input
                    value="00:06"
                    class="mb-5 border shadow-[0px_4px_70px_0px_#a760f426] rounded-[10px] !bg-[#ffffff33]"
                    :options="crypto_list"
                    :class="{
                        'text-[#5B6076] border-[rgba(91,96,118,0.4)]': light,
                        'text-white border-none': !light
                    }"
                ></main-input>
                <main-input
                    value="89635"
                    class="border shadow-[0px_4px_70px_0px_#a760f426] !text-[#1c1e35] rounded-[10px] "
                    :options="crypto_list"
                    :class="{
                        'bg-[rgba(208,214,241,0.6)] border-[rgba(91,96,118,0.4)]': light,
                        '!bg-[#ffffff99] border-none': !light
                    }"
                ></main-input>
                <div class="flex items-center justify-between gap-[25px] mt-6">
                    <button-green class="w-full h-[45px] sm:h-[52px] text-[22px] font-bold leading-6 tracking-[0%]">High</button-green>
                    <button-red class="w-full h-[45px] sm:h-[52px] text-[22px] font-bold leading-6 tracking-[0%]">Low</button-red>
                </div>
            </div>
            <div class="rounded-[0px_0px_15px_15px] bg-[#d9d9d9] py-5 pr-5 sm:pr-[50px] pl-5 sm:pl-[61px]">
                <div class="text-[#2e355b] text-[17px] font-bold leading-6 tracking-[0%]">{{ $t('trade_graphic.close') }}: 20 JAN 12:08:12</div>
                <div class="flex items-center justify-between my-[13px]">
                    <span class="text-[#2d2d2d] text-[15px] font-light leading-6 tracking-[0%]">{{ $t('trade_graphic.investment') }}</span>
                    <main-select class="!w-[138px] h-[45px] sm:h-[52px] px-[22px] text-[#2d2d2d] text-[15px] font-light leading-6 tracking-[0%]" :options="money_list"></main-select>
                </div>
                <div class="text-[#2e355b] text-[17px] font-bold leading-6 tracking-[0%]">{{ $t('trade_graphic.payouts') }}: $17.60 (76%)</div>
                <button-blue class="w-full h-[45px] sm:h-[52px] mt-[19px]">{{ $t('trade_graphic.btn') }}</button-blue>
            </div>
        </div>
    </div>
</template>
