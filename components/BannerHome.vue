<template>
    <banner class="sf-banner">
        <div class="banner-main">
            <div class="content">
                <h3 class="heading">
                    Headache on complex customs matters for your business?
                </h3>
                <div class="bottom-divider"></div>
                <p class="content-text">
                    Customs Support is your neutral full-service customs broker for
                    complex customs matters with 20+ years of expertise in Europe and over
                    400 customs specialists who are happy to take the load off your mind!
                </p>
                <template>
                    <button class="color-primary sf-button get-touch-button" :aria-disabled="false" :link="null"
                        type="button" aria-label="button">
                        Get your qoute now
                    </button>
                </template>
            </div>
            <div class="icons-content">
                <div class="icon-content">
                    <img class="tick-icon" src="../assets/images/icons/tickicon.png" alt="tick-icon" />
                    <p class="characteristics">
                        Fast and accurate customs clearance delivery
                    </p>
                </div>
                <div class="icon-content">
                    <img class="tick-icon" src="../assets/images/icons/tickicon.png" alt="tick-icon" />
                    <p class="characteristics">
                        EU-wide customs coverage 
                    </p>
                </div>
                <div class="icon-content">
                    <img class="tick-icon" src="../assets/images/icons/tickicon.png" alt="tick-icon" />
                    <p class="characteristics">
                        Online and real-time control of customs processes
                    </p>
                </div>
            </div>
        </div>
    </banner>
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


.sf-banner {
    height: 690px;
    background-image: url("../assets/images/icons/homebanner.png");
    @media (max-width: 1024px) {
        background-position: center;
    }

    .banner-main {
        display: flex;
        align-items: center;
        max-width: 1270px;
        margin: 0 auto;
        @media (max-width: 1024px) {
            flex-direction: column;
        }

        .content {
            max-width: 52%;
            padding-left: 60px;
            @media (max-width: 1024px) {
                padding-left: 30px;
                padding-top: 70px;
                max-width: max-content;
            }

            .heading {
                font-size: 40px;
                color: #ffffff;
                font-weight: bold;
                line-height: 1;
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
            }

            .content-text {
                font-size: 16px;
                font-weight: 400;
                color: #ffffff;
                padding-top: 30px;
                @media (max-width: 1024px) {
                    padding-right: 30px;
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

            &:hover {
                height: 60px;
                background-color: #007E91;
            }
            @media (max-width: 1024px) {
                width: 90%;
            }
        }

        .icons-content {
            display: flex;
            flex-direction: column;
            max-width: 48%;
            padding-left: 50px;
            @media (max-width: 1024px) {
                max-width: max-content;
                padding-left: 30px;
                padding-top: 30px;
            }

            .icon-content {
                display: flex;
                margin-bottom: 30px;
                align-items: baseline;

                .characteristics {
                    font-size: 20px;
                    font-weight: bold;
                    color: #ffffff;
                    margin-bottom: 0;
                    padding-left: 10px;
                   
                }

                .tick-icon {
                    position: unset;
                    z-index: unset;
                }
            }

        }
    }
}
</style>
