<template>
<div :style="style">
  <div id="hero1"
     class="hero"  :style="style1" :class="sizeclass" 
     :data-url-base="urlbase"
     data-url-file="asi_solar_notext_1440x770_webbanner_v2.ashx?modified=20201009082638"
     data-image-sources="https://prd-cdn.aberdeenstandard.net/-/media/aam-web/images/hero-images/asi_solar_notext_1440x770_webbanner_v2.ashx"
  >
  <div class="hero__image hero__image--align-bottom loaded" :class="gradientclass"
  style="background-image: url('https://prd-cdn.aberdeenstandard.net/-/media/aam-web/images/hero-images/1440x770_climate_action_hero_image.ashx')">
   </div>
    <div class="container-fluid container-fluid--mw hero__content loaded">
      <div class="row">
       <div class="col-xs-10 col-sm-6 col-lg-5 col-xs-offset-1 col-sm-offset-0 p20 pt15 pb15 ml15">
          <div class="hero-title-wrapper">
            <h1 class="hero__title mb10">{{ title }}</h1>
          </div>
          <div class="hero-subtitle-wrapper">
            <h2>{{ subtitle }}</h2>
          </div>
          <div v-if="label" class="hero-links-wrapper">
            <a class="btn btn--bordered btn--icon-right" href="#">{{ label }}<div class="btn__icon btn__icon icon-triangle-white-right"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import './hero.css';

export default {
  name: 'hero',

  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    label: {
      type: String,
    },
    size: {
      type: String,
      default: 'ptlg',
      validator: function (value) {
        return ['mini', 'plg', 'ptlg'].indexOf(value) !== -1;
      },
    },
    gradient: {
      type: String,
      default: 'grey',
      validator: function (value) {
        return ['none','darkBlue', 'grey', 'lightBlue'].indexOf(value) !== -1;
      },
    },
    urlbase: {
      type: String,
    }
  },

  computed: {
    sizeclass() {
      return {
        [`hero--style-${this.size}`]: true,
      };
    },
    gradientclass() {
      return {
        [`${this.gradient}`]: true,
      };
    },

  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>
