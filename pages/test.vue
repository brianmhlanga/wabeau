<template>
        <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
        <div class="text-900 font-medium text-4xl mb-4">Models for {{ competition?.competition_name }}({{ competition?.competition_level }} LEVEL) </div>
        <p class="mt-0 p-0 mb-5 text-600 text-2xl">You can only vote once per level and for participants from your country or continent</p>
        <div class="grid -mt-3 -ml-3 -mr-3">
            <div v-for="model in participants"  class="col-12 md:col-6 lg:col-4 fhfh">
            <div class="p-2">
                <div class="shadow-2 p-4 surface-card border-round">
                <div class="relative mb-3">
                    <span class="surface-card text-900 shadow-2 px-3 py-2 absolute tre" style="border-radius: 1.5rem;left: 1rem;z-index: 10000;top: 1rem;">{{ model?.country?.name }}</span>
                <Galleria :value="model?.pictures" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
                    <template #item="slotProps">
                        <img :src="`uploads/${slotProps.item.image_url}`"  style="width: 100%" />
                    </template>
                    <template #thumbnail="slotProps">
                        <img :src="`uploads/${slotProps.item.image_url}`"  />
                    </template>
                </Galleria>
                </div>
                <div class="flex justify-content-between align-items-center mb-3">
                    <span class="text-900 font-medium text-xl">{{model?.first_name}} {{ model?.last_name }}</span>
                    <span class="p-tag p-component p-tag-warning">Votes<span class="p-tag p-component p-tag-warning votes">{{model?.votes ? model?.votes.length : 0 }}</span></span>
                    <span>
                    <i v-if="hasLike(model?.likes)" @click="removeLike(model?.id)" class="pi pi-heart-fill text-yellow-500 mr-1"></i>
                    <i v-else @click="addLike(model?.id)" class="pi pi-heart text-yellow-500 mr-1"></i>
                    <span class="font-medium">{{model?.likes ? model?.likes.length : 0 }}</span>
                    </span>
                </div>
                <div class="flex flex-column w-full p-4">
                    <span class="text-900 font-medium text-xl border-200 pb-2" style="border-bottom: 1px solid;">Sponsors</span>
                    <span class="text-600 pt-2"><i v-for="sponsor in model?.sponsors" class="p-tag p-component p-tag-warning trt">{{ sponsor }}</i></span>
                </div>
                <button v-if="hasVote(model?.votes)" @click="removeVote(model?.id)" class="vote p-button p-component w-full" type="button" aria-label="Add to Cart" data-pc-name="button" data-pc-section="root" data-pd-ripple="true"><span class="p-button-icon p-button-icon-left pi pi-times" data-pc-section="icon"></span><span class="p-button-label" data-pc-section="label">Remove Vote for {{ model?.first_name }}</span><!----><span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span></button>
                <button v-else @click="addVote(model.id,model?.country,model?.continent)" class="vote p-button p-component w-full" type="button" aria-label="Add to Cart" data-pc-name="button" data-pc-section="root" data-pd-ripple="true"><span class="p-button-icon p-button-icon-left pi pi-check" data-pc-section="icon"></span><span class="p-button-label" data-pc-section="label">Vote for {{ model?.first_name }}</span><!----><span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span></button>
                </div>
            </div>
            </div>
        </div>
        </div>
