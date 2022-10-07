<template>
  <div class="sf-custom-support">
    <div class="heading">
      Customs Support is a full-service provider for customs services and is
      here to help
    </div>
    <div class="bottom-divider"></div>

    <template>
      <div class="sf-carousel-area">
        <div class="img">
          <img src="../assets/images/icons/Gruppe 474.png" alt="" />
        </div>
        <div class="slider">
          <div class="image-card">
            <img
              class="image"
              src="../assets/images/icons/Komponente 19 – 1.png"
              alt=""
            />
            <div class="overlay">
              <div class="center-elements">
                <span class="text-color">
                  <span class="learn">Learn more</span>
                  <span>
                    <img
                      class="chev-right"
                      src="../assets/images/icons/chev-right.png"
                      alt="chev-right"
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
          <h4 class="title">Import customs clearance</h4>
          <p class="subtitle">
            If you would like to import goods from a third country to within the
            European Union, Customs Support assists you in every step of the
            customs clearance process. Our customs experts take care of import
            documents, classification of import goods with the correct HS code,
            coordination of physical inspection and duty management.
          </p>
          <span class="learn-more"
            ><img src="../assets/images/icons/Komponente 16 – 1.png" alt=""
          /></span>
        </div>
        <div v-show="screenWidth" class="slider">
          <div class="image-card">
            <img
              class="image"
              src="../assets/images/icons/Komponente 19 – 1.png"
              alt=""
            />
            <div class="overlay">
              <div class="center-elements">
                <span class="text-color">
                  <span class="learn">Learn more</span>
                  <span>
                    <img
                      class="chev-right"
                      src="../assets/images/icons/chev-right.png"
                      alt="chev-right"
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
          <h4 class="title">Import customs clearance</h4>
          <p class="subtitle">
            If you would like to import goods from a third country to within the
            European Union, Customs Support assists you in every step of the
            customs clearance process. Our customs experts take care of import
            documents, classification of import goods with the correct HS code,
            coordination of physical inspection and duty management.
          </p>
          <span class="learn-more"
            ><img src="../assets/images/icons/Komponente 16 – 1.png" alt=""
          /></span>
        </div>
        <div v-show="screenWidth" class="slider">
          <div class="image-card">
            <img
              class="image"
              src="../assets/images/icons/Komponente 19 – 1.png"
              alt=""
            />
            <div class="overlay">
              <div class="center-elements">
                <span class="text-color">
                  <span class="learn">Learn more</span>
                  <span>
                    <img
                      class="chev-right"
                      src="../assets/images/icons/chev-right.png"
                      alt="chev-right"
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
          <h4 class="title">Import customs clearance</h4>
          <p class="subtitle">
            If you would like to import goods from a third country to within the
            European Union, Customs Support assists you in every step of the
            customs clearance process. Our customs experts take care of import
            documents, classification of import goods with the correct HS code,
            coordination of physical inspection and duty management.
          </p>
          <span class="learn-more"
            ><img src="../assets/images/icons/Komponente 16 – 1.png" alt=""
          /></span>
        </div>
        <div class="img">
          <img src="../assets/images/icons/Gruppe 473.png" alt="" />
        </div>
      </div>
      <div class="border-bottom"></div>
      <div class="slider-icons">
        <img src="../assets/images/icons/Ellipse 115.png" alt="" />
        <img src="../assets/images/icons/Ellipse 116.png" alt="" />
        <img src="../assets/images/icons/Ellipse 116.png" alt="" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { SfHeader, SfIcon, SfCarousel } from "@storefront-ui/vue";

export default defineComponent({
  components: {
    SfHeader,
    SfIcon,
    SfCarousel,
  },
  data() {
    return {
      screenWidth: true,
    };
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      if (window.innerWidth < 1024) {
        this.screenWidth = false;
      } else {
        this.screenWidth = true;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.sf-custom-support {
  max-width: 1270px;
  margin: 0 auto;
  padding: 100px 0;

  .heading {
    font-size: 30px;
    font-weight: bold;
    color: #3d4d62;
    text-align: center;
    max-width: 78%;
    margin: 0 auto;
  }

  .bottom-divider {
    width: 50px;
    height: 3px;
    border-radius: 20px;
    margin-top: 30px;
    background-color: #01a4b7;
    margin: 30px auto 0;
  }

  .sf-carousel-area {
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    @media (max-width: 1024px) {
      gap: 20px;
    }

    .title {
      font-size: 16px;
      color: #3d4d62;
      font-weight: bold;
      margin: 20px 0;
    }

    .subtitle {
      font-size: 12px;
      color: #3d4d62;
      font-weight: 400;
      line-height: 1.6;
    }

    .slider {
      width: 257px;

      .image-card {
        position: relative;
        .image {
          width: 257px;
        }

        .overlay {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: 0.5s ease;
          background-color: rgba($color: #01a4b7, $alpha: 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          .text-color {
            font-size: 16px;
            color: #ffffff;
            font-weight: 600;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }


          .chev-right {
            height: 14px;
            width: 14px;
            margin-top: 3px;
          }
          .center-elements {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        .overlay {
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }

  .border-bottom {
    border: 1px solid #cccccc;
    width: 69%;
    margin: 50px auto 20px auto;
  }

  .slider-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
}
</style>
