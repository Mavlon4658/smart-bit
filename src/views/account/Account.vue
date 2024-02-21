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
    <div class="flex items-end justify-between gap-[122px] mb-[50px]">
        <div>
            <h1 class="mb-4 text-[#1f263d] text-[40px] font-extrabold leading-[51px]">Personal details</h1>
            <p class="font-normal text-sm leading-[18px] text-[#202337] max-w-[660px]">Here you can change your personal information. To finish this operation, you must enter renewed information, your account password and press Change button.</p>
        </div>
        <button-green class="px-[65px] h-[60px] text-[17px]">
            <span class="whitespace-nowrap">Contact to support</span>
        </button-green>
    </div>
    <div class="grid grid-cols-2 gap-[45px]">

        <div class="shadow-[0px_0px_15.3px_0px_#daddff] rounded-[25px] bg-[#fcfffe] pl-[48px] pr-[52px] pt-[38px] pb-[36px]">
            <h3 class="text-[#515971] text-lg font-normal leading-6 mb-[43px]">Personal data change</h3>
            <div class="mb-5">
                <label class="block text-[#515971] text-base font-semibold leading-6 mb-3">Country</label>
                <main-select class="bg-[#e2e4ff80] text-black" :options="['USA', 'Country 1', 'Country 2', 'Country 3', 'Country 4']"/>
            </div>
            <div class="mb-5">
                <label class="block text-[#515971] text-base font-semibold leading-6 mb-3">Phone</label>
                <input-phone :width="95" :size="16" :gap="28"/>
            </div>
            <div class="mb-5">
                <label class="block text-[#515971] text-base font-semibold leading-6 mb-3">E-mail</label>
                <main-input placeholder="Your email" type="email" v-model:value="personal_data['email']"/>
            </div>
            <div class="mb-5">
                <label class="block text-[#515971] text-base font-semibold leading-6 mb-3">Enter the password</label>
                <main-input placeholder="Your password" type="email" v-model:value="personal_data['password']"/>
            </div>
            <button-picton class="w-[288px] h-[59px]">
                <span class="text-[17px] font-extrabold leading-[22px]">Save changes</span>
            </button-picton>
        </div>

        <div class="shadow-[0px_0px_15.3px_0px_#daddff] rounded-[25px] bg-[#fcfffe] pl-[48px] pr-[52px] pt-[38px] pb-[36px]">
            <h3 class="text-[#515971] text-lg font-normal leading-6 mb-[43px]">Personal data change</h3>
            <div class="mb-5">
                <label class="block text-[#515971] text-base font-semibold leading-6 mb-3">Current password</label>
                <main-input placeholder="Current password" v-model:value="personal_data['current_password']"/>
            </div>
            <div class="mb-5">
                <label class="block text-[#515971] text-base font-semibold leading-6 mb-3">New password</label>
                <main-input type="password" placeholder="Your password" v-model:value="personal_data['new_password']"/>
            </div>
            <div class="mb-5">
                <label class="block text-[#515971] text-base font-semibold leading-6 mb-3">Enter the password again</label>
                <main-input type="password" placeholder="Your password" v-model:value="personal_data['new_password_confirm']"/>
            </div>
            <p class="text-[#949bb7] text-xs font-normal leading-[18px] mb-16">Fill out the form below to change your password. When you create your new password, please be sure: It is 5-20 characters long.</p>
            <button-picton class="w-[288px] h-[59px]">
                <span class="text-[17px] font-extrabold leading-[22px]">Save changes</span>
            </button-picton>
        </div>

    </div>
</template>