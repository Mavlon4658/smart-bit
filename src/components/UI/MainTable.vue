<script>
export default {
    name: "MainTable",
    props: {
        table: {
            type: Object,
            default: {}
        },
        head_size: {
            type: Number,
            default: 0
        },
        body_size: {
            type: Number,
            default: 0,
        },
        table_width: {
            type: Number,
            default: 0,
        }
    },
    data () {
        return {
            
        }
    },
    created() {
        window.addEventListener("resize", this.windowEventHandler);
    },
    destroyed() {
        window.removeEventListener("resize", this.windowEventHandler);
    },
    mounted () {
        this.windowEventHandler()

        let mouseDown = false;
        let startX, scrollLeft;
        const slider = this.$refs.table_wrap;

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
    },
    methods: {
        grid_cols () {
            let cols = [ 'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6', 'grid-cols-7', 'grid-cols-8', 'grid-cols-9', 'grid-cols-10', 'grid-cols-11', 'grid-cols-12' ]
            return cols[this.table.head.length - 1]
        },
        windowEventHandler () {
            const el = this.$refs.t;
            if (window.innerWidth <= this.table_width + 40 && this.table_width != 0) {
                el.style.width = this.table_width + 'px';
            } else {
                el.style.width = '100%';
            }
        }
    },
}
</script>

<template>
    <div ref="table_wrap" class="overflow-x-scroll w-[calc(100%_+40px)] -ml-5 px-5 scrollbar">
        <table ref="t" class="w-full text-center border-separate" style="border-spacing: 0 20px !important;">
            <thead>
                <tr class="">
                    <td
                        v-for="(item, i) in table.head"
                        :key="i"
                        class="text-white bg-[#515971] font-semibold leading-6 text-center whitespace-nowrap pt-[10px] pb-[11px]"
                        :class="{
                            'rounded-tl-md rounded-bl-md pl-5': i == 0,
                            'rounded-tr-md rounded-br-md pr-10': table.head.length == i + 1,
                            'text-base': head_size == 0,
                        }"
                        :style="head_size != 0 ? `font-size: ${head_size}px;`: ''"
                    >
                        {{ item }}
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(row, row_id) in table.body"
                    :key="row_id"
                    class="rounded-md overflow-hidden border"
                >
                    <td
                        v-for="(col, col_id) in row"
                        :key="col_id"
                        class="text-center text-[#5b6076] bg-white pt-[7px] pb-[10px] border-y-[#DBDBDB] border-t border-solid border-b"
                        :class="{
                            'border-l-[#DBDBDB] border-l rounded-tl-md rounded-bl-md pl-5': col_id == 0,
                            'border-r-[#DBDBDB] border-r rounded-tr-md rounded-br-md pr-10': row.length == col_id + 1,
                            [col.className]: col.className != '',
                            'text-[15px]': body_size == 0
                        }"
                        :style="body_size != 0 ? `font-size: ${body_size}px`: ''"
                    >
                        {{ col.val }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
