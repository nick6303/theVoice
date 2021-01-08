<template lang="pug">
section.rule
  button.close(
    type="button"
    @click="$emit('close')"
  )
  figure.title
    img.pc(src="@/assets/img/rule/title.png", alt="alt")
    img.mb(src="@/assets/img/rule/title_M.png", alt="alt")
  .scrollBox(v-perfect-scroll)
    p
      span 報名時間：
      | 台灣時間xx月xx日中午12點至xx月xx日中午12點止
    p
      span 報名資格：
      | 對於成為一個偉大的歌手有興趣者
    p
      span 報名方式：
      | 於報名時間內，完成表單報名
    p 活动细则：
    ul
      li 周计算区间：北京时间每周X中午12点至隔周X中午12点止。
      li 派发时间：每周三19点前，系统将自动派发至符合资格会员主账户。
      li 彩金打码2倍即可出款。
      li 活动期间，每人仅需填写一次。
      li 会员的存款次数及活动资格由迪拜皇宫系统自动统计，如有异议，依迪拜皇宫查询结果为准。
      li 彩金一经派发即无法放弃与取消。
      li 每位会员、每个IP、每个手机号码、每个电子邮箱地址、每一组银行帐号只能享有一次优惠，   若发现重复注册或同IP多帐号现象，则视为同一人，此IP下所有帐号迪拜皇宫有权拒绝派送彩金
      li 参与此活动即表示同意
        b 《迪拜皇宫活动声明》
        | ，迪拜皇宫拥有最终解释权。
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ModalRule',
  setup() {
    return {
    }
  }
})
</script>
