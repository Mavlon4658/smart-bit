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
        <div class="pt-[52px] pr-[52px] pb-[34px] pl-[71px]">
            <main-input placeholder="First name" class="h-[61px] mb-[26.5px] text-base" v-model:value="user_data['first_name']" />
            <main-input placeholder="Last name" type="password" class="h-[61px] mb-[22.5px] text-base" v-model:value="user_data['last_name']" />
            <div class="text-[#515971] text-base font-semibold leading-6 tracking-[0%] mb-[9px]">Day of Birth</div>
            <div class="flex justify-between gap-5">
                <input-day placeholder="YYYY" />
                <input-day placeholder="MM" />
                <input-day placeholder="DD" />
            </div>
            <router-link to="#" class="text-[#515971] text-sm font-normal leading-6 tracking-[0%]">Forgot your password?</router-link>
            <div class="flex w-full justify-center mt-[25px]">
                <button-picton class="h-[59px] px-[73px]">
                    <span class="text-[17px]">Open an account</span>
                </button-picton>
            </div>
        </div>
        <div class="pr-[52px] pl-[71px] py-[21px] flex justify-center border-t-[rgba(134,146,255,0.2)] border-t border-solid">
            <div class="text-sm font-normal leading-6 tracking-[0%] text-[#515971]">
                If you  have an account, please <router-link :to="{name: 'LogIn'}" class="text-[#366aef]">authtorization</router-link>
            </div>
        </div>
    </div>
</template>
