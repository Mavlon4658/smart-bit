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
            lang_list: [
                {name: "En", flag: 'GB'},
                {name: "Ru", flag: 'RU'}
            ],
            value: {name: "En", flag: 'GB'},
            lang_list_class: 'hidden'
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
        }
    }
}
</script>

<template>
    <header class="absolute z-10 w-full left-0 top-[27px]">
        <main-container>
            <div class="flex items-center justify-between">
                <Logo />
                
                <nav class="flex items-center gap-10">
                    <router-link
                        class="text-white text-lg font-bold leading-[23px] tracking-[0%] text-left uppercase"
                        :to="{name: item.path}"
                        v-for="(item, i) in navs"
                        :key="i"
                    >
                        {{ item.title }}
                    </router-link>
                </nav>

                <div class="flex items-center gap-[33px]">
                    <div class="flex items-center gap-[15px]">
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
                            <span class="block text-white text-[15px] font-bold leading-[19px] tracking-[0%] text-left uppercase">{{ value.name }}</span>
                        </button>
                        <ul class="absolute bg-white w-full bottom-[-10px] translate-y-full gap-0" :class="lang_list_class">
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
