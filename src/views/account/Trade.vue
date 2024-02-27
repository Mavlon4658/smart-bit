<script>
import TradeGraphic from '../../components/TradeGraphic.vue'

export default {
    name: 'Trade',
    components: {
        TradeGraphic
    },
    data () {
        return {}
    },
    computed: {
        table () {
            return {
                head: this.$tm('trade.table_head'),
                body: [
                    [ 
                        { val: 'Bitcoin', className: ''},
                        { val: '10.00$', className: 'font-semibold'},
                        { val: '76%', className: ''},
                        { val: '2024-01-30 09:43:13', className: ''},
                        { val: '2024-01-30 09:43:13', className: ''},
                        { val: '49994.00$', className: 'text-[#F0364F] font-semibold'},
                        { val: '49994.00$', className: 'text-[#58D088] font-semibold'},
                        { val: '10.00$', className: 'font-semibold'} 
                    ],
                    [ 
                        { val: 'Bitcoin', className: ''},
                        { val: '10.00$', className: 'font-semibold'},
                        { val: '76%', className: ''},
                        { val: '2024-01-30 09:43:13', className: ''},
                        { val: '2024-01-30 09:43:13', className: ''},
                        { val: '49994.00$', className: 'text-[#F0364F] font-semibold'},
                        { val: '49994.00$', className: 'text-[#58D088] font-semibold'},
                        { val: '10.00$', className: 'font-semibold'} 
                    ],
                    [ 
                        { val: 'Bitcoin', className: ''},
                        { val: '10.00$', className: 'font-semibold'},
                        { val: '76%', className: ''},
                        { val: '2024-01-30 09:43:13', className: ''},
                        { val: '2024-01-30 09:43:13', className: ''},
                        { val: '49994.00$', className: 'text-[#F0364F] font-semibold'},
                        { val: '49994.00$', className: 'text-[#58D088] font-semibold'},
                        { val: '10.00$', className: 'font-semibold'} 
                    ],
                    [ 
                        { val: 'Bitcoin', className: ''},
                        { val: '10.00$', className: 'font-semibold'},
                        { val: '76%', className: ''},
                        { val: '2024-01-30 09:43:13', className: ''},
                        { val: '2024-01-30 09:43:13', className: ''},
                        { val: '49994.00$', className: 'text-[#F0364F] font-semibold'},
                        { val: '49994.00$', className: 'text-[#58D088] font-semibold'},
                        { val: '10.00$', className: 'font-semibold'} 
                    ],
                ]
            }
        }
    }
}
</script>

<template>
    <div class="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-[122px] mb-10 lg:mb-[50px]">
        <div>
            <h1 class="mb-4 text-[#1f263d] text-3xl sm:text-[40px] font-extrabold sm:leading-[51px]">{{ $t('trade.title') }}</h1>
            <p class="font-normal text-sm leading-[18px] text-[#202337]">{{ $t('trade.description') }}</p>
        </div>
        <button-green class="px-10 sm:px-[65px] h-[45px] sm:h-[60px] text-[17px]">
            <span class="whitespace-nowrap">{{ $t('account.contact') }}</span>
        </button-green>
    </div>

    <trade-graphic class="relative" :light="true"></trade-graphic>
    <div class="mt-[62px] mb-[58px]">
        <main-table :table="table" :table_width="845"></main-table>
    </div>
</template>
