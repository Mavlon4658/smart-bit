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
    <h1 class="text-[#1f263d] text-[55px] font-extrabold leading-[70px] tracking-[0%]">Authtorization</h1>
    <h3 class="mb-10 text-[#515971] text-sm font-normal leading-6 tracking-[0%] text-center">To register on our website you need to fill in all fields</h3>
    <div class="shadow-[0px_0px_60.6px_0px_#daddff] rounded-[25px] bg-[#fcfffe] w-[579px]">
        <div class="pt-[52px] pr-[52px] pb-[27px] pl-[71px]">
            <main-input placeholder="First name" class="h-[61px] mb-[26.5px] text-base" v-model:value="user_data['first_name']" />
            <main-input placeholder="Last name" class="h-[61px] mb-[22.5px] text-base" v-model:value="user_data['last_name']" />
            <div class="text-[#515971] text-base font-semibold leading-6 tracking-[0%] mb-[9px]">Day of Birth</div>
            <div class="flex justify-between gap-5">
                <input-day placeholder="YYYY" :count="4" />
                <input-day placeholder="MM" />
                <input-day placeholder="DD" />
            </div>
            <main-select class="h-[61px] text-[16px] bg-[#e0e2ff80] mt-[27px] mb-[25px] text-[#1F263D]" :options="['USA', 'Country 1', 'Country 2', 'Country 3', 'Country 4']"/>
            <input-phone :width="75" :height="61" :gap="22" :size="16" class="mb-[26px]"/>
            <main-input placeholder="Your password" type="password" class="h-[61px] mb-[25px] text-base" v-model:value="user_data['password']" />
            <main-input placeholder="Your password again" type="password" class="h-[61px] mb-[27.5px] text-base" v-model:value="user_data['confirm_password']" />
            <main-select class="h-[61px] text-[16px] bg-[#e0e2ff80] mb-[25px] text-[#1F263D]" :options="['Time Zone', 'Time Zone 1', 'Time Zone 2', 'Time Zone 3', 'Time Zone 4']"/>
            <main-select class="h-[61px] text-[16px] bg-[#e0e2ff80] text-[#1F263D]" :options="['Gender', 'Gender 1', 'Gender 2', 'Gender 3', 'Gender 4']"/>
            <div class="flex w-full justify-center mt-[31.5px]">
                <button-picton class="h-[59px] px-[73px]">
                    <span class="text-[17px]">Open an account</span>
                </button-picton>
            </div>
            <div class="text-center text-[#735cff] text-[8px] font-normal leading-6 tracking-[0%] mt-[3px]">
                By pressing the button accept our
                <router-link to="#" class="underline">Terms and Conditions</router-link>
            </div>
        </div>
        <div class="pr-[52px] pl-[71px] py-[21px] flex justify-center border-t-[rgba(134,146,255,0.2)] border-t border-solid">
            <div class="text-sm font-normal leading-6 tracking-[0%] text-[#515971]">
                If you  have an account, please <router-link :to="{name: 'LogIn'}" class="text-[#366aef]">authtorization</router-link>
            </div>
        </div>
    </div>
</template>
