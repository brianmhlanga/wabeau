<template>
     <NuxtLayout name="dashboard">
        <div class="block-content">
            <div class="">
            <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
                <div class="font-bold text-5xl text-900 mb-3">Subjects</div>
                <div class="text-700 text-xl line-height-3 mb-5">Number of Subjects</div>
                <Button @click="addSubjectModal = true" class="mb-5" label="Add Subject" icon="pi pi-plus" />
                <!--table will come heres-->
                <DataTable :value="subjects">
                <template #header>
                    <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                        <span class="text-xl text-900 font-bold">Dependecies</span>
                    </div>
                </template>
                <Column  header="Name">
                    <template #body="slotProps">
                        {{ slotProps.data.name }}
                    </template>
                </Column>
                <Column  header="Description">
                    <template #body="slotProps">
                        {{ slotProps.data.description }}
                    </template>
                </Column>
                <Column  header="Status">
                    <template #body="slotProps">
                        {{ slotProps.data.status }}
                    </template>
                </Column>
                <Column  header="Actions">
                    <template #body="slotProps">
                        <SplitButton
                            icon="pi pi-ellipsis-v"
                            :model="[
                                { label: 'Edit', icon: 'pi pi-fw pi-pencil', command: () => navigateTo(`/e-recruitment/applicants-${slotProps.data.id}`) },
                                { label: 'Delete', icon: 'pi pi-fw pi-trash' },
           
                            ]"
                        ></SplitButton>
                    </template>
                </Column>
            </DataTable>

            </div>
            </div>
            <Dialog v-model:visible="addSubjectModal" modal header="Add Subject" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                    <div class="p-dialog-content" data-pc-section="content">
                    <form class="flex flex-column gap-3 mt-3">
                        <div class="flex gap-3">
                        <div class="w-full">
                            <label for="cvc" class="block mb-1 text-color text-base">Subject Name</label>
                            <input v-model="subject" class="p-inputtext p-component w-full" data-pc-name="inputtext" data-pc-section="root" name="cvc" type="text" id="cvc">
                        </div>
                        <div class="w-full">
                            <label for="expiration" class="block mb-1 text-color text-base">Description</label>
                            <TextArea v-model="description" rows="5" cols="30" />
                        </div>
                        </div>
                    </form>
                    </div>
                    <div class="p-dialog-footer" data-pc-section="footer">
                    <div class="border-top-1 surface-border pt-3 flex">
                        <button @click="addSubjectModal = false" class="p-button p-component p-button-outlined w-6 mr-2" type="button" aria-label="Cancel" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
                        <span class="p-button-icon p-button-icon-left pi pi-times" data-pc-section="icon"></span>
                        <span class="p-button-label" data-pc-section="label">Cancel</span>
                        <!---->
                        <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                        </button>
                        <button @click="addSubject()"  class="p-button p-component w-6 ml-2" type="button" aria-label="Save" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
                        <span class="p-button-icon p-button-icon-left pi pi-check" data-pc-section="icon"></span>
                        <span class="p-button-label" data-pc-section="label">Save</span>
                        <!---->
                        <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                        </button>
                    </div>
                    </div>
                </Dialog>
            <!---->
        </div>
     </NuxtLayout>
  
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useManagementStore } from "~~/stores/management";
import { useToast } from "primevue/usetoast";
const toast = useToast()
const managementStore = useManagementStore()
const addSubjectModal = ref(false)
const subject = ref()
const subjects = ref()
const description = ref()
onMounted (async () => {
    let all_subjects = await managementStore.listSubjects().then((data) => {
         subjects.value = data?.data?.subjects
    }) 
})
//functions
const addSubject = async () => {
    let data = {
        subject: subject.value,
        description: description.value
    }
    let result = await managementStore.addSubject(data).then( async(data) => {
        if(data.data.success) {
      
        toast.add({ severity: 'info', summary: 'Success', detail: "Added Subject", life: 3000 });
        addSubjectModal.value = false
       }
       else{

        toast.add({ severity: 'error', summary: 'Failed to create subject', detail: data.data.message, life: 3000 });
        }
    })
  
}
</script>