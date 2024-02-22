<script>
export default {
    name: 'Bonus',
    data () {
        return {
            table: {
                head: [ 'Дата', 'Депозит', 'Название бонуса', 'Сумма', 'Статус'],
                body: [
                    [ 
                        { val: '2024-01-30 09:43:13', className: ''},
                        { val: '10.00$', className: 'font-semibold'},
                        { val: 'Название бонуса длинное', className: ''},
                        { val: '10.00$', className: 'font-semibold'},
                        { val: 'Отменен', className: 'font-semibold'}
                    ],
                    [ 
                        { val: '2024-01-30 09:43:13', className: ''},
                        { val: '10.00$', className: 'font-semibold'},
                        { val: 'Название бонуса длинное', className: ''},
                        { val: '10.00$', className: 'font-semibold'},
                        { val: 'Отменен', className: 'font-semibold'}
                    ],
                    [ 
                        { val: '2024-01-30 09:43:13', className: ''},
                        { val: '10.00$', className: 'font-semibold'},
                        { val: 'Название бонуса длинное', className: ''},
                        { val: '10.00$', className: 'font-semibold'},
                        { val: 'Отменен', className: 'font-semibold'}
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
            <h1 class="mb-4 text-[#1f263d] text-3xl sm:text-[40px] font-extrabold sm:leading-[51px]">Бонусы</h1>
            <p class="font-normal text-sm leading-[18px] text-[#202337]">Bonus program lets you get a certain % as bonus to your trading account. This will allow you to trade with a larger amount than your initial investment.You may recieve bonus on your account by making a deposit and entering a special bonus code in deposit menu field "promo code". Bonus amount may vary depending on offers. You may receive bonus codes on partner sites or our advertisements.</p>
        </div>
        <button-green class="px-10 sm:px-[65px] h-[45px] sm:h-[60px] text-[17px]">
            <span class="whitespace-nowrap">Contact to support</span>
        </button-green>
    </div>

    <main-table :table="table" :table_width="600"></main-table>
</template>
