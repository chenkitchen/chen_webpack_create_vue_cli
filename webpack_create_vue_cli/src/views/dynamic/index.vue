<template>
  <div class="dynamic_container">
    <el-table :data="tableDate" height="250" border style="width: 100%">
      <el-table-column prop="name" label="um名" min-width="180">
        <template slot-scope="scope">
          <!-- <span>{{ scope.row.name }}</span> -->
          <el-input
            placeholder="请输入内容"
            v-model="scope.row.name"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="rules" label="权限" min-width="180">
      </el-table-column>
    </el-table>
    <link rel="resource" type="application/l10n" href="./viewer.properties">
    <!-- <div class="test_properties">
      <ul>
        <li>{{ t(printing_not_supported) }}</li>
        <li>{{ t(printing_not_ready) }}</li>
        <li>{{ t(web_fonts_disabled) }}</li>
      </ul>
    </div> -->
    <vue-pdf-app
        style="height: 600px; width: 900px"
        pdf="http://127.0.0.1:5500/public/test.pdf"
        theme="dark"
        :config="config"
        v-if="true"
      ></vue-pdf-app>
  </div>
</template>
<script>
import axios from "axios";
// import properties from './messages.properties';
// const PropertiesParser = require('properties-parser');
// const properties = require("properties");
import VuePdfApp from 'vue-pdf-app'
import 'vue-pdf-app/dist/icons/main.css'
const getSidebar = () => ({
  viewThumbnail: true,
  viewOutline: true,
  viewAttachments: true,
});
const getSecondaryToolbar = () => ({
  secondaryPresentationMode: true,
  secondaryOpenFile: false,
  secondaryPrint: false,
  secondaryDownload: false,
  secondaryViewBookmark: false,
  firstPage: true,
  lastPage: true,
  pageRotateCw: true,
  pageRotateCcw: true,
  cursorSelectTool: false,
  cursorHandTool: true,
  scrollVertical: true,
  scrollHorizontal: true,
  scrollWrapped: true,
  spreadNone: true,
  spreadOdd: true,
  spreadEven: true,
  documentProperties: true,
});
const getToolbarViewerLeft = () => ({
  findbar: true,
  previous: true,
  next: true,
  pageNumber: true,
});
const getToolbarViewerRight = () => ({//默认是 true 
  presentationMode: true,
  openFile: false,
  print: false,
  download: false,
  viewBookmark: false,
});
const getToolbarViewerMiddle = () => ({
  zoomOut: true,
  zoomIn: true,
  scaleSelectContainer: true,
});
const getToolbar = () => ({
  toolbarViewerLeft: getToolbarViewerLeft(),
  toolbarViewerRight: getToolbarViewerRight(),
  toolbarViewerMiddle: getToolbarViewerMiddle(),
});

export default {
    components: {
    VuePdfApp
  },
  data() {
    return {
      tableDate: [],
      // messages: $$.parse(properties) //TODO: 会报错
      greeting: null,
      config: {
        sidebar: getSidebar(),
        secondaryToolbar: getSecondaryToolbar(),
        toolbar: getToolbar(),
        errorWrapper: true,
      }
    };
  },
  async mounted() {
    let dom = $('.dynamic_container')
    console.log(dom);
    let { data } = await axios.post("http://localhost:3008/rulesList");
    // console.log(data.result);
    this.tableDate = data.result.tableDate;
  },
  methods: {
    t(key) {
    //   return this.messages[key];
        return this.greeting[key]
    },
    // loadProperties() {
    //   const path = resolve(__dirname, "./messages.properties");
    //   const content = readFileSync(path, "utf-8");

    //   properties.parse(content, { path: path }, (error, result) => {
    //     if (error) {
    //       throw error;
    //     }
    //     this.greeting = result;
    //   });
    // },
  },
};
</script>
<style lang="less" scoped></style>