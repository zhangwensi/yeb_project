<template>
  <div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="部门管理" name="DepMana">部门管理</el-tab-pane>
      <el-tab-pane label="职位管理" name="EcMana">职位管理</el-tab-pane>
      <el-tab-pane label="职称管理" name="JobeLevelMana">职称管理</el-tab-pane>
      <el-tab-pane label="奖惩规则" name="PermissMana">奖惩规则</el-tab-pane>
      <el-tab-pane label="权限组" name="PoMana">
        <pomana/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import pomana from '../../components/sys/PoMana.vue'
export default {
  name:"SysBasic",
  components:{pomana},
  data() {
    return {
      activeName: 'PoMana'
    }
  }
}
</script>

<style lang="scss">

</style>
