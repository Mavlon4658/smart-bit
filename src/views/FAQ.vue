<script>
export default {
    name: "FAQ",
    data () {
        return {
            tab_head: [
                'Public answers',
                'Finance',
                'Trading',
            ],
            tab_current: 'Public answers',
            question_list: [
                {name: 'What are binary options?', description: ''},
                {name: 'What is a "Call" option?', description: ''},
                {name: 'What return will I get for a successful investment?', description: ''},
                {name: 'How long does the deal last?', description: ''},
                {name: 'Could i finish the deal before expiration time?', description: ''},
            ],
            tab_body: {
                'Public answers': [
                    {name: 'What are binary options?', description: ''},
                    {name: 'What is a "Call" option? ', description: 'An option that provides the holder with a profit when the underlying asset increases in price compared with the level it was purchased at.'},
                    {name: 'What return will I get for a successful investment?', description: ''},
                    {name: 'How long does the deal last?', description: ''},
                    {name: 'Could i finish the deal before expiration time?', description: ''},
                    {name: 'What return will I get for a successful investment?', description: ''},
                    {name: 'How long does the deal last?', description: ''},
                    {name: 'Could i finish the deal before expiration time?', description: ''},
                    {name: 'What return will I get for a successful investment?', description: ''},
                    {name: 'How long does the deal last?', description: ''},
                    {name: 'Could i finish the deal before expiration time?', description: ''},
                ],
                'Finance': [
                    {name: 'What are binary options?', description: ''},
                    {name: 'How long does the deal last?', description: ''},
                    {name: 'Could i finish the deal before expiration time?', description: ''},
                    {name: 'What return will I get for a successful investment?', description: ''},
                    {name: 'What is a "Call" option? ', description: 'An option that provides the holder with a profit when the underlying asset increases in price compared with the level it was purchased at.'},
                    {name: 'What return will I get for a successful investment?', description: ''},
                    {name: 'How long does the deal last?', description: ''},
                    {name: 'Could i finish the deal before expiration time?', description: ''},
                ],
                'Trading': [
                    {name: 'Could i finish the deal before expiration time?', description: ''},
                    {name: 'What return will I get for a successful investment?', description: ''},
                    {name: 'What are binary options?', description: ''},
                    {name: 'What is a "Call" option? ', description: 'An option that provides the holder with a profit when the underlying asset increases in price compared with the level it was purchased at.'},
                    {name: 'How long does the deal last?', description: ''},
                    {name: 'Could i finish the deal before expiration time?', description: ''},
                    {name: 'What return will I get for a successful investment?', description: ''},
                    {name: 'What return will I get for a successful investment?', description: ''},
                    {name: 'How long does the deal last?', description: ''},
                    {name: 'How long does the deal last?', description: ''},
                    {name: 'Could i finish the deal before expiration time?', description: ''},
                ],
            }
        }
    }
}
</script>

<template>
    <div class="relative z-[1]">
        <img class="h-[200px] w-full absolute top-0 left-0 z-[1] object-cover object-bottom" src="../assets/images/header_bg.png" alt="">
        <main-container class="relative pt-[150px] lg:pt-[202px] pb-5 sm:pb-[136px]">
            <div class="border w-[1026px] h-[880px] absolute z-[-1] top-[107px] left-[-351px] rounded-[50%] blur-[250px] bg-[#D8DBFF]"></div>
            <img class="absolute z-[-1] right-[-22px] top-[196px] grayscale blur-[10px]" src="../assets/images/faq_bg.png" alt="">
            <div class="w-[1026px] h-[880px] border absolute z-[-1] right-[-224px] top-[761px] rounded-[50%] bg-[#D8DBFF] blur-[500px]"></div>
            <div class="relative z-[3]">
                <h1 class="text-[#1f263d] mb-[25px] lg:text-[55px] text-4xl font-extrabold lg:leading-[70px] tracking-[0%]">Frequently asked Questions</h1>
                <div class="flex gap-4 lg:gap-[22px] mb-5 sm:mb-[49px] overflow-x-scroll sm:overflow-x-visible w-[calc(100%_+_40px)] -ml-5 scrollbar px-5">
                    <button-blue
                        v-for="(item, i) in tab_head"
                        :key="i"
                        @click="tab_current = item"
                        class="pt-[10px] lg:pt-[14px] pb-2 lg:pb-[11px] px-8 lg:px-[67px]"
                        :class="{
                            'bg-white !text-[#515971] font-medium border shadow-[0px_4px_70px_0px_#a760f426] backdrop-blur-[26px] border-solid border-[#dfe5f9]': tab_current != item
                        }"
                    >
                        <span class="text-base lg:[22px] whitespace-nowrap">{{ item }}</span>
                    </button-blue>
                </div>
                <main-accordion :options="tab_body[tab_current]"></main-accordion>
            </div>
        </main-container>
    </div>
</template>