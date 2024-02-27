<script>
export default {
    name: "Footer",
    data () {
        return {
            links: [
                {name: 'home', path: '#'},
                {name: 'rules', path: '#'},
                {name: 'faq', path: '#'},
                {name: 'about_us', path: '#'},
                {name: 'bonus', path: '#'},
            ],
            links2: [
                {name: 'glossary', path: '#'},
                {name: 'disclaimer', path: '#'},
                {name: 'privacy', path: '#'},
                {name: 'second_trade', path: '#'},
            ]
        }
    }
}
</script>

<template>
    <footer class="bg-[#202437] sm:bg-transparent relative z-[2]">
        <img class="absolute hidden sm:block top-0 left-0 w-full h-full object-cover object-top" src="../assets/images/footer_bg.png" alt="">
        <main-container class="relative sm:pt-[146px] pt-12 sm:pb-[70px] pb-12">
            <div>
                <div class="flex flex-col xl:flex-row justify-between items-start gap-8 xl:gap-0">
                    <div class="flex w-full flex-col sm:flex-row items-center sm:items-start xl:w-auto md:gap-[80px] gap-8">
                        <div class="flex sm:block flex-col sm:flex-row items-center">
                            <Logo />
                            <div class="text-white sm:mt-[26px] mt-5 text-[11px] font-light leading-[14px] tracking-[0%] uppercase">{{ $t('footer.copy') }}</div>
                        </div>
                        <div class="flex md:gap-[106px] gap-10">
                            <div class="flex flex-col gap-3">
                                <router-link
                                    :to="item.path"
                                    v-for="(item, i) in links"
                                    :key="i"
                                    class="text-white pl-16 sm:pl-0 text-right sm:text-left text-base font-bold leading-[125%] tracking-[0%]"
                                >
                                    {{ $t('footer.link_1.' + item.name) }}
                                </router-link>
                            </div>
                            <div class="flex flex-col gap-3">
                                <router-link
                                    :to="item.path"
                                    v-for="(item, i) in links2"
                                    :key="i"
                                    class="text-white text-base font-bold leading-[125%] tracking-[0%]"
                                >
                                {{ $t('footer.link_2.' + item.name) }}
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-center w-full sm:w-auto text-center sm:text-left sm:items-start sm:gap-[45px] gap-8">
                        <div>
                            <div class="text-white text-base font-bold leading-[125%] tracking-[0%]">{{ $t('footer.subscribe') }}</div>
                            <main-input type="email" :placeholder="$t('footer.email')" class="!bg-transparent w-[385px] mt-[14px] mb-5 block"></main-input>
                            <div class="text-xs font-normal leading-[15px] tracking-[0%] text-white">
                                {{ $t('footer.support') }}
                                <br>
                                <a class="text-[#57d188] font-semibold" href="#">support@help-bitrading.net</a>
                            </div>
                        </div>
                        <router-link :to="{name: 'Register'}">
                            <button-picton class="h-[46px] w-[198px]">
                                <span>{{ $t('sign_up') }}</span>
                                <img src="../assets/images/icons/arrow-rigth.svg" alt="">
                            </button-picton>
                        </router-link>
                    </div>
                </div>
            </div>
            <p class="text-white text-[10px] text-center sm:text-left font-light leading-[13px] tracking-[0%] mt-[52px]">
                {{ $t('footer.descriptions[0]') }}
                <br>
                {{ $t('footer.descriptions[1]') }}
            </p>
        </main-container>
    </footer>
</template>
