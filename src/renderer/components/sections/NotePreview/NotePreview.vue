<template>
  <div
    class="s-note-preview"
    :class="{ 's-note-preview--selected': isCurrentlySelected }"
    @click="onClickNote">
    <div class="s-note-preview__title">
      <span>{{ title }}</span>
      <span class="s-note-preview__date">{{ dateToDisplay }}</span>
    </div>
    <div class="s-note-preview__contents">
      <span>{{ contentPreview }}</span>
    </div>
  </div>
</template>
<script src="./NotePreview.js"></script>
<style src="./NotePreview.scss" lang="scss"></style>
