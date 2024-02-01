<template>
    <NuxtLayout name="dashboard">
      <div class="page-content">
			    <h1 class="page-title">Competions Page</h1>

				 <div class="card radius-10">
					<div class="card-header">
						<div class="d-flex align-items-center">
							<div>
								<h6 class="mb-0">Competitions</h6>
                                <Button @click="addDialog()" class="create-button" label="Create Competition" icon="pi pi-plus" />
							</div>
						</div>
					</div>
                    <DataTable :value="competitions" tableStyle="min-width: 50rem">
                    <Column header="Competition Name">
                        <template #body="slotProps">
                            {{ slotProps.data.competition_name }}
                        </template>
                    </Column>
                    <Column field="price" header="Start Date">
                        <template #body="slotProps">
                            {{ slotProps?.data?.periods[0]?.period_start_date ? dateFormatter(slotProps?.data?.periods[0]?.period_start_date) : "NOT SET" }}
                        </template>
                    </Column>
                    <Column field="price" header="End Date">
                        <template #body="slotProps">
                            {{slotProps?.data?.periods[2]?.period_end_date ? dateFormatter(slotProps?.data?.periods[2]?.period_end_date) : "NOT SET" }}
                        </template>
                    </Column>
                    <Column field="rating" header="Current Level">
                        <template #body="slotProps">
                            <span :class="slotProps.data.competition_level">{{ slotProps.data.competition_level }}</span>
                        </template>
                    </Column>
                    <Column header="Status">
                        <template #body="slotProps">
                            <span :class='slotProps.data.status'>{{ slotProps.data.status }}</span>
                        </template>
                    </Column>
                    <Column header="Actions">
                        <template #body="slotProps">
                            <SplitButton
                                icon="pi pi-ellipsis-v"
                                :model="[
                                    { label: 'Change Status', icon: 'pi pi-fw pi-code', command: () => changeLevel(slotProps.data?.id) },
                                    { label: 'Change Level', icon: 'pi pi-fw pi-arrow-up', command: () => changeLevel(slotProps.data?.id) },
                                    { label: 'View Participants', icon: 'pi pi-fw pi-user', command: () => viewParticipants(slotProps.data?.id) }
                                ]"
                            ></SplitButton>
                        </template>
                    </Column>
                </DataTable>

                      
				</div>
			</div>
            <Dialog :visible="addCompetitionDialog" modal header="Add Competition" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
               
                <span class="p-hidden-accessible p-hidden-focusable" tabindex="0" role="presentation" aria-hidden="true" data-p-hidden-accessible="true" data-p-hidden-focusable="true" data-pc-section="firstfocusableelement"></span>
                <div class="p-dialog-content" data-pc-section="content">
                    <form class="flex flex-column gap-3 mt-3">
                    <div>
                        <label for="cardholder" class="block mb-1 text-color text-base">Competion Name</label>
                        
                        
                        <input v-model="competition_name" class="p-inputtext p-component w-full" data-pc-name="inputtext" data-pc-section="root" name="cardholder" type="text" id="cardholder">
            
                    </div>
                    <div>
                        <label for="cardholder" class="block mb-1 text-color text-base">Competition Description</label>
                        
                        <TextArea v-model="competition_description" rows="10" cols="70" />
                    </div>
                    <div>
                        <label for="cardholder" class="block mb-1 text-color text-base">Country Stage Period</label>
                        
                        <Calendar v-model="country_range" selectionMode="range" :manualInput="false" showButtonBar/>
                    </div>
                    <div>
                        <label for="cardholder" class="block mb-1 text-color text-base">Continent Stage Period</label>
                        
                        <Calendar v-model="continent_range" selectionMode="range" :manualInput="false" showButtonBar/>
                    </div>
                    <div>
                        <label for="cardholder" class="block mb-1 text-color text-base">World Stage Period</label>
                        
                        <Calendar v-model="world_range" selectionMode="range" :manualInput="false" showButtonBar/>
                    </div>
                    </form>
                </div>
                <div class="p-dialog-footer" data-pc-section="footer">
                    <div class="flex gap-3 justify-content-end border-top-1 surface-border pt-5">
                    <button @click="addCompetitionDialog = false" class="p-button p-component p-button-text" type="button" aria-label="Cancel" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
                        <!---->
                        <span class="p-button-label" data-pc-section="label">Cancel</span>
                        <!---->
                        <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                    </button>
                    <button @click="addCompetition()" class="p-button p-component p-button-rounded" type="button" aria-label="Update" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
                        <!---->
                        <span class="p-button-label" data-pc-section="label">Create</span>
                        <!---->
                        <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                    </button>
                    </div>
                </div>
                <span class="p-hidden-accessible p-hidden-focusable" tabindex="0" role="presentation" aria-hidden="true" data-p-hidden-accessible="true" data-p-hidden-focusable="true" data-pc-section="lastfocusableelement"></span>
            </Dialog>
    </NuxtLayout>
  </template>
  
  <script setup lang="ts">
    import { storeToRefs } from "pinia";
    import { useToast } from "primevue/usetoast";
    import { useAuthStore } from "~/stores/auth";
    import {useBackOfficeStore} from "~/stores/backoffice";
    // definePageMeta({
    //     middleware: ["auth"]
    // });
    const authStore = useAuthStore()
    const backofficeStore = useBackOfficeStore()
    const addCompetitionDialog = ref(false)
    const resetDialog = ref(false)
    const toast = useToast();
    const isLoading = ref(false);
    const name = ref();
    const description = ref();
    const rooms = ref();
    const image_url = ref();
    const price = ref();
    const owner = storeToRefs(authStore).user_id;
    const competitions = ref()
    const competition_name = ref()
    const competition_period = ref()
    const country_range = ref()
    const continent_range = ref()
    const world_range = ref()
    const competition_description = ref()
    const addDialog = () => {
        addCompetitionDialog.value = true;
    }
    const addCompetition = async () => {
       let data = {
            competition_name: competition_name.value,
            competition_period: competition_period.value,
            competition_description: competition_description.value,
            country_range: country_range.value,
            continent_range: continent_range.value,
            world_range: world_range.value
        }
        let result = await backofficeStore.addCompetition(data).then(async (data)=> {
            console.log("dataaaa",data.data.success)
            if (data.data.success) {
            await toast.add({ severity: 'success', summary: 'Success', detail: 'Succesfully Added', life: 3000 });
            addCompetitionDialog.value = false
            let results = await backofficeStore.allCompetitions(data).then((datdd:any) => {
            competitions.value = datdd?.data?.competitions
            })
            } else {
                await toast.add({ severity: 'error', summary: 'Error', detail: 'Could not add competion', life: 3000 });
            }
        })
    }

    const changeLevel = (id:any) => {
        console.log("level changed")
        let data = {
            competition_id: id
        }
        let result = backofficeStore.changeLevel(data).then( async (data) => {
            console.log("dtaaaas",data)
            if (data?.data?.success) {
                await toast.add({ severity: 'success', summary: 'Success', detail: 'Succesfully Changed Level', life: 3000 });
                let results = await backofficeStore.allCompetitions(data).then((datdd:any) => {
                    competitions.value = datdd?.data?.competitions
                })
            }  else {
                await toast.add({ severity: 'error', summary: 'Error', detail: 'Could not change level', life: 3000 });
            }
        })
    }
    const viewParticipants = (competitionId:any) => {

        navigateTo(`/admin/participants-${competitionId}`)

    }

    const dateFormatter = (dateString: any) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }


    onMounted( async () => {
        let data = {
            id: owner.value
        }
          let results = await backofficeStore.allCompetitions(data).then((datdd:any) => {
            competitions.value = datdd?.data?.competitions
          })
    })
  </script>
  
  <style>
  
  img.logo {
    width: 150px !important;
    height: auto !important;
    margin: auto !important;
  }
  .brand-logo {
    text-align: center;
  }
  button.p-button.p-component.create-button {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  input.p-inputtext.p-component {
    width: 100%;
  }
  span.COUNTRY {
    background-color: rgb(54, 0, 181);
    color: white;
    padding: 2px;
    border-radius: 6px;
}
span.CLOSED {
    background-color: red;
    padding: 2px;
    border-radius: 4px;
    color: white;
    font-weight: 500;
}
span.OPEN {
    background-color: #07b407;
    padding: 2px;
    border-radius: 2px;
    font-weight: 500;
    color: white;
}
span.p-calendar.p-component.p-inputwrapper {
    width: 100%;
}
  </style>