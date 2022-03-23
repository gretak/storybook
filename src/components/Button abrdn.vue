<template>
<div class="container bg-digital-light-grey text-center pt40 pb40"> 
  <div class="row">
    <div class="col-sm-12">
        <a class="abrdn-btn" :class="typeclass" href="#">{{ label }}<i v-if="arrow" class="material-icons">arrow_forward</i>
        </a>
    </div>
  </div>
</div>
</template>

<script>
import './button-abrdn.css';

export default {
  name: 'button',

  props: {
    label: {
      type: String,
      default: 'Button',
    },
    type: {
      type: String,
      default: '',
      validator: function (value) {
        return ['primary', 'primary__white', 'bordered', 'bordered__white', 'naked', 'naked__white'].indexOf(value) !== -1;
      },
    },
    arrow: {
      type: Boolean,
      default: true,
    }
  },

  computed: {
    typeclass() {
      if (this.type=='primary__white') {
        return [`abrdn-btn--white`]
      }
      return {
        [`abrdn-btn--${this.type}`]: true,
      };
    }

  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>
