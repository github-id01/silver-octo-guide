<template>
  <div>
    <div class="sf-more-info">
      <div class="image-area">
        <img
          src="../assets/images/icons/Bildschirmfoto 2021-01-08 um 16.31.19.png"
          alt=""
        />
      </div>

      <div class="text-work">
        <h3 class="client-text">Lorem ipsum dolor sit amet</h3>
        <div class="bottom-divider"></div>
        <p class="content-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr.
        </p>
      </div>
    </div>

    <div class="sf-more-info-left">
      <div class="text-work-left">
        <h3 class="client-text">Lorem ipsum dolor sit amet</h3>
        <div class="bottom-divider"></div>
        <p class="content-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr.
        </p>
        <template>
          <button
            class="color-primary sf-button get-touch-button"
            :aria-disabled="false"
            :link="null"
            type="button"
            aria-label="button"
          >
            More information
          </button>
        </template>

      </div>

      <div class="image-area">
        <img
          src="../assets/images/icons/Bildschirmfoto 2021-01-08 um 16.31.19.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { SfHeader, SfIcon } from "@storefront-ui/vue";
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  components: {
    SfHeader,
    SfIcon,
  },
});
</script>

<style lang="scss" scoped>
.sf-more-info {
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  .image-area {
    width: 50%;

    @media (max-width: 1024px) {
      width: 100%;
    }

    img {
      width: -webkit-fill-available;

      @media (max-width: 1024px) {
        height: 320px;
        object-fit: cover;
      }
    }
  }

  .text-work {
    max-width: 50%;
    padding-left: 111px;
    @media (max-width: 1024px) {
      max-width: 100%;
      padding: 35px;
    }

    .client-text {
      color: #3d4d62;
      font-size: 30px;
      font-weight: bold;
    }

    .bottom-divider {
      width: 50px;
      height: 3px;
      border-radius: 20px;
      margin-top: 30px;
      background-color: #01a4b7;
    }

    .content-text {
      font-size: 16px;
      font-weight: 400;
      color: #3d4d62;
      padding-top: 30px;
      line-height: 1.6;
      max-width: 540px;
    }
  }

  .get-touch-button {
    height: 50px;
    border-radius: 4px;
    text-transform: unset;
    background-color: #01a4b7;
    font-size: 16px;
    color: #ffffff;
    font-weight: 600;
    margin-right: 20px;

    &:hover {
      height: 60px;
      background-color: #007E91;
    }
  }
}

.sf-more-info-left {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: -5px;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }

  .image-area {
    width: 50%;
    @media (max-width: 1024px) {
      width: 100%;
    }

    img {
      width: -webkit-fill-available;
      @media (max-width: 1024px) {
        object-fit: cover;
        height: 320px;
      }
    }
  }

  .text-work-left {
    max-width: 50%;
    padding-right: 111px;
    @media (max-width: 1024px) {
      max-width: 100%;
      padding: 35px;
    }


    .client-text {
      color: #3d4d62;
      font-size: 30px;
      font-weight: bold;
    }

    .bottom-divider {
      width: 50px;
      height: 3px;
      border-radius: 20px;
      margin-top: 30px;
      background-color: #01a4b7;
    }

    .content-text {
      font-size: 16px;
      font-weight: 400;
      color: #3d4d62;
      padding-top: 30px;
      line-height: 1.6;
      max-width: 540px;
    }
  }

  .get-touch-button {
    height: 50px;
    border-radius: 4px;
    text-transform: unset;
    background-color: #01a4b7;
    font-size: 16px;
    color: #ffffff;
    font-weight: 600;
    margin-right: 20px;

    &:hover {
      height: 60px;
      background-color: #007E91;
    }
  }
}
</style>
