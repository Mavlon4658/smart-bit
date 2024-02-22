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
        <div class="shadow-[0px_0px_15.3px_0px_#daddff] rounded-[25px] bg-white p-5 lg:pt-[27px] lg:pl-[47px] lg:pr-[52px] lg:pb-8">
            <label class="block text-[#515971] text-lg font-normal leading-6 mb-6">Сhoose the type of payment</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-x-7 lg:gap-y-[15px] mb-10 select-none">
                <button
                    v-for="(item, i) in payment"
                    :key="i"
                    class="box-border  rounded-md border-solid bg-white h-[50px] md:h-[75px] grid place-content-center"
                    :class="{
                        'border-2 border-[#366AEF]': item.name == value,
                        'border border-[#dbdbdb]': item.name != value,
                    }"
                    @click="$emit('update:value', item.name)"
                >
                    <img :src="item.icon" class="scale-75 md:scale-100" alt="">
                </button>
            </div>
            <p class="mb-9 text-[#5b6076] text-[13px] font-normal leading-[18px]">Applications for the withdrawal of customer funds fall into the financial department of the company and are processed in the order of the general queue. The period for processing an application for withdrawal of funds ranges from several hours to one business day.</p>
            <p class="text-[#5b6076] text-[13px] font-normal leading-[18px]">To withdraw funds from a personal account, you do not need to pay anything extra. There are no additional payments, no taxes and other fees. Only a commission is charged by the bank, according to your tariff plan.</p>
        </div>
    </div>
</template>