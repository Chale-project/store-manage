    <template>
    <div>

        <van-cell-group class="item-list">
            <van-cell is-link icon="points" title="我的积分" />
            <van-cell is-link icon="gift" title="我收到的礼物" />
        </van-cell-group>
        <van-button type="default" size="large" @click="selectArea">默认按钮</van-button>
        <!-- <van-address-list
            v-model="chosenAddressId"
            :list="list"
            @add="onAdd"
            @edit="onEdit"
        /> -->
        <van-popup v-model="show" position="bottom" :overlay="true">
            <van-area :area-list="areaList" value="" @cancel='closeArea' @confirm='choiceArea' />
        </van-popup>
    </div>

    </template>
    <script>
import Vue from "vue";
import {
  Cell,
  CellGroup,
  Icon,
  Button,
  NoticeBar,
  AddressList,
  Area,
  Popup
} from "vant";
import areaList from "@/util/area.js";
Vue.use(Button)
  .use(NoticeBar)
  .use(Cell)
  .use(CellGroup)
  .use(Icon)
  .use(AddressList)
  .use(Popup)
  .use(Area);

export default {
  data() {
    return {
      areaList: areaList,
      show: false,
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ]
    };
  },

  methods: {
    onAdd() {
      Toast("新增收货地址");
    },
    onEdit(item, index) {
      Toast("编辑收货地址:" + index);
    },
    selectArea() {
      this.show = !this.show;
    },
    closeArea() {
      this.show = !this.show;
    },
    choiceArea(e) {
      var name = "";
      for (let i = 0; i < e.length; i++) {
        name += e[i].name;
      }
      console.log(name);
      this.show = !this.show;
    }
  }
};
</script>