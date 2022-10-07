<template>
    <div class="sf-services">
        <div class="container">
            <div class="text-button">
                <h3 class="heading">We offer end-to-end customs services with fast, accurate and compliant customs in
                    multiple countries</h3>
                <template>
                    <button class="color-primary sf-button get-touch-button" :aria-disabled="false" :link="null"
                        type="button" aria-label="button">
                        Get in touch
                    </button>
                </template>
            </div>
            <div class="bottom-divider"></div>

            <div class="cards-row">
                <div class="card">
                    <img src="../assets/images/icons/Komponente 10 – 1.png" alt="">
                </div>
                <div v-show=screenWidth class="card">
                    <img src="../assets/images/icons/Komponente 11 – 1.png" alt="">
                </div>
                <div v-show=screenWidth class="card">
                    <img src="../assets/images/icons/Komponente 12 – 1.png" alt="">
                </div>
            </div>

            <div v-show=screenWidth class="cards-row">
                <div class="card">
                    <img src="../assets/images/icons/Komponente 13 – 1.png" alt="">
                </div>
                <div class="card">
                    <img src="../assets/images/icons/Komponente 14 – 1.png" alt="">
                </div>
                <div class="card">
                    <img src="../assets/images/icons/Komponente 15 – 1.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { SfHeader, SfIcon, SfCarousel } from "@storefront-ui/vue";
import { defineComponent } from "@nuxtjs/composition-api";




export default defineComponent({
    components: {
        SfHeader,
        SfIcon,
        SfCarousel,
    },

    data() {
        return {
            screenWidth: true
        }
    },

    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    },

    methods: {
        onResize() {
            if (window.innerWidth < 1024) {
                this.screenWidth = false
            } else {
                this.screenWidth = true
            }
        }
    }
});
</script>
  
<style lang="scss" scoped>
.sf-services {
    padding: 100px 0;

    .container {
        max-width: 1270px;
        margin: 0 auto;

        .text-button {
            display: flex;
            align-items: center;
            justify-content: space-between;

            @media (max-width: 1024px) {
                flex-direction: column;
                padding-left: 35px;
            }


            .heading {
                font-size: 30px;
                color: #3D4D62;
                padding-right: 40px;

                @media (max-width: 1024px) {
                    font-size: 25px;
                }
            }
        }

        .bottom-divider {
            width: 50px;
            height: 3px;
            border-radius: 20px;
            margin-top: 30px;
            background-color: #01a4b7;

            @media (max-width: 1024px) {
                margin-left: 35px;
            }
        }

        .cards-row {
            display: flex;
            align-items: center;

            .card {
                width: 33.3%;
                padding-top: 35px;
            }
        }
    }


    .get-touch-button {
        height: 50px;
        border-radius: 4px;
        text-transform: unset;
        background-color: #01A4B7;
        font-size: 16px;
        color: #ffffff;
        font-weight: 600;
        margin-right: 20px;

        @media (max-width: 1024px) {
            width: 90%;
            margin-top: 20px;
            margin-right: 40px;
        }
    }
}
</style>
  