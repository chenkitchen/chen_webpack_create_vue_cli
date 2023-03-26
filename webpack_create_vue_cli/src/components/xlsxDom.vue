<template >
    <div id="xlsxBox">
        <div class="show_form">
            <div class="show_form_item" v-for="(item, idx) in formData" :key="item + idx"
                :class="{ 'item_red': idx % 2 == 0 }">
                name: <input type="text" v-model="item.name">
                age: <input type="text" v-model="item.age">
            </div>
        </div>
        <button @click="downXlsx">点击下载xlsx</button>
        <table id="data_table" border="1" width="50%">
            <tbody>
                <tr>
                    <td>编号</td>
                    <td>名称</td>
                    <td>价格</td>
                    <td>日期</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>《Java架构师》</td>
                    <td>￥78.5</td>
                    <td>2018-10-11</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>《Python入门到精通》</td>
                    <td>￥65.3</td>
                    <td>2019-03-22</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>《JavaScript高级教程》</td>
                    <td>￥89.4</td>
                    <td>2017-04-13</td>
                </tr>
            </tbody>
        </table>
        <button @click="domExport">操作dom的导出方式</button>


        <label for="url_data">
            上传路径<input type="file" @change="changeURl" id="url_data" name="file" />
        </label>
        <button @click="readXlsx">上传后点击</button>

    </div>
</template>
<script>
import XLSX from 'xlsx'
export default {
    data() {
        return {
            formData: [{
                name: "zhangsan1",
                age: 30
            }, {
                name: "lisi1",
                age: 31
            }, {
                name: "wangwu1",
                age: 32
            }, {
                name: "zhaoliu1",
                age: 33
            }, {
                name: "sunqi1",
                age: 34,
                length: "hello"
            }],
            doubleData: [
                ['周一', '周二', '周三', '周四', '周五'],
                ['语文', '数学', '历史', '政治', '英语'],
                ['数学', '数学', '政治', '英语', '英语'],
                ['政治', '英语', '历史', '政治', '数学'],
            ],
            urlData: ''
        }
    },
    methods: {
        downXlsx() {
            let jsonWorkSheet = XLSX.utils.json_to_sheet(this.formData);
            let doubleSheet = XLSX.utils.aoa_to_sheet(this.doubleData)
            let workBook = {
                SheetNames: ['导出xlsx第一页', '导出数组看看'],
                Sheets: {
                    '导出xlsx第一页': jsonWorkSheet,
                    '导出数组看看': doubleSheet
                }
            };
            // 将workBook写入文件
            XLSX.writeFile(workBook, "./aa.xlsx");
        },
        domExport() {
            let ele = document.getElementById('data_table')
            let workSheet = XLSX.utils.table_to_book(ele, {
                sheet: "操作dom导出" // 工作表格名称
            });
            XLSX.writeFile(workSheet, './aaa.xlsx');
        },
        changeURl() {
            let path = document.getElementById('url_data').value
            this.urlData = path
        },
        readXlsx() {
            let workbook = XLSX.readFile(this.urlData); //mac的路径和win的路径解析不一样，导致报错
            let sheetNames = workbook.SheetNames;
            // 获取第一个workSheet
            let sheet1 = workbook.Sheets[sheetNames[0]];
            // console.log(sheet1);

            let range = XLSX.utils.decode_range(sheet1['!ref']);

            //循环获取单元格值
            for (let R = range.s.r; R <= range.e.r; ++R) {
                let row_value = '';
                for (let C = range.s.c; C <= range.e.c; ++C) {
                    let cell_address = { c: C, r: R }; //获取单元格地址
                    let cell = XLSX.utils.encode_cell(cell_address); //根据单元格地址获取单元格
                    //获取单元格值
                    if (sheet1[cell]) {
                        // 如果出现乱码可以使用iconv-lite进行转码
                        // row_value += iconv.decode(sheet1[cell].v, 'gbk') + ", ";
                        row_value += sheet1[cell].v + ", ";
                    } else {
                        row_value += ", ";
                    }
                }
                console.log(row_value);
            }
        }
    }
}
</script>
<style lang="less" scoped>
#xlsxBox {
    width: 100%;
    height: 200px;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
}

.item_red {
    background: gray;
    color: red;
}
</style>