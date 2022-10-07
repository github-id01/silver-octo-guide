<template>
    <div class="sf-clients">
        <div class="client-section">
            <img class="clients-img" src="../assets/images/icons/Gruppe maskieren 10.png" alt="" />
        </div>
        <div class="text-work">
            <h3 class="client-text">Who we work with</h3>
            <div class="bottom-divider"></div>
            <p class="content-text">
                We are the trusted partner for customs matters of more than 7000
                companies across Europe. Since 20 years we successfully operate with
                customers from small and large good owners to freight forwarders and
                digital platforms across various industries.
            </p>
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
.sf-clients {
    padding: 100px 0px;
    display: flex;
    align-items: center;
    max-width: 1290px;
    margin: 0 auto;
    @media (max-width: 1024px) {
      flex-direction: column;
      padding: 0;
    }

    .client-section {
        background-color: #f0f0f0;
        max-width: 50%;
        text-align: center;
        padding: 20px;
        @media (max-width: 1024px) {
            max-width: max-content;
            padding: 45px;
        }

        .clients-img {
            mix-blend-mode: multiply;
            @media (max-width: 1024px) {
                width: 300px;
            }
        }
    }

    .text-work {
        max-width: 50%;
        padding-left: 111px;

        @media (max-width: 1024px) {
            padding-left: 0;
            max-width: max-content;
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
            color: #3D4D62;
            padding-top: 30px;
            line-height: 1.6;
            max-width: 400px;
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
    }
}
</style>
