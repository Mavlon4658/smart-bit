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
    <div class="flex items-end justify-between gap-[122px] mb-[50px]">
        <div>
            <h1 class="mb-4 text-[#1f263d] text-[40px] font-extrabold leading-[51px]">Deposit Funds</h1>
            <p class="font-normal text-sm leading-[18px] text-[#202337]">In order to deposit funds to a personal account, the client must have a Visa, MasterCard, Mir or Electronic Wallet bank card. To replenish, you need to specify the deposit amount in dollars and click the Make a deposit button.</p>
        </div>
        <button-green class="px-[65px] h-[60px] text-[17px]">
            <span class="whitespace-nowrap">Contact to support</span>
        </button-green>
    </div>

    <div class="grid grid-cols-2 gap-[45px]">
        <payment-select v-model:value="payment"/>
        <div class="shadow-[0px_0px_15.3px_0px_#daddff] rounded-[25px] bg-white pt-[31px] pr-[52px] pl-[49px] pb-[36px]">
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
            <button-picton class="h-[59px] px-[62px]">
                <span>Request withdrawal</span>
            </button-picton>
        </div>
    </div>
</template>
