<script>
import TradeGraphic from '../components/TradeGraphic.vue';

export default {
    name: "Home",
    components: {
        TradeGraphic
    },
    data () {
        return {
            countr_list: [
                'Country',
                'Country 1',
                'Country 2',
                'Country 3',
                'Country 4',
                'Country 5',
            ],
            question_list: [
                {name: 'What are binary options?', description: ''},
                {name: 'What is a "Call" option?', description: ''},
                {name: 'What return will I get for a successful investment?', description: ''},
                {name: 'How long does the deal last?', description: ''},
                {name: 'Could i finish the deal before expiration time?', description: ''},
            ]
        }
    }
}
</script>

<template>
    <div class="">
        <section class="relative">
            <img class="absolute top-0 left-0 w-full h-full object-cover object-bottom z-[-1]" src="../assets/images/home_bg.png" alt="">
            <BgParticles idName="1"/>
            <main-container class="relative">
                <img class="absolute hidden lg:block top-[47px] left-[-370px]" src="../assets/images/home_left_coin.png" alt="">
                <img class="absolute hidden lg:block top-[71px] right-[-244px]" src="../assets/images/home_right_coin.png" alt="">
                <div class="relative flex xl:block flex-col gap-8 lg:flex-row items-center justify-between pt-[100px] md:pt-[150px] lg:pt-[202px] md:pb-[214px] pb-[150px]">
                    <div class="w-full lg:w-auto">
                        <h1 class="text-white md:text-[80px] sm:text-[60px] text-[40px] font-extrabold md:leading-[102px] tracking-[0%] text-left">Smart-bit-trade</h1>
                        <h3 class="text-[rgb(54,190,248)] md:text-[40px] sm:text-[35px] text-[30px] font-semibold md:leading-[51px] tracking-[0%] text-left my-5 md:my-[30px]">is a next-generation <br> trading platform</h3>
                        <p class="text-white md:text-[22px] text-[base] font-normal tracking-[0%] text-left md:w-[522px]">Register and get the opportunity to test your skills on a demo account with a balance of 1000 dollars. Improve your trading skills using advanced tools from the market leader in binary options.</p>
                    </div>
    
                    <div class="xl:absolute w-full md:w-[405px] top-[190px] right-[100px] sm:pt-[39px] pt-6 sm:pr-[35px] pr-5 sm:pl-[36px] pl-5 sm:pb-[32px] pb-6 shadow-[0px_0px_60.6px_0px_rgba(54,190,248,0.5)] sm:rounded-[25px] rounded-2xl bg-[#fcfffe]">
                        <h2 class="text-[#495381] sm:text-2xl text-xl font-bold sm:leading-[21px] tracking-[0%] text-center sm:mb-[23px] mb-4">Start <span class="text-[#57d188]">to trade now!</span></h2>
                        <div class="flex flex-col gap-[15px] items-center">
                            <main-input placeholder="Your name"></main-input>
                            <main-select :options="countr_list"></main-select>
                            <main-input type="email" placeholder="E-mail"></main-input>
                            <input-phone width="56"></input-phone>
                            <div class="text-[#735cff] w-full text-[8px] font-normal leading-6 tracking-[0%] text-left">
                                By pressing the button accept our <a class="border-b-[#735cff] border-b border-solid" href="#">Terms and Conditions</a>
                            </div>
                            <button-picton class="w-[211px] h-[43px]">Open an account</button-picton>
                        </div>
                    </div>
                </div>
            </main-container>
        </section>
    
        <section>
            <main-container class="flex flex-col md:flex-row sm:items-center justify-center md:pt-8 pt-0 pb-[43px] lg:gap-[172px] md:gap-[100px] gap-[50px]">
                <div class="relative w-[300px] md:w-auto shrink-0">
                    <img class="lg:h-[380px] sm:h-[300px] h-[250px]" src="../assets/images/clock.png" alt="">
                    <h2 class="absolute sm:top-[127px] top-[80px] lg:right-[-10px] sm:right-[10px] right-[60px] text-[#282854] lg:text-[180px] text-[120px] font-semibold lg:leading-[64px] leading-[50px] tracking-[0%]">60</h2>
                    <span class="absolute lg:top-[246px] sm:top-[210px] top-[160px] lg:right-[-110px] sm:right-[-50px] right-0 text-[#898989] lg:text-[55px] text-[40px] font-normal lg:leading-6 leading-5 tracking-[0%]">seconds</span>
                </div>
                <div class="md:w-[636px] flex flex-col gap-5 md:gap-10 text-[#373737] md:text-[26px] text-xl font-normal md:leading-[33px] tracking-[0%]">
                    <p>Trade in 60 seconds like a digital commerce, with one exception - all options are closed after 60 seconds.</p>
                    <p>This type of trading is popular with traders who want to make money on short-term market trends.</p>
                </div>
            </main-container>
        </section>

        <section class="relative bg-gradient-violet pb-[70px] pt-[59px]">
            <BgParticles idName="2"/>
            <main-container>
                <trade-graphic class="relative"></trade-graphic>
            </main-container>
        </section>

        <section class="">
            <main-container class="relative sm:pb-[55px] pb-5 md:pt-[102px] pt-[50px]">
                <img src="../assets/images/ellips_bg.png" class="absolute hidden md:block h-[880px] z-[-1] left-[-300px] top-0 scale-[2]" alt="">
                <img src="../assets/images/bitcoin_bg.png" class="absolute hidden md:block right-[-245px] top-[72px] z-[-1] grayscale scale-[1.8] h-[812px]" alt="">
                <h2 class="text-[#282b51] sm:mb-[47px] mb-5 md:text-5xl sm:text-4xl text-3xl font-bold md:leading-[64px] tracking-[0%]">Frequently asked Questions</h2>
                <main-accordion class="max-w-[995px]" :options="question_list"></main-accordion>
            </main-container>
        </section>
    </div>
</template>
