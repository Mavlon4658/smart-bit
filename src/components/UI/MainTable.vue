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
            }
        },
        data () {
            return {
                
            }
        },
        methods: {
            grid_cols () {
                let cols = [ 'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6', 'grid-cols-7', 'grid-cols-8', 'grid-cols-9', 'grid-cols-10', 'grid-cols-11', 'grid-cols-12' ]
                return cols[this.table.head.length - 1]
            }
        }
    }
</script>
<template>
    <table class="w-full text-center border-separate" style="border-spacing: 0 20px !important;">
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
</template>
