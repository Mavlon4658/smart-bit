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
    }
}
</script>

<template>
    <main-container>
        <div class="mt-9 mb-14 grid grid-cols-7 gap-5">
            <router-link
                :to="item.path_name != '' ? {name : item.path_name}: '#'"
                v-for="(item, i) in tab_head"
                :key="i"
                class="pt-3 pb-[9px] text-center shadow-[0px_0px_31.4px_0px_#daddff] rounded-[5px] text-[#202337] text-lg font-bold leading-[23px]"
                :class="{
                    'bg-[#366aef] !text-white': item.path_name == $route.name || ($route.name == 'RobotKey' && item.title == 'Robot')
                }"
            >
                {{ item.title }}
            </router-link>
        </div>
        <div class="min-h-[848px]">
            <router-view></router-view>
        </div>
    </main-container>
</template>

