<template>
  <div class="s-notes-list">
    <div
      class="s-notes-list__item"
      v-for="note in notes"
      :ref="`note-${note.id}`"
      :key="note.id">
      <note-preview
        @click="onClickNote"
        :note="note"/>
    </div>
  </div>
</template>
<script src="./NotesList.js"></script>
<style src="./NotesList.scss" lang="scss"></style>
