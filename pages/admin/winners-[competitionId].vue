<template>
    <NuxtLayout name="dashboard">
      <div class="page-content">
			    <h1 class="page-title">Stage Winners Page</h1>
				 <div class="card radius-10">
					<div class="card-header">
						<div class="d-flex align-items-center">
							<div>
								<h6 class="mb-0">Stage Winners for {{ competition_name }} </h6>
                                <Button @click="navigateTo('/admin/competitions')" class="create-button" label="Back To Competitions" icon="pi pi-arrow-left" />
							</div>
                            <div class="flex lg:align-items-start flex-column mb-4 lg:flex-row p-4 bg-blue-100 border-round border-1 border-blue-300">
                            <div class="flex align-items-start">
                                <i class="pi pi-user text-blue-900 text-2xl mr-3"></i>
                                <div class="mr-3 flex lg:align-items-start flex-column lg:flex-row">
                                <div class="text-blue-900 font-medium mr-0 lg:mr-2 mb-2 lg:mb-0 line-height-3">Overall Winner</div>
                                <p class="m-0 p-0 text-blue-700 line-height-3">{{overall_winner?.participant?.first_name ? overall_winner?.participant?.first_name : "NOT"}} {{overall_winner?.participant?.last_name ? overall_winner?.participant?.last_name : "DETERMINED"}}</p>
                                </div>
                            </div>
                            <a class="flex align-items-center ml-auto no-underline text-blue-900 font-medium mt-3 lg:mt-0 cursor-pointer p-ripple" data-pd-ripple="true">
                                <span>{{overall_winner?.votes}} Votes</span>
                                <i class="pi pi-check text-blue-900 ml-2"></i>
                                <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                            </a>
                            </div>
						</div>
					</div>
                    <DataTable :value="history" tableStyle="min-width: 50rem">
                    <Column header="Full Name">
                        <template #body="slotProps">
                            {{ slotProps?.data?.participant?.first_name }} {{ slotProps?.data?.participant?.last_name }}
                        </template>
                    </Column>
                    <Column field="price" header="Phone Number">
                        <template #body="slotProps">
                            {{ slotProps?.data?.participant?.phone_number }}
                        </template>
                    </Column>
                    <Column field="price" header="Gender">
                        <template #body="slotProps">
                            {{ slotProps?.data?.participant?.gender }}
                        </template>
                    </Column>
                    <Column field="rating" header="Country">
                        <template #body="slotProps">
                            {{slotProps.data?.participant?.country }}
                        </template>
                    </Column>
                    <Column field="rating" header="Continent">
                        <template #body="slotProps">
                            {{slotProps.data?.participant?.continent }}
                        </template>
                    </Column>
                    <Column field="price" header="Recent Level Won">
                        <template #body="slotProps">
                            {{slotProps.data.competition_level === "CHAMPION" ? "WORLD" : slotProps.data.competition_level}}
                        </template>
                    </Column>
                    <Column header="Likes">
                        <template #body="slotProps">
                            {{slotProps.data?.participant.likes ? slotProps.data?.participant.likes.length : 0 }}
                        </template>
                    </Column>
                    <Column header="Votes">
                        <template #body="slotProps">
                            {{slotProps.data?.votes }}
                        </template>
                    </Column>
                    <Column field="rating" header="Date Registered">
                        <template #body="slotProps">
                            {{ slotProps?.data?.date_created ? dateFormatter(slotProps?.data?.date_created) : "NOT SET" }}
                        </template>
                    </Column>
                    <!-- <Column header="Actions">
                        <template #body="slotProps">
                            <SplitButton
                                icon="pi pi-ellipsis-v"
                                :model="[
                                    { label: 'Change Level', icon: 'pi pi-fw pi-arrow-up', command: () => changeLevel(slotProps.data?.id) },
                                    { label: 'View Participants', icon: 'pi pi-fw pi-user', command: () => viewParticipants(slotProps.data?.id) }
                                ]"
                            ></SplitButton>
                        </template>
                    </Column> -->
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
                        <Textarea v-model="competition_description" rows="10" cols="70" />
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
    definePageMeta({
        middleware: ["auth"]
    });
    const authStore = useAuthStore()
    const backofficeStore = useBackOfficeStore()
    const addCompetitionDialog = ref(false)
    const resetDialog = ref(false)
    const toast = useToast();
    const isLoading = ref(false);
    const name = ref();
    const description = ref();
    const overall_winner = ref()
    const rooms = ref();
    const { params: { competitionId } }: any = useRoute();
    const image_url = ref();
    const price = ref();
    const owner = storeToRefs(authStore).user_id;
    const competitions = ref()
    const competition_name = ref()
    const history = ref()
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
          let resull = await backofficeStore.single2Competition(competitionId).then((data) => {
            history.value = data?.data?.single?.history
            competition_name.value = data?.data?.single?.competition_name
          })
          let overall_winnerr = await backofficeStore.overallWinner(competitionId).then((data) => {
            overall_winner.value = data?.data?.overall_winner
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