import { format } from 'date-fns';

export default {
  name: 'NotePreview',

  props: {
    note: {
      type: Object,
      required: true,
    },
  },

  computed: {
    title() {
      return this.note.title || `Note ${this.note.id}`;
    },

    dateToDisplay() {
      if (this.note.dateModified) {
        return format(new Date(this.note.modifiedAt), 'MMM DD, HH:mm');
      }
      return format(new Date(this.note.createdAt), 'MMM DD, HH:mm');
    },

    contentPreview() {
      return this.note.contents.substring(0, 120);
    },

    isCurrentlySelected() {
      return this.$store.state.general.currentNoteId === this.note.id;
    },
  },

  methods: {
    onClickNote() {
      this.$emit('click', this.note.id);
    },
  },
};
