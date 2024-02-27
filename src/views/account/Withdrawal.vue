<script>
import PaymentSelect from '../../components/PaymentSelect.vue';

export default {
    name: 'Withdrawal',
    components: {
        PaymentSelect
    },
    data () {
        return {
            FIO: '',
            passport_number: "",
            INN: "XXXXXXXXXXX",
            card_number: '',
            amount: '',
            payment: ''
        }
    }
}
</script>

<template>
    <div class="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-[122px] mb-10 lg:mb-[50px]">
        <div>
            <h1 class="mb-4 text-[#1f263d] text-3xl sm:text-[40px] font-extrabold sm:leading-[51px]">{{ $t('withdrawal.title') }}</h1>
            <p class="font-normal text-sm leading-[18px] text-[#202337]">{{ $t('withdrawal.description') }}</p>
        </div>
        <button-green class="px-10 sm:px-[65px] h-[45px] sm:h-[60px] text-[17px]">
            <span class="whitespace-nowrap">{{ $t('account.contact') }}</span>
        </button-green>
    </div>

    <div class="grid grid-col-1 md:grid-cols-2 gap-8 lg:gap-[45px]">
        <payment-select v-model:value="payment"/>
        <div class="shadow-[0px_0px_15.3px_0px_#daddff] rounded-[25px] bg-white p-5 lg:pt-[31px] lg:pr-[52px] lg:pl-[49px] lg:pb-[36px]">
            <h3 class="text-[#515971] text-lg font-normal leading-6 mb-2">{{ $t('withdrawal.on.title') }}</h3>
            <p class="text-[#949bb7] text-xs font-normal leading-[18px] mb-[18px]">{{ $t('withdrawal.on.description[0]') }}</p>
            <div class="mb-5">
                <label class="block text-[#515971] text-base font-semibold leading-6 mb-[14px]">{{ $t('withdrawal.on.full_name') }}</label>
                <main-input v-model:value="FIO" />
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-[25px] mb-5">
                <div>
                    <label class="block text-[#515971] text-base font-semibold leading-6 mb-[14px]">{{ $t('withdrawal.on.passport') }}</label>
                    <main-input v-model:value="passport_number" />
                </div>
                <div>
                    <label class="block text-[#515971] text-base font-semibold leading-6 mb-[14px]">ИНН</label>
                    <main-input v-model:value="INN" />
                </div>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-[25px] mb-5">
                <div>
                    <label class="block text-[#515971] text-base font-semibold leading-6 mb-[14px]">{{ $t('withdrawal.on.card_number') }}</label>
                    <main-input v-model:value="card_number" />
                </div>
                <div>
                    <label class="block text-[#515971] text-base font-semibold leading-6 mb-[14px]">{{ $t('withdrawal.on.amount') }}</label>
                    <main-input v-model:value="amount" />
                </div>
            </div>
            <p class="mb-6 text-[#949bb7] text-xs font-normal leading-[18px]">
                {{ $t('withdrawal.on.description[1]') }} <br>
                {{ $t('withdrawal.on.description[2]') }} <br>
                {{ $t('withdrawal.on.description[3]') }}
            </p>
            <button-picton class="h-[45px] sm:h-[59px] px-10 sm:px-[62px]">
                <span>{{ $t('withdrawal.on.btn') }}</span>
            </button-picton>
        </div>
    </div>
</template>
