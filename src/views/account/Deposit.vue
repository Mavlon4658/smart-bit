<script>
import PaymentSelect from '../../components/PaymentSelect.vue';

export default {
    name: 'Deposit',
    components: {
        PaymentSelect
    },
    data () {
        return {
            amount: '',
            poromo_code: '',
            payment: 'mastercard'
        }
    }
}
</script>

<template>
    <div class="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-[122px] mb-10 lg:mb-[50px]">
        <div>
            <h1 class="mb-4 text-[#1f263d] text-3xl sm:text-[40px] font-extrabold sm:leading-[51px]">Deposit Funds</h1>
            <p class="font-normal text-sm leading-[18px] text-[#202337]">In order to deposit funds to a personal account, the client must have a Visa, MasterCard, Mir or Electronic Wallet bank card. To replenish, you need to specify the deposit amount in dollars and click the Make a deposit button.</p>
        </div>
        <button-green class="px-10 sm:px-[65px] h-[45px] sm:h-[60px] text-[17px]">
            <span class="whitespace-nowrap">Contact to support</span>
        </button-green>
    </div>

    <div class="grid grid-col-1 md:grid-cols-2 gap-8 lg:gap-[45px]">
        <payment-select v-model:value="payment"/>
        <div class="shadow-[0px_0px_15.3px_0px_#daddff] rounded-[25px] bg-white p-5 lg:pt-[31px] lg:pr-[52px] lg:pl-[49px] lg:pb-[36px]">
            <p class="text-[#949bb7] text-xs font-normal leading-[18px] mb-[25px]">Specify the size of the deposit:</p>
            <div class="mb-5">
                <label class="block text-[#515971] text-base font-semibold leading-6 mb-1">Amount</label>
                <p class="text-[#5b6076] text-[13px] font-normal leading-6 mb-4">Enter the amount from USD 150 to USD 2000</p>
                <main-input v-model:value="amount" type="number" />
            </div>
            <div class="mb-9">
                <label class="block text-[#515971] text-base font-semibold leading-6 mb-1">Promo Code</label>
                <p class="text-[#5b6076] text-[13px] font-normal leading-6 mb-4">If you have a Promo Code please enter it in this field</p>
                <main-input v-model:value="poromo_code" type="number" />
            </div>
            <button-picton class="h-[45px] sm:h-[59px] px-10 sm:px-[62px]">
                <span>Request withdrawal</span>
            </button-picton>
        </div>
    </div>
</template>
