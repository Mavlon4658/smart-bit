<script>

export default {
    name: 'RobotLyout',
    data () {
        return {}
    },
    methods: {
    }
}
</script>

<template>
    <div class="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-[122px] mb-10 lg:mb-[50px]">
        <div>
            <div class="mb-4 text-[#1f263d] text-3xl sm:text-[40px] font-extrabold sm:leading-[51px]">Запуск автоматической торговли</div>
            <p class="font-normal text-sm leading-[18px] text-[#202337]">Для запуска автоматической торговли необходимо запустить алгоритм, нажав на кнопку Старт. <br> Торговый алгоритм остановится автоматически по истечению каждых календарных суток GMT (по Гринвичу).</p>
        </div>
        <div v-if="$route.name != 'RobotKey'" class="bg-[#9499A1] py-4 px-[26px] rounded-[5px] min-w-72">
            <h2 class="text-white text-[17px] font-extrabold">Ваш ключ VIP</h2>
            <p class="text-white text-sm font-light mb-2">Действителен до  29.02.2024</p>
            <router-link :to="{name: 'RobotKey'}">
                <button-green class="h-[27px]">
                    <span class="text-white text-[13px] px-6 font-extrabold leading-[17px] block normal-case">Сменить ключ</span>
                </button-green>
            </router-link>
        </div>
    </div>

    <router-view></router-view>
</template>

