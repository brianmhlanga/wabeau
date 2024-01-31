<template>
    <div class="relative p-8 overflow-hidden bg-no-repeat bg-cover" style="background-image: url(&quot;/images/models.png&quot;);background-size: cover;height: 520px;">
        <div class="text-center myy-6 relative">
            <div class="text-6xl font-bold mb-1 text-white" ref="target"></div>
            <img src="/images/logo.png" height="100" />
            <div class="flex align-items-center justify-content-center flex-wrap">
            <button style="height: 55px;width: 190px;font-size: 19px;border-radius: 40px;" class="p-button p-component p-3 mt-3 ghd" type="button" aria-label="Notify Me" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
                <!---->
                <span class="p-button-label" data-pc-section="label">Competitions</span>
                <!---->
                <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
            </button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
 import Typewriter from 'typewriter-effect/dist/core';

const target = ref();

onMounted(() => {
    const typewriter = new Typewriter(target.value, {
      delay: 75,
      loop: true
    });

    typewriter
        .typeString('Empower Glamour')
        .pauseFor(1000)
        .deleteAll(25)
        .typeString('Elevate Grace')
        .pauseFor(1000)
        .deleteAll(25)
        .start();
});
</script>
<style>

.text-6xl {
    font-size: 6rem!important;
}
p {
    font-size: 28px;
    font-weight: 400;
    line-height: 25px;
    margin: 0px;
}
.text-center.myy-6.relative {
    margin-top: 30px;
    background-color: #fcab2b36;
    padding: 25px;
    margin-bottom: 10px;
    font-size: 0px;
}
button.p-button.p-component.p-3.mt-3.ghd {
    background-color: #A5CB3A;
    border-color: #A5CB3A;
}
</style>