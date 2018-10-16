import { mapGetters } from 'vuex';
import { format } from 'date-fns';

export default {
  name: 'Note',

  props: {
    currentNoteId: {
      type: Number,
      required: true,
      default: null,
    },
  },

  computed: {
    ...mapGetters({
      getNoteById: 'notes/getNoteById',
    }),

    note() {
      return this.getNoteById(this.currentNoteId);
    },

    title() {
      return this.note.title || `Note ${this.note.id}`;
    },

    createdAt() {
      return format(new Date(this.note.createdAt), 'HH:mm, DD-MMM-YY');
    },

    updatedAt() {
      if (!this.note.modifiedAt) return null;
      return format(new Date(this.note.modifiedAt), 'HH:mm DD-MMM-YY');
    },
  },
};
