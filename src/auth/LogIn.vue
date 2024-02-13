<script>
    export default {
        name: 'LogIn',
        data () {
            return {
                user_data: {}
            }
        }
    }
</script>
<template>
    <h1 class="text-[#1f263d] mb-[70px] text-[55px] font-extrabold leading-[70px] tracking-[0%]">Authtorization</h1>
    <div class="shadow-[0px_0px_60.6px_0px_#daddff] rounded-[25px] bg-[#fcfffe] w-[579px]">
        <div class="pt-[52px] pr-[52px] pb-[34px] pl-[71px]">
            <main-input placeholder="Your login" class="h-[61px] mb-[26.5px] text-base" v-model:value="user_data['login']" />
            <main-input placeholder="Password" type="password" class="h-[61px] mb-[19.5px] text-base" v-model:value="user_data['password']" />
            <router-link to="#" class="text-[#515971] text-sm font-normal leading-6 tracking-[0%]">Forgot your password?</router-link>
            <div class="flex w-full justify-center mt-[25px]">
                <button-picton class="h-[59px] px-[73px]">
                    <span class="text-[17px]">Open an account</span>
                </button-picton>
            </div>
        </div>
        <div class="pr-[52px] pl-[71px] py-[21px] flex justify-center border-t-[rgba(134,146,255,0.2)] border-t border-solid">
            <div class="text-sm font-normal leading-6 tracking-[0%] text-[#515971]">
                If you do not have an account, please <router-link :to="{name: 'Register'}" class="text-[#366aef]">register</router-link>
            </div>
        </div>
    </div>
</template>