<script>
export default {
    name: "Footer",
    data () {
        return {
            links: [
                'Home',
                'Rules',
                'Faq',
                'About Us',
                'Bonus',
            ],
            links2: [
                'Glossary',
                'Disclaimer',
                'Privacy',
                '60 seconds Trade',
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
                            <div class="text-white sm:mt-[26px] mt-5 text-[11px] font-light leading-[14px] tracking-[0%] uppercase">© 2023 Cryptonio.All Rights Reserved.</div>
                        </div>
                        <div class="flex md:gap-[106px] gap-10">
                            <div class="flex flex-col gap-3">
                                <router-link
                                    to="#"
                                    v-for="(item, i) in links"
                                    :key="i"
                                    class="text-white pl-16 sm:pl-0 text-right sm:text-left text-base font-bold leading-[125%] tracking-[0%]"
                                >
                                    {{ item }}
                                </router-link>
                            </div>
                            <div class="flex flex-col gap-3">
                                <router-link
                                    to="#"
                                    v-for="(item, i) in links2"
                                    :key="i"
                                    class="text-white text-base font-bold leading-[125%] tracking-[0%]"
                                >
                                    {{ item }}
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row items-center w-full sm:w-auto text-center sm:text-left sm:items-start sm:gap-[45px] gap-8">
                        <div>
                            <div class="text-white text-base font-bold leading-[125%] tracking-[0%]">Subscribe For Get Updates</div>
                            <main-input type="email" placeholder="Your mail" class="!bg-transparent w-[385px] mt-[14px] mb-5 block"></main-input>
                            <div class="text-xs font-normal leading-[15px] tracking-[0%] text-white">
                                For all questions please contact customer support:
                                <br>
                                <a class="text-[#57d188] font-semibold" href="#">support@help-bitrading.net</a>
                            </div>
                        </div>
                        <router-link :to="{name: 'Register'}">
                            <button-picton class="h-[46px] w-[198px]">
                                <span>REGISTRATION</span>
                                <img src="../assets/images/icons/arrow-rigth.svg" alt="">
                            </button-picton>
                        </router-link>
                    </div>
                </div>
            </div>
            <p class="text-white text-[10px] text-center sm:text-left font-light leading-[13px] tracking-[0%] mt-[52px]">
                You haven`t made any investments in Option builder tool yet. To make an investment you should: Choose the asset you want to trade with, enter your current investment amount. And choose how will asset behavior: if it will rise - press HIGH button, other way press LOW button. Select the profit and the pay off level. Confirm your deal with the Confirmal button. Due to different time zones at the worldwide stocks, some assets could be inactive or might has limited availability. If the asset`s value didn`t change sinse made an investment, the full investment price will be returned to investor.
                Legal: market-bitrading.net is a trading name of Market BitTrading, registration number: IBC 2015 (Suite 305, Griffith Corporate Centre, Beachmont, Kingstown, St. Vincent and the Grenadines)
            </p>
        </main-container>
    </footer>
</template>