</template>
  
  <script setup lang="ts">
    import { storeToRefs } from "pinia";
    import { useToast } from "primevue/usetoast";
    import auth from "~/middleware/auth";
    import { useAuthStore } from "~/stores/auth";
    import { useBackOfficeStore } from "~/stores/backoffice";
    import countriesData from "~/countries.json";
    const toast = useToast();
    const authStore = useAuthStore()
    const backofficeStore = useBackOfficeStore()
    const isLoading = ref(false);
    const { params: { userId, competitionId } }: any = useRoute();
    const competitions = ref()
    const competition = ref()
    const user = ref()
    //@ts-ignore
    const { value: { country,continent }} = useCookie('user');
    const user_country = ref(country)
    const user_continent = ref(continent)
    const selectedCountry = ref()
    const selectedContinent = ref()
    const selectedGender = ref()
    const filteredCountries = ref()
    const countries = ref(countriesData)
    const first_name = ref()
    const last_name = ref()
    const email = ref()
    const phone_number = ref()
    const address = ref()
    const sponsors = ref()
    const continents = ref(["AFRICA","ASIA","EUROPE","NORTH_AMERICA","OCEANIA","SOUTH_AMERICA"])
    const gender = ref(["MALE", "FEMALE"])
    const uploaded_images = ref<any>([])
    const participants = ref()
    const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
    ]);
    const  hasLike = (likes:any) => {
  // Check if there is a like with the given user_id and competition_level
    return likes.some(
        (like:any) =>
        like.user_id === userId && like.competition_level === competition?.value?.competition_level
    );
    }
    const  hasVote = (votes:any) => {
        console.log("inside has vote",votes)
  // Check if there is a vote with the given user_id and competition_level

    return votes.some(
        (like:any) =>
        like.user_id === userId && like.competition_level === competition?.value?.competition_level
    );
    }
    const addVote = async (modelId:any,modelCountry:any,modelContinent:any) => {
    
    
    if (competition.value?.competition_level === "COUNTRY") {
      if(user_country.value?.name !== modelCountry?.name) {
           
        toast.add({ severity: 'warn', summary: 'Error', detail: "You can only vote for participants from a similar country as you at this level", life: 5000 });
      } else {
        let data = {
            user_id: userId,
            model_id: modelId,
            level: "COUNTRY",
            competition_id: competitionId
        }
        let check = await backofficeStore.checkVote(data).then( async(data2)=> {
            console.log("check result",data)
            console.log(data2?.data?.competition?.id)
            if (!data2?.data?.competition?.id) {
                let result = await backofficeStore.addVote(data).then( async(data) => {
                    if (data?.data?.success) {
                            toast.add({ severity: 'info', summary: 'Votes', detail: "Succesfully Voted for model", life: 5000 });
                            let results = await backofficeStore.singleCompetition(competitionId).then((data:any) => {
                                console.log("data",data.data.single)
                                competition.value =data.data?.single
                                participants.value = data?.data?.single?.participants
                            })
                        }
                        else {
                            toast.add({ severity: 'warn', summary: 'Error', detail: "Could not vote for model", life: 5000 });
                        }
                })
            } else {
                toast.add({ severity: 'warn', summary: 'Error', detail: "You have already voted for another participant", life: 5000 });
            }
        })
        
           
      }

    } else if(competition.value?.competition_level === "CONTINENT") {

      if(user_continent.value !== modelContinent) {
           console.log("my two values",user_continent.value,modelContinent)
           toast.add({ severity: 'warn', summary: 'Error', detail: "You can only vote for participants from a similar continent as you at this level", life: 5000 });
         } else {
          let data = {
            user_id: userId,
            model_id: modelId,
            level: "CONTINENT",
            competition_id: competitionId
        }

        let check = await backofficeStore.checkVote(data).then( async(data2)=> {
            console.log("check result",data)
            console.log(data2?.data?.competition?.id)
            if (!data2?.data?.competition?.id) {
                let result = await backofficeStore.addVote(data).then( async(data) => {
                    if (data?.data?.success) {
                            toast.add({ severity: 'info', summary: 'Votes', detail: "Succesfully Voted for model", life: 5000 });
                            let results = await backofficeStore.singleCompetition(competitionId).then((data:any) => {
                                console.log("data",data.data.single)
                                competition.value =data.data?.single
                                participants.value = data?.data?.single?.participants
                            })
                        }
                        else {
                            toast.add({ severity: 'warn', summary: 'Error', detail: "Could not vote for model", life: 5000 });
                        }
                })
            } else {
                toast.add({ severity: 'warn', summary: 'Error', detail: "You have already voted for another participant", life: 5000 });
            }
        })
         }

    } else {

       console.log("no more voting")

    }
    }
    const addLike = async (modelId: any) => {
        let data = {
            user_id: userId,
            model_id: modelId,
            competition_id: competitionId
        }
          let result = await backofficeStore.addLike(data).then( async (data) => {
            console.log("added like", data)
            if (data?.data?.success) {
                toast.add({ severity: 'info', summary: 'Likes', detail: "Liked Model", life: 5000 });
                let results = await backofficeStore.singleCompetition(competitionId).then((data:any) => {
                    console.log("data",data.data.single)
                    competition.value =data.data?.single
                    participants.value = data?.data?.single?.participants
                })
            }
            else {
                toast.add({ severity: 'warn', summary: 'Error', detail: "Could not like model", life: 5000 });
            }
          })
    }
    const removeLike = async (modelId: any) => {
        let data = {
            user_id: userId,
            model_id: modelId,
            competition_id: competitionId
        }
          let result = await backofficeStore.removeLike(data).then( async (data) => {
            console.log("removed like", data)
            if (data?.data?.success) {
                toast.add({ severity: 'info', summary: 'Likes', detail: "Unliked Model", life: 5000 });
                let results = await backofficeStore.singleCompetition(competitionId).then((data:any) => {
                    console.log("data",data.data.single)
                    competition.value =data.data?.single
                    participants.value = data?.data?.single?.participants
                })
            }
            else {
                toast.add({ severity: 'warn', summary: 'Error', detail: "Could not like model", life: 5000 });
            }
          })
    }
    const removeVote = async (modelId: any) => {
        let data = {
            user_id: userId,
            model_id: modelId,
            competition_id: competitionId
        }
          let result = await backofficeStore.removeVote(data).then( async (data) => {
            console.log("removed vote", data)
            if (data?.data?.success) {
                toast.add({ severity: 'info', summary: 'Likes', detail: "Removed Vote from Model", life: 5000 });
                let results = await backofficeStore.singleCompetition(competitionId).then((data:any) => {
                    console.log("data",data.data.single)
                    competition.value =data.data?.single
                    participants.value = data?.data?.single?.participants
                })
            }
            else {
                toast.add({ severity: 'warn', summary: 'Error', detail: "Could not like model", life: 5000 });
            }
          })
    }
    const filterCountries = () => {
        selectedCountry.value = null
        const filteredCountriess = countries.value.filter(country => country.continent === selectedContinent.value);

        // Create a new object with the filtered countries
        filteredCountries.value = filteredCountriess

        return filteredCountriess;
    }
    
    onMounted( async () => {
        let result = await authStore.singleUser(userId).then((data:any) => {
            console.log("data",data.data.single)
           let user = data.data.single
            first_name.value = user.first_name,
            last_name.value = user.last_name,
            email.value = user.email,
            phone_number.value = user.phone_number,
            address.value = user.address
            
        })
        let results = await backofficeStore.singleCompetition(competitionId).then((data:any) => {
            console.log("data",data.data.single)
            competition.value =data.data?.single
            participants.value = data?.data?.single?.participants
        })
      })
    const dateFormatter = (dateString: any) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }
  </script>
  
  <style scoped>
  
  img.logo {
    width: 150px !important;
    height: auto !important;
    margin: auto !important;
  }
  .brand-logo {
    text-align: center;
  }
  .absolute.h-4rem.w-4rem.border-2.border-yellow-500.bg-gray-900.text-white.inline-flex.justify-content-center.align-items-center {
      font-size: 9px;
  }
  .absolute.h-6rem.w-5rem.border-2.border-yellow-500.bg-gray-900.text-white.inline-flex.justify-content-center.align-items-center {
      font-size: 10px;
      padding: 2px;
  }
  small.red {
    color: #f50808;
    font-size: small;
    font-style: italic;
    padding: 3px;
}
.surface-section.px-4.py-8.md\:px-6.lg\:px-8 {
    width: 1404px;
}
button.vote.p-button.p-component.w-full {
    background-color: #fcac2b;
    border: 1px solid #fcac2b;
}
span.text-900.font-medium.text-xl.border-200.pb-2 {
    font-size: 11px !important;
}
i.pi.pi-fw.pi-star-fill.mr-2 {
    width: 60px;
}
i.grtd.mr-2 {
    background-color: #8ead32;
    color: white;
    font-size: 12px;
    height: 22px;
    font-style: normal;
    /* padding: 1px; */
    border-radius: 3px;
}
i.p-tag.p-component.p-tag-warning.trt {
    background-color: #8ead32;
    margin-left: 5px;
}
span.p-tag.p-component.p-tag-warning.votes {
    background-color: white;
    color: black;
    margin-left: 7px;
}
  </style>