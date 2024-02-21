<script>
export default {
    name: 'Transaction',
    data () {
        return {
            table: {
                head: [ 'Type', 'Amount', 'Paysystem', 'Status', 'Date'],
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
    <div class="flex items-end justify-between gap-[122px] mb-[50px]">
        <div>
            <h1 class="mb-4 text-[#1f263d] text-[40px] font-extrabold leading-[51px]">Транзакции</h1>
            <p class="font-normal text-sm leading-[18px] text-[#202337]">More financial information You can find here.</p>
        </div>
        <button-green class="px-[65px] h-[60px] text-[17px]">
            <span class="whitespace-nowrap">Contact to support</span>
        </button-green>
    </div>

    <main-table :table="table"></main-table>
</template>
