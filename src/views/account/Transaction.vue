<script>
export default {
    name: 'Transaction',
    data () {
        return {}
    },
    computed: {
        table () {
            return {
                head: this.$tm('transaction.table_head'),
                body: [
                    [ 
                        { val: 'deposit', className: ''},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: 'Visa/Mastercard/Maestro/Mir', className: ''},
                        { val: 'Processed', className: 'font-semibold'},
                        { val: '03 Jan 17:02:20', className: ''}
                    ],
                    [ 
                        { val: 'deposit', className: ''},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: 'Visa/Mastercard/Maestro/Mir', className: ''},
                        { val: 'Processed', className: 'font-semibold'},
                        { val: '03 Jan 17:02:20', className: ''}
                    ],
                    [ 
                        { val: 'deposit', className: ''},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: 'Visa/Mastercard/Maestro/Mir', className: ''},
                        { val: 'Processed', className: 'font-semibold'},
                        { val: '03 Jan 17:02:20', className: ''}
                    ],
                    [ 
                        { val: 'deposit', className: ''},
                        { val: '500.00$', className: 'font-semibold'},
                        { val: 'Visa/Mastercard/Maestro/Mir', className: ''},
                        { val: 'Processed', className: 'font-semibold'},
                        { val: '03 Jan 17:02:20', className: ''}
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
            <h1 class="mb-4 text-[#1f263d] text-3xl sm:text-[40px] font-extrabold sm:leading-[51px]">{{ $t('transaction.title') }}</h1>
            <p class="font-normal text-sm leading-[18px] text-[#202337]">{{ $t('transaction.description') }}</p>
        </div>
        <button-green class="px-10 sm:px-[65px] h-[45px] sm:h-[60px] text-[17px]">
            <span class="whitespace-nowrap">{{ $t('account.contact') }}</span>
        </button-green>
    </div>

    <main-table :table="table" :table_width="600"></main-table>
</template>
