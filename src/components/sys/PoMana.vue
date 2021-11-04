<template>
  <div>
    <!-- 添加增加权限模块 -->
    <el-row :gutter="24" class="addHeader">
      <el-col :span="4">
        <el-input placeholder="请输入所要添加的职位" suffix-icon="el-icon-plus" v-model="addRole.name" size="mini"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary"  size="mini">新增</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-row>
      <el-col :span="12">
        <el-table :data="tableData" border stripe>
          <el-table-column
            prop="name"
            label="权限名称">
          </el-table-column>
          <el-table-column
            prop="createTime"
            label="创建时间">
          </el-table-column>
          <el-table-column
            prop="roleName"
            label="职位名称">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-dialog title="提示" :visible.sync="dialogVisible">
      <p>这是一段文字</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name:"PoMana",
  data() {
    return {
      addRole: {
        name:''
      },
      dialogVisible: false,
      tableData:[
        {name:"张梓嘉",createTime:'2021-10-29',roleName:'执行董事'},
        {name:"张梓嘉",createTime:'2021-10-29',roleName:'执行总裁'},
        {name:"张梓嘉",createTime:'2021-10-29',roleName:'执行总监'}
      ]
    }
  },
  methods: {
    handleEdit(index, row) {
      this.dialogVisible = true
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style lang="scss" scoped>
.addHeader {
  margin-bottom: 10px;
}
</style>
