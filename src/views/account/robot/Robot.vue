<script>

export default {
    name: 'Robot',
    data () {
        return {
            account_name: '',
            current_balance: 'USDT 497.90',
            currencies: ['AUD/JPY', 'EUR/GBP', 'GBP/USD', 'USD/JPY', 'BTC/USD', 'AUD/USD', 'EUR/JPY', 'NZD/USD', 'GBP/AUD', 'LTC/USD', 'EUR/AUD', 'EUR/USD', 'USD/CAD', 'GBP/CAD', 'XRP/USD', 'EUR/CAD', 'GBP/JPY', 'USD/CHF', 'NZD/CHF', 'ETH/USD'],
            selected_currency: ['AUD/JPY', 'USD/JPY', 'GBP/AUD', 'EUR/USD', 'XRP/USD'],
            voise_animation: false,
        }
    },
    methods: {
        selectCurrency (currency) {
            if (this.selected_currency.includes(currency)) {
                this.selected_currency.splice(this.selected_currency.indexOf(currency), 1);
            } else {
                this.selected_currency.push(currency)
            }
        },
        getRandomBgColor (idx) {
            const colors = ['bg-[#57D188]', 'bg-[#36BEF8]', 'bg-[#366AEF]'];
            if (idx == 2 || idx == 8 || idx == 14 || idx == 17 || idx == 23 || idx == 29) {
                return colors[2]
            } else if (idx == 3 || idx == 5 || idx == 7 || idx == 9 || idx == 11 || idx == 13 || idx == 18 || idx == 20 || idx == 22 || idx == 24 || idx == 26 || idx == 28) {
                return colors[1]
            } else {
                return colors[0]
            }
        },
        getRandomAnimationDuration (idx) {
            const duration = ['0', '200', '400', '600', '800' ];
            if ( idx == 5 || idx == 11 || idx == 20 || idx == 26) {
                return duration[0];
            } else if (idx == 2 || idx == 8 || idx == 14 || idx == 17 || idx == 23 || idx == 29) {
                return duration[1];
            } else if (idx == 4 || idx == 6 || idx == 10 || idx == 12 || idx == 19 || idx == 21 || idx == 25 || idx == 27) {
                return duration[2];
            } else if (idx == 1 || idx == 9 || idx == 15 || idx == 16 || idx == 24 || idx == 30) {
                return duration[3];
            } else {
                return duration[4];
            }
        }
    },
    computed: {
        table () {
            return {
                head: this.$tm('robot.table_head'),
                body: [
                    [
                        { val: 'LTCUSD', className: ''},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '2024-02-01 17:02:20', className: ''},
                        { val: '2024-02-01 17:02:20', className: ''},
                        { val: 'Вверх', className: 'text-[#57D188] font-semibold'},
                        { val: '44.00', className: 'font-semibold'},
                        { val: 'Win', className: 'font-semibold'} 
                    ],
                    [
                        { val: 'LTCUSD', className: ''},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '2024-02-01 17:02:20', className: ''},
                        { val: '2024-02-01 17:02:20', className: ''},
                        { val: 'Вверх', className: 'text-[#57D188] font-semibold'},
                        { val: '44.00', className: 'font-semibold'},
                        { val: 'Win', className: 'font-semibold'} 
                    ],
                    [
                        { val: 'LTCUSD', className: ''},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '2024-02-01 17:02:20', className: ''},
                        { val: '2024-02-01 17:02:20', className: ''},
                        { val: 'Вверх', className: 'text-[#57D188] font-semibold'},
                        { val: '44.00', className: 'font-semibold'},
                        { val: 'Win', className: 'font-semibold'} 
                    ],
                    [
                        { val: 'LTCUSD', className: ''},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: '2024-02-01 17:02:20', className: ''},
                        { val: '2024-02-01 17:02:20', className: ''},
                        { val: 'Вверх', className: 'text-[#57D188] font-semibold'},
                        { val: '44.00', className: 'font-semibold'},
                        { val: 'Win', className: 'font-semibold'} 
                    ],
                ]
            }
        }
    }
}
</script>

<template>
    <div class="flex flex-col md:flex-row gap-6 shadow-[0px_0px_15.3px_0px_#daddff] rounded-2xl md:rounded-[25px] bg-[#fcfffe] p-5 md:pt-6 md:pb-[27px] md:pl-[47px] md:pr-[59px] mb-9 md:mb-[45px]">
        <div class="w-full">
            <label class="block text-[#515971] text-base font-semibold leading-6 mb-2 md:mb-4">Выберите счет</label>
            <main-input class="h-[47px] md:h-[52px]" v-model:value="account_name" placeholder="Название счета.com"/>
        </div>
        <div class="md:w-[429px]">
            <label class="block text-[#515971] text-base font-semibold leading-6 mb-2 md:mb-4">Текущий баланс</label>
            <main-input class="h-[47px] md:h-[52px] text-[#366AEF] font-semibold" v-model:value="current_balance" placeholder="Current blance"/>
        </div>
        <div class="min-w-[247px] flex-col flex items-center justify-end">
            <div v-if="voise_animation" class="h-[25px] w-full flex justify-center items-center gap-[2px] mb-4">
                <div
                    v-for="item in 30"
                    :key="item"
                    class="bar bottom-0 h-[3px] rounded-[5px] animate-[voise_600ms_linear_infinite_alternate] w-[3px]"
                    :class="getRandomBgColor(item)"
                    :style="`animation-delay: ${getRandomAnimationDuration(item)}ms;`"
                ></div>
            </div>

            <button-picton @click="voise_animation = true" class="h-[45px] md:h-[51px] w-full">
                <span class="text-[17px] font-extrabold leading-[22px]">Start</span>
            </button-picton>
        </div>
    </div>

    <div class="max-w-[1340px] mx-auto grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-y-[13px] gap-x-[11px] mb-9">
        <button
            v-for="(item, i) in currencies"
            :key="i"
            class="rounded-[5px] border-2 border-solid  text-[#5b6076] text-xs sm:text-[15px] font-extrabold sm:leading-[19px] h-[45px] sm:h-[51px]"
            :class="{
                'border-[#57D188]': selected_currency.includes(item),
                'border-[#d4d6e2]': !selected_currency.includes(item)
            }"
            @click="selectCurrency(item)"
        >
            {{ item }}
        </button>
    </div>

    <div class="text-[#202337] text-[17px] font-normal leading-[22px] lg:ml-7">{{ $t('robot.table_title') }}</div>
    <div class="sm:mb-[58px]">
        <main-table :head_size="14" :body_size="13" :table="table" :table_width="1110"></main-table>
    </div>
</template>