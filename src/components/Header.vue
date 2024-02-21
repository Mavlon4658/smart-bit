<script>
export default {
    name: "Header",
    data () {
        return {
            navs: [
                {title: 'Info', path: 'Faq'},
                {title: 'About Us', path: 'AboutUs'},
                {title: 'Bonus', path: 'Bonus'},
            ],
            navs2: [
                {title: 'Analitics', path: ''},
                {title: 'Info', path: 'Faq'},
                {title: 'Trade', path: ''},
                {title: 'About Us', path: 'AboutUs'},
                {title: 'Bonus', path: 'Bonus'},
                {title: 'Account', path: 'Account'},
            ],
            lang_list: [
                {name: "En", flag: 'GB'},
                {name: "Ru", flag: 'RU'}
            ],
            value: {name: "En", flag: 'GB'},
            lang_list_class: 'hidden',
            is_login: true,
        }
    },
    methods: {
        async getFlag(countr) {
            let img = await axios.get('https://www.countryflagicons.com/FLAT/64/DE.png')
        },
        langListToggle () {
            if ( this.lang_list_class == 'hidden') {
                this.lang_list_class = ''
            } else {
                this.lang_list_class = 'hidden'
            }
        },
        selectLang (item) {
            this.value = item;
            this.langListToggle();
        },
        checkLogIn () {
            if (this.$route.path.includes('account')) {
                return true
            }
            else false
        }
    }
}
</script>

<template>
    <header
        class="absolute z-10 w-full left-0 top-[27px]"
        :class="{
            'bg-[#202337] relative !top-0 pt-[32px] pb-[25px]': checkLogIn()
        }"
    >
        <main-container>
            <div class="flex items-center justify-between">
                <Logo :class="{'translate-y-1': checkLogIn()}"/>
                
                <nav v-if="!checkLogIn()" class="flex items-center gap-10">
                    <router-link
                        class="text-white text-lg font-bold leading-[23px] tracking-[0%] text-left uppercase"
                        :to="{name: item.path}"
                        v-for="(item, i) in navs"
                        :key="i"
                    >
                        {{ item.title }}
                    </router-link>
                </nav>
                <nav v-if="checkLogIn()" class="flex items-center gap-10">
                    <router-link
                        class="relative text-white text-base font-bold leading-5"
                        :to="{name: item.path}"
                        v-for="(item, i) in navs2"
                        :key="i"
                    >
                        {{ item.title }}
                        <span class="absolute w-[calc(100%_+_6px)] h-0.5 bg-[#57D188] left-[-3px] bottom-[-7px]" :class="{'hidden': item.path != $route.name}"></span>
                    </router-link>
                </nav>

                <div class="flex items-center gap-[33px]">
                    <button v-if="checkLogIn()" class="border rounded-[5px] border-solid border-white h-[35px] w-[92px] flex justify-between items-center pl-[9px] pr-2">
                        <span class="flex items-center gap-[6px]">
                            <span class="w-[6px] h-[6px] rounded-[50%] bg-[#2196F3]"></span>
                            <span class="text-white text-[13px] font-semibold leading-[17px]">Demo</span>
                        </span>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                                <path d="M2.6158 4.45084C2.43682 4.62982 2.43682 4.92004 2.6158 5.09902L4.8581 7.33908C5.2161 7.69676 5.79626 7.69662 6.15413 7.3388L8.39554 5.09737C8.57453 4.91839 8.57453 4.62817 8.39554 4.44919C8.21655 4.27019 7.92635 4.27019 7.74736 4.44919L5.82894 6.3676C5.64996 6.54662 5.35975 6.54662 5.18077 6.3676L3.26397 4.45084C3.08499 4.27185 2.79482 4.27185 2.6158 4.45084Z" fill="white"/>
                            </g>
                        </svg>

                    </button>

                    <router-link
                        v-if="checkLogIn()"
                        to="#"
                        class="h-[35px] flex justify-end pl-[10px] items-center bg-[#36394B] rounded-[5px] gap-4"
                    >
                        <span class="text-white text-sm font-semibold leading-[18px]">497.60$</span>
                        <button-green class="h-[35px] w-[33px]">
                            <span class="text-[19px] font-semibold leading-6">+</span>
                        </button-green>
                    </router-link>

                    <router-link
                        v-if="checkLogIn()"
                        :to="{name: 'Account'}"
                        class="flex gap-[18px] items-start"
                    >
                        <img class="w-[37px] h-[37px] object-cover rounded-[50%]" src="../assets/images/user_logo.png" alt="">
                        <span class="flex flex-col">
                            <span class="text-white text-sm font-extrabold leading-[18px]">Name of account</span>
                            <span class="text-white text-xs font-normal leading-[15px]">verylonglonglongmeil@rambler.ru</span>
                        </span>
                        <button class="bg-[#ffffff1a] shrink-0 rounded-[5px] w-[37px] h-[35px] flex items-center justify-center">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464466C7.97631 0.269204 7.65973 0.269204 7.46447 0.464466C7.2692 0.659728 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM0 4.5H11V3.5H0V4.5Z" fill="white"/>
                            </svg>
                        </button>
                    </router-link>

                    <div v-if="!checkLogIn()" class="flex items-center gap-[15px]">
                        <router-link :to="{name: 'Register'}">
                            <button-picton class="h-[46px] w-[198px] gap-10">
                                <span>REGISTRATION</span>
                                <img src="../assets/images/icons/arrow-rigth.svg" alt="">
                            </button-picton>
                        </router-link>
                        <router-link :to="{name: 'LogIn'}">
                            <button-green class="h-[46px] w-[136px] gap-10">
                                <span>Login</span>
                                <img src="../assets/images/icons/arrow-rigth.svg" alt="">
                            </button-green>
                        </router-link>
                    </div>

                    <div class="flex relative">
                        <button @click="langListToggle()" class="relative flex items-center gap-[13px]">
                            <span class="w-[33px] h-[33px] rounded-full overflow-hidden flex items-center justify-center">
                                <img :src="`https://flagsapi.com/${value.flag}/flat/64.png`" class="w-full h-full object-cover scale-[2.5]" alt="">
                            </span>
                            <span v-if="!checkLogIn()" class="block text-white text-[15px] font-bold leading-[19px] tracking-[0%] text-left uppercase">{{ value.name }}</span>
                        </button>
                        <ul class="absolute bg-white w-full min-w-[70px] bottom-[-10px] translate-y-full gap-0" :class="lang_list_class">
                            <li 
                                @click="selectLang(item)"
                                v-for="(item, i) in lang_list"
                                :key="i"
                                class="flex cursor-pointer items-center justify-between py-1 px-[6px] hover:bg-[#221B4E] hover:text-white"
                            >
                                <img :src="`https://flagsapi.com/${item.flag}/flat/64.png`" width="25" class="object-cover" alt="">
                                <span class="text-md uppercase font-semibold">{{ item.name }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main-container>
    </header>
</template>
