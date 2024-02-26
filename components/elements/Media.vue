<template>
  <div
    class="workimage"
    :data-format="format"
    :style="`aspect-ratio: ${ratio};`"
  >
    <transition name="fade">
      <div
        v-if="medium.asset.metadata"
        class="workimageasset small grad"
        v-show="!imageloaded"
        :data-format="format"
        :style="`--bg: ${medium.asset.metadata.palette.lightVibrant.foreground}; --fg: ${medium.asset.metadata.palette.lightVibrant.background};`"
      ></div>
      <img
        v-else
        class="workimageasset small smaillimg"
        v-show="!imageloaded"
        :data-format="format"
        :src="$urlFor(medium).width(50).url()"
      />
    </transition>
    <transition name="fade">
      <img
        ref="img"
        v-show="imageloaded"
        @load="onloaded"
        class="workimageasset big"
        :src="
          mobile
            ? $urlFor(medium)
                .width(Math.floor(windowWidth * 2))
                .url()
            : $urlFor(medium)
                .height(Math.floor(windowHeight * 2))
                .url()
        "
        :data-format="format"
      />
    </transition>
  </div>
</template>

<script setup>
  const { height: windowHeight, width: windowWidth } = useWindowSize()
  const { mobile } = useScreenSize()
  const imageloaded = ref(false)
  const format = ref('')

  const props = defineProps({
    medium: Object,
    size: {
      type: String,
      default: 'large',
    },
    caption: {
      type: String,
      default: '',
    },
    showCaption: {
      type: Boolean,
      default: false,
    },
    srcs: {
      type: Object,
      default: {},
    },
    url: {
      type: String,
      default: '',
    },
    w: {
      type: Number,
      default: () => {},
    },
    h: {
      type: Number,
      default: () => {},
    },
    alt: {
      type: String,
      default: '',
    },
    mobile: {
      type: Object,
      default: () => {},
    },
    theme: {
      type: String,
      default: '',
    },
    lazy: {
      type: Boolean,
      default: true,
    },
    ratio: {
      type: Array,
      default: [],
    },
  })

  // const url = $urlFor(props.medium)
  //   .height(Math.floor(windowHeight * 2))
  //   .url()

  // const { context } = useRoute()
  // console.log(context)

  // const url = computed(() => {
  //   if (props.size == 'big') {
  //     return urlFor(props.medium)
  //       .height(Math.floor(windowHeight * 2))
  //       .url()
  //   } else if (props.size == 'half') {
  //     return urlFor(props.medium)
  //       .height(Math.floor(windowWidth * 0.8))
  //       .url()
  //   } else if (props.size == 'third') {
  //     return urlFor(props.medium)
  //       .height(Math.floor(windowWidth * 0.5))
  //       .url()
  //   } else if (props.size == 'small') {
  //     return urlFor(props.medium)
  //       .height(Math.floor(windowHeight * 0.5))
  //       .url()
  //   } else {
  //     return urlFor(props.medium)
  //       .height(Math.floor(windowHeight * 0.5))
  //       .url()
  //   }
  // })

  let ratiodata
  let ratio

  if (props.medium.asset._ref) {
    ratiodata = props.medium.asset._ref.split(/(?:-|x)+/)
    ratio = ratiodata[2] + '/' + ratiodata[3]
  } else {
    ratiodata = props.medium.asset._id.split(/(?:-|x)+/)
    ratio = ratiodata[2] + '/' + ratiodata[3]
  }

  function onloaded() {
    imageloaded.value = true
  }
</script>

<style>
  .workimage {
    display: grid;

    & > * {
      grid-area: 1/1;
      width: 100%;
      height: 100%;
    }
  }
  .grad {
    background: linear-gradient(var(--fg), var(--bg));
    height: 100%;
    filter: blur(0);
  }
  .smallimg {
    filter: blur(8vw);
  }
</style>
