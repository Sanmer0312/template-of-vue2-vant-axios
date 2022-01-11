<template>
  <div class="t-line">
    <span class="key">{{ name }}</span>
    <span class="value">{{ value }}</span>
  </div>
</template>

<script>
/**
 * @name t-line
 * @example <t-line name="姓名：" value="Koon jopson"></t-line>
 */
export default {
  props: {
    name: String,
    value: String,
  },
};
</script>

<style lang="scss" scoped>
.t-line {
  display: flex;
  font-size: 14px;
  word-break: break-all;
  .key {
    color: #999;
  }
  &:not(:last-child) {
    margin-bottom: 14px;
  }
}
</style>