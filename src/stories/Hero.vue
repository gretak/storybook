<template>
<div>
  <div id="hero1"
     class="hero hero--style-pblg"
     data-url-base="https://prd-cdn.aberdeenstandard.net/-/media/aam-web/images/hero-images/"
     data-url-file="asi_solar_notext_1440x770_webbanner_v2.ashx?modified=20201009082638"
     data-image-sources="https://prd-cdn.aberdeenstandard.net/-/media/aam-web/images/hero-images/asi_solar_notext_1440x770_webbanner_v2.ashx"
     data-gradient-color-rgba=" " 
     data-gradient-break-lg=" %"
     data-optional-gradient-stop-lg=" %"
     data-gradient-break-md=" %"
     data-optional-gradient-stop-md=" %"
     data-gradient-break-xs=" %"
     data-optional-gradient-stop-xs=" %"
     style="background-image: url('https://prd-cdn.aberdeenstandard.net/-/media/aam-web/images/hero-images/asi_solar_notext_1440x770_webbanner_v2.ashx')"
  >
    <div class="container-fluid container-fluid--mw hero__content loaded">
      <div class="row">
       <div class="col-xs-10 col-sm-6 col-lg-5 col-xs-offset-1 col-sm-offset-0 p20 pt15 pb15 ml15">
          <div class="hero-title-wrapper">
            <h1 class="hero__title mb10">{{ title }}</h1>
          </div>
          <div class="hero-subtitle-wrapper">
            <h2>{{ subtitle }}</h2>
          </div>
          <div class="hero-links-wrapper">
            <a class="btn btn--bordered btn--icon-right" href="/en/responsible-investing">{{ label }}<div class="btn__icon btn__icon icon-triangle-white-right"></div>
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
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'plg',
      validator: function (value) {
        return ['mini', 'plg', 'ptlg'].indexOf(value) !== -1;
      },
    },
    backgroundGradient: {
      type: String,
    }
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size}`]: true,
      };
    },
    style() {
      return {
        backgroundGradient: this.backgroundGradient,
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
