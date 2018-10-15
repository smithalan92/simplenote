import PlusIcon from '@/assets/plus.svg';

export default {
  name: 'Menu',

  components: {
    PlusIcon,
  },

  methods: {
    onClickAddNote() {
      this.$store.dispatch('notes/addNote');
    },
  },
};
