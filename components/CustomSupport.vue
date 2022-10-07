<template>
    <div class="sf-custom-support">
        <div class="heading">
            Customs Support is a full-service provider for customs services and is
            here to help
        </div>
        <div class="bottom-divider"></div>

        <template>
            <div class="sf-carousel-area">
                <div><img src="../assets/images/icons/Gruppe 474.png" alt=""></div>
                    <div class="slider">
                        <img class="image" src="../assets/images/icons/Komponente 19 – 1.png" alt="">
                        <h4 class="title">Import customs clearance</h4>
                        <p class="subtitle">If you would like to import goods from a third country to within the
                            European Union, Customs Support assists you in every step of the customs clearance process.
                            Our customs experts take care of import documents, classification of import goods with the
                            correct HS code, coordination of physical inspection and duty management.</p>
                        <span class="learn-more"><img src="../assets/images/icons/Komponente 16 – 1.png" alt=""></span>
                    </div>
                    <div class="slider">
                        <img class="image" src="../assets/images/icons/Komponente 19 – 1.png" alt="">
                        <h4 class="title">Import customs clearance</h4>
                        <p class="subtitle">If you would like to import goods from a third country to within the
                            European Union, Customs Support assists you in every step of the customs clearance process.
                            Our customs experts take care of import documents, classification of import goods with the
                            correct HS code, coordination of physical inspection and duty management.</p>
                        <span class="learn-more"><img src="../assets/images/icons/Komponente 16 – 1.png" alt=""></span>
                    </div>
                    <div class="slider">
                        <img class="image" src="../assets/images/icons/Komponente 19 – 1.png" alt="">
                        <h4 class="title">Import customs clearance</h4>
                        <p class="subtitle">If you would like to import goods from a third country to within the
                            European Union, Customs Support assists you in every step of the customs clearance process.
                            Our customs experts take care of import documents, classification of import goods with the
                            correct HS code, coordination of physical inspection and duty management.</p>
                        <span class="learn-more"><img src="../assets/images/icons/Komponente 16 – 1.png" alt=""></span>
                    </div>
                    <div><img src="../assets/images/icons/Gruppe 473.png" alt=""></div>
                </div>
                <div class="border-bottom"></div>
                <div class="slider-icons">
                    <img src="../assets/images/icons/Ellipse 115.png" alt="">
                    <img src="../assets/images/icons/Ellipse 116.png" alt="">
                    <img src="../assets/images/icons/Ellipse 116.png" alt="">
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

        .title {
            font-size: 16px;
            color: #3D4D62;
            font-weight: bold;
            margin: 20px 0;
        }

        .subtitle {
            font-size: 12px;
            color: #3D4D62;
            font-weight: 400;
            line-height: 1.6;
        }

        .slider {
            width: 257px;

            .image {
                width: 257px;
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
