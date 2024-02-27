<script>
export default {
    name: 'Register',
    data () {
        return {
            user_data: {},
        }
    }
}
</script>
<template>
    <h1 class="text-[#1f263d] text-3xl md:text-[55px] font-extrabold md:leading-[70px] tracking-[0%]">{{ $t('register.title') }}</h1>
    <h3 class="mb-10 text-[#515971] text-sm font-normal leading-6 tracking-[0%] text-center">{{ $t('register.subtitle') }}</h3>
    <div class="shadow-[0px_0px_60.6px_0px_#daddff] rounded-xl sm:rounded-[25px] bg-[#fcfffe] md:w-[500px] lg:w-[579px]">
        <div class="p-5 sm:pt-[52px] sm:pr-[52px] sm:pb-[27px] sm:pl-[71px]">
            <main-input :placeholder="$t('register.first_name')" class="h-[61px] mb-[26.5px] text-base" v-model:value="user_data['first_name']" />
            <main-input :placeholder="$t('register.last_name')" class="h-[61px] mb-[22.5px] text-base" v-model:value="user_data['last_name']" />
            <div class="text-[#515971] text-base font-semibold leading-6 tracking-[0%] mb-[9px]">{{ $t('register.birth_day') }}</div>
            <div class="flex justify-between gap-5">
                <input-day :placeholder="$t('register.day[0]')" :count="4" />
                <input-day :placeholder="$t('register.day[1]')" />
                <input-day :placeholder="$t('register.day[2]')" />
            </div>
            <main-select class="h-[61px] text-[16px] bg-[#e0e2ff80] mt-[27px] mb-[25px] text-[#1F263D]" :options="['USA', 'Country 1', 'Country 2', 'Country 3', 'Country 4']"/>
            <input-phone :width="75" :height="61" :gap="22" :size="16" class="mb-[26px]"/>
            <main-input :placeholder="$t('register.password[0]')" type="password" class="h-[61px] mb-[25px] text-base" v-model:value="user_data['password']" />
            <main-input :placeholder="$t('register.password[1]')" type="password" class="h-[61px] mb-[27.5px] text-base" v-model:value="user_data['confirm_password']" />
            <main-select class="h-[61px] text-[16px] bg-[#e0e2ff80] mb-[25px] text-[#1F263D]" :options="['Time Zone', 'Time Zone 1', 'Time Zone 2', 'Time Zone 3', 'Time Zone 4']"/>
            <main-select class="h-[61px] text-[16px] bg-[#e0e2ff80] text-[#1F263D]" :options="['Gender', 'Gender 1', 'Gender 2', 'Gender 3', 'Gender 4']"/>
            <div class="flex w-full justify-center mt-[31.5px]">
                <button-picton class="h-[59px] w-full sm:w-auto sm:px-[73px]">
                    <span class="text-[17px] whitespace-nowrap">{{ $t('register.btn') }}</span>
                </button-picton>
            </div>
            <div class="text-center text-[#735cff] text-[8px] font-normal leading-6 tracking-[0%] mt-[3px]">
                {{ $t('register.note[0]') }}
                <router-link to="#" class="underline">{{ $t('register.note[1]') }}</router-link>
            </div>
        </div>
        <div class="p-5 sm:pr-[52px] sm:pl-[71px] sm:py-[21px] flex justify-center border-t-[rgba(134,146,255,0.2)] border-t border-solid">
            <div class="text-sm font-normal leading-6 tracking-[0%] text-[#515971] text-center">
                {{ $t('register.have_account') }} <router-link :to="{name: 'LogIn'}" class="text-[#366aef] lowercase">{{ $t('authtorization.title') }}</router-link>
            </div>
        </div>
    </div>
</template>
