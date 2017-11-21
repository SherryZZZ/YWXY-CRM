<template>
  <div class="main email">
    <v-PageTitle vtitle="百度"></v-PageTitle>
    <div class="main-header">
      <ul class="ele-row">
      <li><a href="javascript:void(0)" class="">删除</a></li>
      <li>
        <el-dropdown>
          <span class="el-dropdown-link">标记为<i class="el-icon-arrow-down el-icon--right"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>已读</el-dropdown-item>
            <el-dropdown-item>未读</el-dropdown-item>
            <el-dropdown-item divided>重要邮件</el-dropdown-item>
            <el-dropdown-item>取消重要邮件</el-dropdown-item>
            <el-dropdown-item divided>待处理邮件</el-dropdown-item>
            <el-dropdown-item>取消待处理邮件</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li>
        <el-dropdown>
          <span class="el-dropdown-link">高级查看<i class="el-icon-arrow-down el-icon--right"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>已读</el-dropdown-item>
            <el-dropdown-item>未读</el-dropdown-item>
            <el-dropdown-item divided>含附件</el-dropdown-item>
            <el-dropdown-item>已回复</el-dropdown-item>
            <el-dropdown-item>未回复</el-dropdown-item>
            <el-dropdown-item>已转发</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li>
        <el-dropdown>
          <span class="el-dropdown-link">客户状态<i class="el-icon-arrow-down el-icon--right"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>私有客户</el-dropdown-item>
            <el-dropdown-item>公海客户</el-dropdown-item>
            <el-dropdown-item divided>冲突客户</el-dropdown-item>
            <el-dropdown-item>删除客户</el-dropdown-item>
            <el-dropdown-item divided>私有联系人</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li>
        <el-dropdown>
          <span class="el-dropdown-link">邮件目的<i class="el-icon-arrow-down el-icon--right"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>开发</el-dropdown-item>
            <el-dropdown-item>跟进</el-dropdown-item>
            <el-dropdown-item>报价</el-dropdown-item>
            <el-dropdown-item>合同</el-dropdown-item>
            <el-dropdown-item>收款</el-dropdown-item>
            <el-dropdown-item>服务</el-dropdown-item>
            <el-dropdown-item>试用</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li>
        <el-dropdown>
          <span class="el-dropdown-link">转发<i class="el-icon-arrow-down el-icon--right"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>转发选中的邮件</el-dropdown-item>
            <el-dropdown-item>以附件转发邮件</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li>
        <el-dropdown>
          <span class="el-dropdown-link">移动到<i class="el-icon-arrow-down el-icon--right"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>收件箱</el-dropdown-item>
            <el-dropdown-item>异常邮件</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
    </ul>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page.sync="currentPage" :page-sizes="[6, 12, 20]"
                     :page-size="12"
                     layout="total,prev,next,jumper"
                     :total="25">
      </el-pagination>
    </div>
    <p class="date">今天 <span>（100）</span></p>
    <div class="table">
      <el-table :data="tableList" style="width: 100%">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column label="标识" width="120">
          <template slot-scope="scope">
            <el-icon name="message"></el-icon>
          </template>
        </el-table-column>
        <el-table-column label="发件人" width="120">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.addresser }}</span>
          </template>
        </el-table-column>
        <el-table-column label="主题" width="600">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.theme }}</span>
          </template>
        </el-table-column>
        <el-table-column label="邮件来源" width="120">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.source }}</span>
          </template>
        </el-table-column>
        <el-table-column label="日期" width="120">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="大小" width="120">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.size }}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page.sync="currentPage" :page-sizes="[6, 12, 20]"
                     :page-size="12"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="25">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import vPageTitle from '../../common/pageTitle.vue'
  export default {
    components: {
      vPageTitle
    },
    data () {
      return {
        date: '',
        tableList: [
          {
            addresser: '王小虎',
            theme: '主题1',
            source: '来源1',
            date: '2016-05-02',
            size: '12k'
          },
          {
            addresser: '王小虎',
            theme: '主题2',
            source: '来源2',
            date: '2016-05-02',
            size: '12k'
          },
          {
            addresser: '王小虎',
            theme: '主题3',
            source: '来源3',
            date: '2016-05-02',
            size: '12k'
          },
          {
            addresser: '王小虎',
            theme: '主题4',
            source: '来源4',
            date: '2016-05-02',
            size: '12k'
          },
          {
            addresser: '王小虎',
            theme: '主题5',
            source: '来源5',
            date: '2016-05-02',
            size: '12k'
          },
          {
            addresser: '王小虎',
            theme: '主题6',
            source: '来源6',
            date: '2016-05-02',
            size: '12k'
          },
          {
            addresser: '王小虎',
            theme: '主题7',
            source: '来源7',
            date: '2016-05-02',
            size: '12k'
          },
          {
            addresser: '王小虎',
            theme: '主题8',
            source: '来源8',
            date: '2016-05-02',
            size: '12k'
          }
        ],
        currentPage: 1,
        input: '',
        select1: '',
        select2: ''
      }
    },
    methods: {
      open2 () {
        this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }
</script>

<style>
  .email.main{
    height: 700px;
  }
  .email .main-header {
    overflow: hidden;
    clear: both;
  }
  .email .main-header .el-pagination{
    float: right;
    margin-right: 15px;
  }
  .email .main-header .el-pagination__jump{
    margin-left: 0;
  }
  .email .main-header .el-pagination .btn-next{
    padding-left: 0;
  }
  .email .main-header .el-pagination button,  .email .main-header .el-pagination span:not([class*=suffix]){
    min-width: 20px;
    height: 20px;
    line-height: 20px;
  }
  .email .main-header .el-pagination__editor.el-input .el-input__inner{
    height: 20px;
  }
  @media screen and (max-width: 1140px) {
    .email .main-header .el-pagination{
        display: none;
      }
  }
  .email .date{
    font-size: 16px;
    font-weight: bold;
    color: #409EFF;
  }
  .email .table .el-pagination{
    float: right;
    margin-right: 10px;
    margin-top: 10px;
  }
  .email .el-table td, .email .el-table th{
    padding: 4px 0;
  }
  .el-table__body-wrapper{
    overflow: hidden;
  }
  .ele-row{
    overflow: hidden;
    margin-bottom: 10px;
    float: left;
    font-size: 14px;
    color: #2d8cf0;
  }
  .ele-row li{
    float: left;
    margin-right: 20px;
    padding: 2px 10px;
    background-color: aqua;
    border-radius: 5%;
  }
  .ele-row li a{
    color: #5a5e66;
  }

</style>
