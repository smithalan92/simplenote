<template>
  <div
    class="s-title-bar">
    <div class="s-title-bar__padder"/>
    <div class="s-title-bar__content">
      <span class="s-title-bar__title">Simple Note</span>
      <div
        class="s-title-bar__icons"
        v-if="shouldShowTitleBarActions">
        <div
          class="s-title-bar__icon"
          @click="windowAction('minimize')">
          <Minimize/>
        </div>
        <div
          class="s-title-bar__icon"
          @click="windowAction('maximize')"
          v-if="!isMaximized">
          <Maximize/>
        </div>
        <div
          class="s-title-bar__icon"
          @click="windowAction('restore')"
          v-if="isMaximized">
          <Restore/>
        </div>
        <div
          class="s-title-bar__icon"
          @click="windowAction('close')">
          <Close/>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./TitleBar.js"></script>
<style src="./TitleBar.scss" lang="scss"></style>
