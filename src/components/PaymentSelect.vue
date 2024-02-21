<script>
import visa from '../assets/images/icons/visa.svg';
import mastercard from '../assets/images/icons/mastercard.svg';
import mir from '../assets/images/icons/mir.svg';
import perfect_money from '../assets/images/icons/perfect_money.svg';
import yoo_money from '../assets/images/icons/yoo_money.svg';
import usdt_tron from '../assets/images/icons/usdt_tron.svg';

export default {
    name: 'PaymentSelect',
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    emits: ['update:value'],
    data () {
        return {
            payment: [
                {name: 'visa', icon: visa},
                {name: 'mastercard', icon: mastercard},
                {name: 'mir', icon: mir},
                {name: 'perfect_money', icon: perfect_money},
                {name: 'yoo_money', icon: yoo_money},
                {name: 'usdt_tron', icon: usdt_tron},
            ]
        }
    }
}
</script>

<template>
    <div>
        <div class="shadow-[0px_0px_15.3px_0px_#daddff] rounded-[25px] bg-white pt-[27px] pl-[47px] pr-[52px] pb-8">
            <label class="block text-[#515971] text-lg font-normal leading-6 mb-6">Сhoose the type of payment</label>
            <div class="grid grid-cols-3 gap-x-7 gap-y-[15px] mb-10 select-none">
                <button
                    v-for="(item, i) in payment"
                    :key="i"
                    class="box-border border rounded-md border-solid border-[#dbdbdb] bg-white h-[75px] grid place-content-center"
                    :class="{
                        'border-2 border-[#366AEF]': item.name == value
                    }"
                    @click="$emit('update:value', item.name)"
                >
                    <img :src="item.icon" alt="">
                </button>
            </div>
            <p class="mb-9 text-[#5b6076] text-[13px] font-normal leading-[18px]">Applications for the withdrawal of customer funds fall into the financial department of the company and are processed in the order of the general queue. The period for processing an application for withdrawal of funds ranges from several hours to one business day.</p>
            <p class="text-[#5b6076] text-[13px] font-normal leading-[18px]">To withdraw funds from a personal account, you do not need to pay anything extra. There are no additional payments, no taxes and other fees. Only a commission is charged by the bank, according to your tariff plan.</p>
        </div>
    </div>
</template>