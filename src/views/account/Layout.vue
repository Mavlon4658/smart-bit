<script>
export default {
    name: "Layout",
    data () {
        return {
            tab_head: [
                {title: 'Trade', path_name: 'Trade'},
                {title: 'Robot', path_name: 'Robot'},
                {title: 'Deposit', path_name: 'Deposit'},
                {title: 'Withdrawal', path_name: 'Withdrawal'},
                {title: 'Transactions', path_name: 'Transaction'},
                {title: 'Bonuses', path_name: 'AccountBonus'},
                {title: 'History', path_name: 'History'},
            ]
        }
    },
    mounted () {
        let mouseDown = false;
        let startX, scrollLeft;
        const slider = this.$refs.link_wrap;

        if (slider) {
            const startDragging = (e) => {
                mouseDown = true;
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            }
            
            const stopDragging = (e) => {
                mouseDown = false;
            }
            
            const move = (e) => {
                e.preventDefault();
                if (!mouseDown) { return; }
                const x = e.pageX - slider.offsetLeft;
                const scroll = x - startX;
                slider.scrollLeft = scrollLeft - scroll;
            }
            
            slider.addEventListener('mousemove', move, false);
            slider.addEventListener('mousedown', startDragging, false);
            slider.addEventListener('mouseup', stopDragging, false);
            slider.addEventListener('mouseleave', stopDragging, false);
        }
    }
}
</script>

<template>
    <main-container class="pb-5 sm:pb-0">
        <div ref="link_wrap" class="px-5 -ml-5 w-[calc(100%_+40px)] scrollbar overflow-y-scroll">
            <div class="pt-9 pb-9 xl:pb-14 grid grid-cols-7 gap-3 xl:gap-5 w-[1000px] xl:w-auto">
                <router-link
                    :to="item.path_name != '' ? {name : item.path_name}: '#'"
                    v-for="(item, i) in tab_head"
                    :key="i"
                    class="flex items-center justify-center pt-3 pb-[9px] text-center shadow-[0px_0px_31.4px_0px_#daddff] rounded-[5px] text-[#202337] text-base xl:text-lg font-bold xl:leading-[23px]"
                    :class="{
                        'bg-[#366aef] !text-white': item.path_name == $route.name || ($route.name == 'RobotKey' && item.title == 'Robot')
                    }"
                >
                    {{ $tm('account.tab_head')[i] }}
                </router-link>
            </div>
        </div>
        <div class="min-h-[600px] lg:min-h-[848px]">
            <router-view></router-view>
        </div>
    </main-container>
</template>

