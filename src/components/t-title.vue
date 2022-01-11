<template>
  <div class="t-title" :style="{ padding: padding }">
    <span class="before"></span>
    <span><slot></slot></span>
  </div>
</template>

<script>
/**
 * @name t-title 标题
 * @property padding 内边距
 * @example <t-title padding="10px 16px">基本信息</t-title>
 */
export default {
  name: "t-title",
  props: {
    padding: {
      type: String,
      default: "10px 16px",
    },
  },
};
</script>

<style lang="scss" scoped>
.t-title {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: #111;
  .before {
    width: 4px;
    height: 17px;
    background: #3e6bf7;
    border-radius: 2px;
    margin-right: 10px;
  }
}
</style>