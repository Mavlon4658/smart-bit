<script>
import MainSelect from '../../components/UI/MainSelect.vue'
export default {
    components: { MainSelect },
    name: "Account",
    data () {
        return {
            personal_data: {
                current_password: 'fsdfsdf',
                email: 'verylonglonglonglong@rambler.ru'
            }
        }
    }
}
</script>

<template>
    <div class="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-[122px] mb-10 lg:mb-[50px]">
        <div>
            <h1 class="mb-4 text-[#1f263d] text-3xl sm:text-[40px] font-extrabold sm:leading-[51px]">{{ $t('account.title') }}</h1>
            <p class="font-normal text-sm leading-[18px] text-[#202337] max-w-[660px]">{{ $t('account.description') }}</p>
        </div>
        <button-green class="px-10 sm:px-[65px] h-[45px] sm:h-[60px] text-[17px]">
            <span class="whitespace-nowrap">{{ $t('account.contact') }}</span>
        </button-green>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-[45px]">

        <div class="shadow-[0px_0px_15.3px_0px_#daddff] rounded-2xl sm:rounded-[25px] bg-[#fcfffe] p-5 sm:pl-[48px] sm:pr-[52px] sm:pt-[38px] sm:pb-[36px]">
            <h3 class="text-[#515971] text-lg font-normal leading-6 mb-[43px]">{{ $t('account.data.title') }}</h3>
            <div class="mb-5">
                <label class="block text-[#515971] text-base font-semibold leading-6 mb-3">{{ $t('account.data.country') }}</label>
                <main-select class="bg-[#e2e4ff80] text-black" :options="['USA', 'Country 1', 'Country 2', 'Country 3', 'Country 4']"/>
            </div>
            <div class="mb-5">
                <label class="block text-[#515971] text-base font-semibold leading-6 mb-3">{{ $t('account.data.phone') }}</label>
                <input-phone :width="95" :size="16" :gap="28"/>
            </div>
            <div class="mb-5">
                <label class="block text-[#515971] text-base font-semibold leading-6 mb-3">{{ $t('account.data.email') }}</label>
                <main-input :placeholder="$t('account.data.email_placeholder')" type="email" v-model:value="personal_data['email']"/>
            </div>
            <div class="mb-5">
                <label class="block text-[#515971] text-base font-semibold leading-6 mb-3">{{ $t('account.data.password') }}</label>
                <main-input :placeholder="$t('account.data.password_placeholder')" type="email" v-model:value="personal_data['password']"/>
            </div>
            <button-picton class="w-full sm:w-[288px] h-[45px] sm:h-[59px]">
                <span class="text-[17px] font-extrabold leading-[22px]">{{ $t('account.save') }}</span>
            </button-picton>
        </div>

        <div class="shadow-[0px_0px_15.3px_0px_#daddff] rounded-2xl sm:rounded-[25px] bg-[#fcfffe] p-5 sm:pl-[48px] sm:pr-[52px] sm:pt-[38px] sm:pb-[36px]">
            <h3 class="text-[#515971] text-lg font-normal leading-6 mb-[43px]">{{ $t('account.change.title') }}</h3>
            <div class="mb-5">
                <label class="block text-[#515971] text-base font-semibold leading-6 mb-3">{{ $t('account.change.password[0]') }}</label>
                <main-input :placeholder="$t('account.change.placeholder[0]')" v-model:value="personal_data['current_password']"/>
            </div>
            <div class="mb-5">
                <label class="block text-[#515971] text-base font-semibold leading-6 mb-3">{{ $t('account.change.password[1]') }}</label>
                <main-input type="password" :placeholder="$t('account.change.placeholder[1]')" v-model:value="personal_data['new_password']"/>
            </div>
            <div class="mb-5">
                <label class="block text-[#515971] text-base font-semibold leading-6 mb-3">{{ $t('account.change.password[2]') }}</label>
                <main-input type="password" :placeholder="$t('account.change.placeholder[1]')" v-model:value="personal_data['new_password_confirm']"/>
            </div>
            <p class="text-[#949bb7] text-xs font-normal leading-[18px] mb-16">{{ $t('account.change.valid_text') }}</p>
            <button-picton class="w-full sm:w-[288px] h-[45px] sm:h-[59px]">
                <span class="text-[17px] font-extrabold leading-[22px]">{{$t('account.save')}}</span>
            </button-picton>
        </div>

    </div>
</template>