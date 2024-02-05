<script>
export default {
    name: "TradeGraphic",
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
    <main-container class="flex gap-[50px]">
        <div class="flex flex-col justify-between">
            <div class="flex items-start justify-between">
                <div class="flex gap-6">
                    <div>
                        <label class="text-white block text-[17px] font-bold leading-6 tracking-[0%] mb-[7px]">Name of graphics</label>
                        <main-select :text_white="true" class="bg-transparent border border-solid border-[#dbdbdb33] h-[52px] w-[298px]" :options="graphics"></main-select>
                    </div>
                    <div>
                        <label class="text-white block text-[17px] font-bold leading-6 tracking-[0%] mb-[7px] text-center">Name of graphics</label>
                        <div class="flex w-[210px] h-[52px] overflow-hidden rounded-[25px]">
                            <div class="bg-[#F1364E] w-[70%] flex items-center justify-center text-white text-[17px] font-bold leading-6 tracking-[0%]">70%</div>
                            <div class="bg-[#57D188] w-[30%] flex items-center justify-center text-white text-[17px] font-bold leading-6 tracking-[0%]">30%</div>
                        </div>
                    </div>
                </div>
                <div>
                    <label class="text-white block text-[17px] font-bold leading-6 tracking-[0%] mb-[7px]">Zoom</label>
                    <div class="flex gap-4">
                        <button
                            v-for="(item, i) in zoom"
                            :key="i"
                            @click="zoom_select = item"
                            class="w-[50px] h-[52px] flex items-center justify-center border rounded-[10px] border-solid border-[rgba(255,255,255,0.5)] text-white text-[17px] font-bold leading-6 tracking-[0%]"
                            :class="{'bg-[#ffffff80] border-[rgba(255,255,255,0)]': zoom_select == item}"
                        >{{ item }}</button>
                    </div>
                </div>
            </div>
            <div class="shadow-[16px_20px_72px_0px_#1f26355e] rounded-[38.95px] overflow-hidden">
                <img src="../assets/images/trade_graphic.png" class="w-full" alt="">
            </div>
        </div>
        <div class="w-[409px] bg-[#d9d9d91a] rounded-[15px]">
            <div class="pt-[25px] pr-[50px] pl-[61px] pb-[46px]">
                <label class="text-white block mb-3 text-[17px] font-bold leading-6 tracking-[0%]">Assets</label>
                <main-select :text_white="true" class="border shadow-[0px_4px_70px_0px_#a760f426] border-none rounded-[10px] bg-[#ffffff33]" :options="crypto_list"></main-select>
                <label class="text-white block mb-3 mt-[22px] text-[17px] font-bold leading-6 tracking-[0%]">Assets</label>
                <main-input value="00:06" class="mb-5 border shadow-[0px_4px_70px_0px_#a760f426] border-none text-white rounded-[10px] !bg-[#ffffff33]" :options="crypto_list"></main-input>
                <main-input value="89635" class="border shadow-[0px_4px_70px_0px_#a760f426] border-none !text-[#1c1e35] rounded-[10px] !bg-[#ffffff99]" :options="crypto_list"></main-input>
                <div class="flex items-center justify-between gap-[25px] mt-6">
                    <button-green class="w-full h-[52px] text-[22px] font-bold leading-6 tracking-[0%]">High</button-green>
                    <button-red class="w-full h-[52px] text-[22px] font-bold leading-6 tracking-[0%]">Low</button-red>
                </div>
            </div>
            <div class="rounded-[0px_0px_15px_15px] bg-[#d9d9d9] py-5 pr-[50px] pl-[61px]">
                <div class="text-[#2e355b] text-[17px] font-bold leading-6 tracking-[0%]">Closing: 20 JAN 12:08:12</div>
                <div class="flex items-center justify-between my-[13px]">
                    <span class="text-[#2d2d2d] text-[15px] font-light leading-6 tracking-[0%]">Investments</span>
                    <main-select class="!w-[138px] h-[52px] px-[22px] text-[#2d2d2d] text-[15px] font-light leading-6 tracking-[0%]" :options="money_list"></main-select>
                </div>
                <div class="text-[#2e355b] text-[17px] font-bold leading-6 tracking-[0%]">Closing: 20 JAN 12:08:12</div>
                <button-blue class="w-full h-[52px] mt-[19px]">TRADE</button-blue>
            </div>
        </div>
    </main-container>
</template>
