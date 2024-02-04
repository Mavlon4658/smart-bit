<script>
export default {
    name: 'MainAccordion',
    props: {
        options: {
            type: Array,
            default: [],
        }
    },
    data () {
        return {
            expanded: null,
            demo_text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore sit unde harum debitis, at ullam officiis ut, neque voluptas laudantium possimus. Voluptatem ducimus unde sint, animi impedit earum a fugit quasi? Est sapiente earum omnis fugiat dignissimos unde, soluta recusandae eius corrupti rem deserunt odio doloremque eum! Adipisci, error nemo. Ratione ipsam soluta laboriosam earum rem quia assumenda maiores qui vero molestiae maxime, blanditiis porro explicabo aspernatur laborum deserunt adipisci illo obcaecati doloribus quod id sint ullam in. Aliquid alias voluptatem numquam totam repudiandae a incidunt nam, quo molestiae tempore labore, maxime hic! Sit magnam rerum quod reprehenderit minima dolores?'
        }
    }
}
</script>

<template>
    <div class="flex flex-col gap-6">
        <div class="shadow-[0px_4px_70px_0px_rgba(167,96,244,0.15)] rounded-[40px] bg-white" v-for="(item, i) in options" :key="i">
            <button 
                :id="`faqs-title-0${i}`" 
                type="button"
                class="flex items-center justify-between w-full text-left pt-7 pb-[25px] px-[42px]"
                @click="expanded == i ? expanded = null : expanded = i" 
                :aria-expanded="expanded == i" 
                :aria-controls="`faqs-text-0${i}`"
            >
                <span class="text-[#495381] text-[22px] font-medium leading-9 tracking-[0%]">{{ item.name }}</span>
                <svg class="fill-[#735cff] shrink-0 ml-8" width="19" height="19" xmlns="http://www.w3.org/2000/svg">
                    <rect y="7" width="19" height="5" rx="1"
                        class="transform origin-center transition duration-200 ease-out"
                        :class="{ '!rotate-180': expanded == i }" />
                    <rect y="7" width="19" height="5" rx="1"
                        class="transform origin-center rotate-90 transition duration-200 ease-out"
                        :class="{ '!rotate-180': expanded == i }" />
                </svg>
            </button>
            <div 
                :id="`faqs-text-0${i}`"
                role="region"
                :aria-labelledby="`faqs-title-0${i}`"
                class="grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out"
                :class="expanded == i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
            >
                <div class="overflow-hidden">
                    <p class="pb-[26px] px-[42px] text-[#495381] text-[22px] font-medium leading-[29px] tracking-[0%]">
                        {{ item.description || demo_text }}
                        
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>