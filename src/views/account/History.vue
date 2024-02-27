<script>
export default {
    name: 'History',
    data () {
        return {
            start: 'All',
            end: 'All',
        }
    },
    computed: {
        table () {
            return {
                head: this.$tm('history.table_head'),
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
            <h1 class="mb-4 text-[#1f263d] text-3xl sm:text-[40px] font-extrabold sm:leading-[51px]">{{ $t('history.title') }}</h1>
            <p class="font-normal text-sm leading-[18px] text-[#202337]">{{ $t('history.description') }}</p>
        </div>
        <button-green class="px-10 sm:px-[65px] h-[45px] sm:h-[60px] text-[17px]">
            <span class="whitespace-nowrap">{{ $t('account.contact') }}</span>
        </button-green>
    </div>

    <div class="shadow-[0px_0px_15.3px_0px_#daddff] rounded-[10px] p-5 lg:py-[25px] lg:pl-[58px] lg:pr-[53px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[18px] mb-[34px]">
        <div>
            <label class="text-[#515971] text-base font-semibold leading-6 pl-[0.82px] mb-3 block">{{ $t('history.status') }}</label>
            <main-select class="bg-[#e2e4ff80] text-black h-[38px]" :options="['All', 'All 1', 'All 2', 'All 3', 'All 4']"/>
        </div>
        <div>
            <label class="text-[#515971] text-base font-semibold leading-6 pl-[0.82px] mb-3 block">{{ $t('history.assets') }}</label>
            <main-select class="bg-[#e2e4ff80] text-black h-[38px]" :options="['All', 'All 1', 'All 2', 'All 3', 'All 4']"/>
        </div>
        <div>
            <label class="text-[#515971] text-base font-semibold leading-6 pl-[0.82px] mb-3 block">{{ $t('history.mode') }}</label>
            <main-select class="bg-[#e2e4ff80] text-black h-[38px]" :options="['All', 'All 1', 'All 2', 'All 3', 'All 4']"/>
        </div>
        <div>
            <label class="text-[#515971] text-base font-semibold leading-6 pl-[0.82px] mb-3 block">{{ $t('history.start') }}</label>
            <main-input class="h-[38px]" v-model:value="start" />
        </div>
        <div>
            <label class="text-[#515971] text-base font-semibold leading-6 pl-[0.82px] mb-3 block">{{ $t('history.end') }}</label>
            <main-input class="h-[38px]" v-model:value="end" />
        </div>
        <div class="flex items-end">
            <button-picton class="w-[195px] h-10">
                <span class="text-sm font-extrabold leading-[18px]">{{ $t('confirm') }}</span>
            </button-picton>
        </div>
    </div>

    <main-table :table="table" :table_width="870"></main-table>
</template>