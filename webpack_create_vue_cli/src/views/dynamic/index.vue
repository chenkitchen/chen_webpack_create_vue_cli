<template>
    <div class="dynamic_container">
        <el-table :data="tableDate" height="250" border style="width: 100%">
            <el-table-column prop="name" label="um名" min-width="180">
                <template slot-scope="scope">
                    <!-- <span>{{ scope.row.name }}</span> -->
                    <el-input placeholder="请输入内容" v-model="scope.row.name"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="rules" label="权限" min-width="180">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            tableDate: []
        }
    },
    async mounted() {
        let { data } = await axios.post('http://localhost:3008/rulesList')
        // console.log(data.result);
        this.tableDate = data.result.tableDate;
    }
}
</script>
<style lang="less" scoped></style>