<script>
import PaymentSelect from '../../components/PaymentSelect.vue';

export default {
    name: 'Withdrawal',
    components: {
        PaymentSelect
    },
    data () {
        return {
            FIO: 'dfsdfsdf',
            passport_number: "Введите",
            INN: "XXXXXXXXXXX",
            card_number: 'ddtlbnt',
            amount: 'bfhdsbfdsnf',
            payment: 'mastercard'
        }
    }
}
</script>

<template>
    <div class="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-[122px] mb-10 lg:mb-[50px]">
        <div>
            <h1 class="mb-4 text-[#1f263d] text-3xl sm:text-[40px] font-extrabold sm:leading-[51px]">Вывод средств</h1>
            <p class="font-normal text-sm leading-[18px] text-[#202337]">To withdraw funds from the account, the client must make an application for withdrawal of funds in his personal account. To withdraw, you need to specify the account number, withdrawal amount and click on the Request for withdrawal of funds button. The system automatically converts to dollars at the rate of your bank or electronic billing service.</p>
        </div>
        <button-green class="px-10 sm:px-[65px] h-[45px] sm:h-[60px] text-[17px]">
            <span class="whitespace-nowrap">Contact to support</span>
        </button-green>
    </div>

    <div class="grid grid-col-1 md:grid-cols-2 gap-8 lg:gap-[45px]">
        <payment-select v-model:value="payment"/>
        <div class="shadow-[0px_0px_15.3px_0px_#daddff] rounded-[25px] bg-white p-5 lg:pt-[31px] lg:pr-[52px] lg:pl-[49px] lg:pb-[36px]">
            <h3 class="text-[#515971] text-lg font-normal leading-6 mb-2">Withdrawal on:</h3>
            <p class="text-[#949bb7] text-xs font-normal leading-[18px] mb-[18px]">Субъекты Российской Федерации должны ввести дополнительные поля</p>
            <div class="mb-5">
                <label class="block text-[#515971] text-base font-semibold leading-6 mb-[14px]">ФИО</label>
                <main-input v-model:value="FIO" />
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-[25px] mb-5">
                <div>
                    <label class="block text-[#515971] text-base font-semibold leading-6 mb-[14px]">Серия и номер паспорта</label>
                    <main-input v-model:value="passport_number" />
                </div>
                <div>
                    <label class="block text-[#515971] text-base font-semibold leading-6 mb-[14px]">ИНН</label>
                    <main-input v-model:value="INN" />
                </div>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-[25px] mb-5">
                <div>
                    <label class="block text-[#515971] text-base font-semibold leading-6 mb-[14px]">Card number / E-wallet</label>
                    <main-input v-model:value="card_number" />
                </div>
                <div>
                    <label class="block text-[#515971] text-base font-semibold leading-6 mb-[14px]">Amount USD</label>
                    <main-input v-model:value="amount" />
                </div>
            </div>
            <p class="mb-6 text-[#949bb7] text-xs font-normal leading-[18px]">
                Exchange commission 3% + USD 2 <br>
                You will receive the sum of: USD 0.00 <br>
                The minimum withdrawal amount is $ 200.00 The maximum amount of withdrawals USD 15000.00
            </p>
            <button-picton class="h-[45px] sm:h-[59px] px-10 sm:px-[62px]">
                <span>Request withdrawal</span>
            </button-picton>
        </div>
    </div>
</template>
