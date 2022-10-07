<template>
    <div class="sf-specs">
        <div class="content">
            <h3 class="specs-heading">The leading customs agent in Europe and UK</h3>
            <div class="bottom-divider"></div>
        </div>

        <div class="specifications-section">
            <div class="experience">
                <h3 class="title">20+</h3>
                <p class="sub-title">years of experience</p>
            </div>
            <div class="vertical-divider"></div>
            <div class="experience">
                <h3 class="title">400</h3>
                <p class="sub-title">qualified customs specialists</p>
            </div>
            <div class="vertical-divider"></div>
            <div class="experience">
                <h3 class="title">20</h3>
                <p class="sub-title">strategic locations</p>
            </div>
            <div class="vertical-divider"></div>
            <div class="experience">
                <h3 class="title">5</h3>
                <p class="sub-title">countries</p>
            </div>
        </div>

        <template>
            <button class="color-primary sf-button get-touch-button" :aria-disabled="false" :link="null" type="button"
                aria-label="button">
                Get in touch
            </button>
        </template>
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
.sf-specs {
    background-color: #006b6e;
    padding: 75px 0;

    .content {
        .specs-heading {
            font-size: 30px;
            color: #ffffff;
            text-align: center;
            font-weight: bold;
            @media (max-width: 1024px) {
                font-size: 25px;
              }
        }

        .bottom-divider {
            width: 50px;
            height: 3px;
            border-radius: 20px;
            margin-top: 30px;
            background-color: #01a4b7;
            margin: 30px auto 30px;
        }
    }

    .specifications-section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        @media (max-width: 1024px) {
            flex-direction: column;
        }

        .experience {
            max-width: 25%;

            .title {
                font-size: 50px;
                text-align: center;
                color: #ffffff;
                font-weight: bold;
            }

            .sub-title {
                font-size: 20px;
                text-align: center;
                color: #ffffff;
                font-weight: bold;
            }
        }

        .vertical-divider {
            background-color: #FFFFFF;
            content: "";
            height: 92px;
            margin-left: 10px;
            margin-right: 10px;
            width: 1px;
            opacity: 0.25;
            @media (max-width: 1024px) {
                border: 1px solid #ffffff;
                height: 0;
                width: 80%;
            }
            
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
        margin: 0 auto;
        @media (max-width: 1024px) {
            width: 80%;
        }
    }
}
</style>
