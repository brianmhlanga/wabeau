<template>

</template>
<script lang="ts" setup>
const { params: { modelId, competitionId } }: any = useRoute();
onMounted(() => {
    navigateTo(`/shareLogin-${competitionId}-${modelId}`)
})
</script>