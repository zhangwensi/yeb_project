<template>
  <div class="container">
    <!-- 顶部 -->
    <el-row class="top" :gutter="12">
      <el-col :span="2">手机号码:</el-col>
      <el-col :span="4"><el-input type="text" :autocomplete="off" placeholder="请输入号码" size="mini"></el-input></el-col>
      <el-button type="primary" size="mini">查询</el-button>
    </el-row>
    <!-- 历史消费情况 折叠板-->
    <el-row>
      <el-collapse v-model="activeNames">
        <el-collapse-item title="历史消费情况" name="1">
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="近6个月" name="first">
              <div class="items">
                <div class="items-table">
                  <el-table
                    :data="tableData"
                    stripe
                    border
                    style="width: 100%">
                    <el-table-column
                      prop="date"
                      label="消费账期">
                    </el-table-column>
                    <el-table-column
                      prop="money"
                      label="消费金额(元)">
                    </el-table-column>
                    <el-table-column
                      prop="dcunt"
                      label="优惠金额(元)">
                    </el-table-column>
                    <el-table-column label="详情">
                      <template slot-scope="scope">
                        <el-button
                          size="mini" type="text"
                          @click="handleEdit(scope.row)">详情</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
                <div class="items-icon">图形</div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="6个月前" name="second">
              <div class="items">
                <div class="items-table">
                  <el-table
                    :data="tableData1"
                    stripe
                    border
                    style="width: 100%">
                    <el-table-column
                      prop="date"
                      label="消费账期">
                    </el-table-column>
                    <el-table-column
                      prop="money"
                      label="消费金额(元)">
                    </el-table-column>
                    <el-table-column
                      prop="dcunt"
                      label="优惠金额(元)">
                    </el-table-column>
                    <el-table-column label="详情">
                      <template slot-scope="scope">
                        <el-button
                          size="mini" type="text"
                          @click="handleEdit1(scope.row)">详情</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
                <div class="items-icon">图形</div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-collapse-item>
      </el-collapse>
    </el-row>
    <!-- 账务关系 -->
    <el-row>
      <el-collapse v-model="activeNames">
        <el-collapse-item title="账务关系" name="2">
          <el-tabs v-model="activeName1" type="card">
            <el-tab-pane label="查询月" name="third">
              <el-table
                :data="tableData2"
                stripe
                border
                style="width: 100%">
                <el-table-column
                  prop="phone"
                  label="手机号码">
                </el-table-column>
                <el-table-column
                  prop="type"
                  label="账务类型">
                </el-table-column>
                <el-table-column
                  prop="countype"
                  label="账户类型">
                </el-table-column>
                <el-table-column
                  prop="countsig"
                  label="账户标识">
                </el-table-column>
                <el-table-column
                  prop="money"
                  label="付费金额">
                </el-table-column>
                <el-table-column
                  prop="starts"
                  label="生效时间">
                </el-table-column>
                <el-table-column
                  prop="ends"
                  label="失效时间">
                </el-table-column>
                <el-table-column
                  prop="status"
                  label="状态">
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="历史月" name="forth">
              <el-table
                :data="tableData3"
                stripe
                border
                style="width: 100%">
                <el-table-column
                  prop="phone"
                  label="手机号码">
                </el-table-column>
                <el-table-column
                  prop="type"
                  label="账务类型">
                </el-table-column>
                <el-table-column
                  prop="countype"
                  label="账户类型">
                </el-table-column>
                <el-table-column
                  prop="countsig"
                  label="账户标识">
                </el-table-column>
                <el-table-column
                  prop="money"
                  label="付费金额">
                </el-table-column>
                <el-table-column
                  prop="starts"
                  label="生效时间">
                </el-table-column>
                <el-table-column
                  prop="ends"
                  label="失效时间">
                </el-table-column>
                <el-table-column
                  prop="status"
                  label="状态">
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-collapse-item>
      </el-collapse>
    </el-row>
  </div>
</template>

<script>
export default {
  name:"SysLog",
  data() {
    return {
      activeName: 'first',
      activeName1: 'third',
      activeNames: ['1','2'],
      tableData:[
        {date: 202107,money: 20.87, dcunt: 10},
        {date: 202108,money: 20.87, dcunt: 10},
        {date: 202109,money: 20.87, dcunt: 10},
        {date: 202110,money: 20.87, dcunt: 10},
        {date: 202111,money: 20.87, dcunt: 10},
      ],
      tableData1:[
        {date: 202101,money: 20.87, dcunt: 10},
        {date: 202102,money: 20.87, dcunt: 10},
        {date: 202103,money: 20.87, dcunt: 10},
        {date: 202104,money: 20.87, dcunt: 10},
        {date: 202105,money: 20.87, dcunt: 10},
      ],
      tableData2:[
        {phone: 13814114956,type:'默认账户',countype:'GSM账户',countsig:'132526461646064640',money:'总科目缺省',starts:'2021/10/29 13:26:59',ends:'',status:'正常'}
      ],
      tableData3:[
        {phone: 13814114956,type:'默认账户',countype:'GSM账户',countsig:'13266666188064640',money:'总科目缺省',starts:'2020/10/29 13:26:59',ends:'2021/10/29 13:26:50',status:'销户'}
      ]
    }
  },
  methods: {
    handleEdit(val) {
      console.log(val)
    },
    handleEdit1(val) {
      console.log(val)
    },
  }
}
</script>

<style lang="scss">
.container {
  padding: 10px;
  border: 1px solid #ccc;
}
.top {
  margin-bottom: 10px;
}
.items {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}
.items-table {
  width: 60%;
}
.items-icon {
  width: 40%;
  text-align: center;
  font-size: 30px;
}
</style>
