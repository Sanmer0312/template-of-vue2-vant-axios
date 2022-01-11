<template>
  <div class="t-list-card" @click="routerTo">
    <img :src="avatar" alt="头像" class="avatar" v-if="avatar" />
    <img src="@/assets/pass.png" alt="通过" class="pass" v-if="showPass" />
    <slot></slot>
  </div>
</template>

<script>
/**
 * @name t-list-card 列表卡片
 * @property {String} avatar 头像
 * @property {String} to 跳转路径
 * @property {Boolean} showPass 右下角通过图片显示状态 默认为false
 * @example 
       <t-list-card :avatar="avatar" to="/zdry/info">
        <t-line name="姓名：" value="Koon jopson"></t-line>
        <t-line name="证件号码：" value="DS324235223"></t-line>
        <t-line name="国籍：" value="英国"></t-line>
        <t-line name="申请时间：" value="2018.01.01"></t-line>
      </t-list-card>
 */
export default {
  props: {
    avatar: String,
    to: String,
    showPass: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    routerTo() {
      this.navTo(this.to);

      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.t-list-card {
  position: relative;
  background: #fff;
  box-shadow: 0px 0px 18px 0px rgba(86, 127, 255, 0.21);
  border-radius: 5px;
  padding: 15px;
  .avatar {
    float: right;
    max-width: 92px;
    height: 92px;
    margin-left: 5px;
  }
  .pass {
    position: absolute;
    bottom: 5px;
    right: 15px;
    width: 67px;
    height: 50px;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    min-height: 28px;
    background: #3e6bf7;
    border-radius: 5px;
  }
  &:not(:last-child) {
    margin-bottom: 15px;
  }
}
</style>