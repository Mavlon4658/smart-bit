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
    <h1 class="text-[#1f263d] mb-5 md:mb-[70px] text-3xl md:text-[55px] font-extrabold md:leading-[70px] tracking-[0%]">Authtorization</h1>
    <div class="shadow-[0px_0px_60.6px_0px_#daddff] rounded-xl sm:rounded-[25px] bg-[#fcfffe] md:w-[500px] lg:w-[579px]">
        <div class="p-5 sm:pt-[52px] sm:pr-[52px] sm:pb-[34px] sm:pl-[71px]">
            <main-input placeholder="Your login" class="h-[61px] mb-[26.5px] text-base" v-model:value="user_data['login']" />
            <main-input placeholder="Password" type="password" class="h-[61px] mb-[19.5px] text-base" v-model:value="user_data['password']" />
            <router-link to="#" class="text-[#515971] text-sm font-normal leading-6 tracking-[0%]">Forgot your password?</router-link>
            <div class="flex w-full justify-center mt-[25px]">
                <button-picton class="h-[59px] w-full sm:w-auto sm:px-[73px]">
                    <span class="text-[17px]">Open an account</span>
                </button-picton>
            </div>
        </div>
        <div class="p-5 sm:pr-[52px] sm:pl-[71px] sm:py-[21px] flex justify-center border-t-[rgba(134,146,255,0.2)] border-t border-solid">
            <div class="text-sm font-normal leading-6 tracking-[0%] text-[#515971] text-center">
                If you do not have an account, please <router-link :to="{name: 'Register'}" class="text-[#366aef]">register</router-link>
            </div>
        </div>
    </div>
</template>