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
    <div class="w-full overflow-hidden">
        <section class="relative">
            <img class="absolute top-0 left-0 w-full h-full object-cover object-bottom z-[-1]" src="../assets/images/home_bg.png" alt="">
            <main-container class="relative">
                <img class="absolute top-[47px] left-[-370px]" src="../assets/images/home_left_coin.png" alt="">
                <img class="absolute top-[71px] right-[-244px]" src="../assets/images/home_right_coin.png" alt="">
                <div class="relative pt-[202px] pb-[214px]">
                    <div>
                        <h1 class="text-white text-[80px] font-extrabold leading-[102px] tracking-[0%] text-left">Smart-bit-trade</h1>
                        <h3 class="text-[rgb(54,190,248)] text-[40px] font-semibold leading-[51px] tracking-[0%] text-left my-[30px]">is a next-generation <br> trading platform</h3>
                        <p class="text-white text-[22px] font-normal tracking-[0%] text-left w-[522px]">Register and get the opportunity to test your skills on a demo account with a balance of 1000 dollars. Improve your trading skills using advanced tools from the market leader in binary options.</p>
                    </div>
    
                    <div class="absolute w-[405px] top-[190px] right-[100px] pt-[39px] pr-[35px] pl-[36px] pb-[32px] shadow-[0px_0px_60.6px_0px_rgba(54,190,248,0.5)] rounded-[25px] bg-[#fcfffe]">
                        <h2 class="text-[#495381] text-2xl font-bold leading-[21px] tracking-[0%] text-center mb-[23px]">Start <span class="text-[#57d188]">to trade now!</span></h2>
                        <div class="flex flex-col gap-[15px] items-center">
                            <main-input placeholder="Your name"></main-input>
                            <main-select :options="countr_list"></main-select>
                            <main-input type="email" placeholder="E-mail"></main-input>
                            <input-phone></input-phone>
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
            <main-container class="flex items-center justify-center pt-8 pb-[43px] gap-[172px]">
                <div class="relative">
                    <img class="h-[380px]" src="../assets/images/clock.png" alt="">
                    <h2 class="absolute top-[127px] right-[-10px] text-[#282854] text-[180px] font-semibold leading-[64px] tracking-[0%]">60</h2>
                    <span class="absolute top-[246px] right-[-110px] text-[#898989] text-[55px] font-normal leading-6 tracking-[0%]">seconds</span>
                </div>
                <div class="w-[636px] flex flex-col gap-10 text-[#373737] text-[26px] font-normal leading-[33px] tracking-[0%]">
                    <p>Trade in 60 seconds like a digital commerce, with one exception - all options are closed after 60 seconds.</p>
                    <p>This type of trading is popular with traders who want to make money on short-term market trends.</p>
                </div>
            </main-container>
        </section>

        <section class="bg-gradient-violet pb-[70px] pt-[59px]">
            <trade-graphic></trade-graphic>
        </section>

        <section>
            <main-container class="pb-[55px] pt-[102px]">
                <h2 class="text-[#282b51] mb-[47px] text-5xl font-bold leading-[64px] tracking-[0%]">Frequently asked Questions</h2>
                <main-accordion class="max-w-[995px]" :options="question_list"></main-accordion>
            </main-container>
        </section>
    </div>
</template>
