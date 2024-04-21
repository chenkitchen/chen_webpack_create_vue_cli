<template >
    <div>
        <div v-for="(item, idx) in arr" :key="idx">
            {{ item }}
        </div>
        <button @click="handler">change</button>
        <div>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称">
                    <el-input v-model.trim="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="活动性质">
                    <el-checkbox-group v-model="form.type">
                    <el-checkbox label="美食/餐厅线上活动" value="0" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" value="1" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" value="2" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" value="3" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button @click="init">取消</el-button>
                </el-form-item>
                </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr: [1, 6, 3, 4, 5],
            form:{
                name:'',
                region:'',
                type:[]
            },
            oldForm:{}
        }
    },
    mounted(){
        this.init()
        let paybacks = {
            name:'oldName',
            region:'beijing',
            type:['美食/餐厅线上活动','线下主题活动']
        }
        Object.keys(this.form).forEach(item=>{
            this.form[item] = paybacks[item]
        })
        this.saveInit()
    },
    methods: {
        handler() {
            this.arr.sort() //vue2 中也会 在页面上触发 渲染
        },
        init(){
            Object.keys(this.form).forEach(item=>{
                if(item === 'type'){
                    this.form[item] = []
                }else{
                    this.form[item] = ''
                }
            })
        },
        onSubmit(){
            let res = this.comparisonObj(this.form,JSON.parse(this.oldForm))
            if(typeof res === 'boolean' && !res){
                this.$message({ message: '有新增元素', duration: 500000 })
            }else if(res.length !== 0){
                this.$message({ message: `有改变的元素是${res.join(',')}`, duration: 500000 } )
            }else{
                this.$message({ message: '值无改变', duration: 500000 } )
            }
        },
        comparisonObj(obj1,obj2){
            // obj1 新对象， obj2 老对象
            let arr1 =  Object.keys(obj1)
            let arr2 =  Object.keys(obj2)
            let len1 = arr1.length
            let len2 = arr2.length
            if(len1 !== len2) return false
            let res = []
            arr1.forEach(key=>{
                let str1 = JSON.stringify(obj1[key])
                let str2 = JSON.stringify(obj2[key])
                if(str1 !== str2){
                    res.push(key)
                }
            })
            return res
        },
        saveInit(){
            this.oldForm = JSON.stringify(this.form)
        }
    }
}
</script>
<style lang="">
    
</style>