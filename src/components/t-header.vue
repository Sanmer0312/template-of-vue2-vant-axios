<template>
  <div>
    <div class="t-header">
      <img src="@/assets/back.png" class="icon" @click="back" />
      <slot></slot>
    </div>
    <div class="t-header-copy"></div>
  </div>
</template>

<script >
/**
 * @name t-header
 * @emits back 点击返回事件
 * @example <t-header @back="back" is-back>执法指引</t-header>
 */
export default {
  props: {
    isBack: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    back() {
      if (this.isBack) this.$router.go(-1);
      this.$emit("back");
    },
  },
};
</script>

<style scoped lang="scss">
$t-header-height: 44px;
.t-header {
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 750px;
  height: $t-header-height;
  line-height: $t-header-height;
  text-align: center;
  font-size: 18px;
  background: #fff;
  border-bottom: 1px solid #f6f6f6;
  z-index: 98;
  .icon {
    position: absolute;
    top: 50%;
    left: 18px;
    transform: translateY(-50%);
    width: 12px;
    height: 20px;
  }
}
.t-header-copy {
  height: $t-header-height;
}
</style>