<template>
    <NuxtLayout name="default">
        <LandingNavbar/>
        <LandingHeader/>
        <LandingThird/>
        <LandingFooter />
    </NuxtLayout>
</template>
<script lang="ts" setup>
definePageMeta({
        middleware: ["auth"]
    });
</script>