<template>
    <LandingNavbar/>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
        <ol class="flex list-none m-0 p-0 align-items-center text-sm text-600 mb-5 border-top-1 border-bottom-1 surface-border py-2 overflow-x-auto">
        <li @click="goToCompetition()" class="mr-2">All Models</li>
        <li class="mr-2 inline-flex align-items-center">
            <i class="pi pi-angle-right text-sm">Model Detail Page</i>
        </li>
        </ol>
    <div class="grid">
    <div class="col-12 lg:col-6 flex justify-content-center">
      <div id="pv_id_26" class="p-galleria p-component p-galleria-indicators-bottom" data-pc-name="galleria" data-pc-section="root">
        <!---->
        <!---->
        <div class="p-galleria-content" aria-live="off" data-pc-section="content">
          <div class="p-galleria-item-wrapper" data-pc-section="itemwrapper">
            <div class="p-galleria-item-container" data-pc-section="itemcontainer">
              <!---->
              <div id="pv_id_26_item_2" class="p-galleria-item" role="group" aria-label="3" aria-roledescription="Slide" data-pc-section="item">
                <div class="w-full h-full overflow-hidden">
                  <img @click="openGallery(model?.pictures)" :src="`images/${model?.pictures[0].image_url}`" class="w-full block">
                </div>
              </div>
              <!---->
              <!---->
            </div>
          </div>
          <!---->
        </div>
        <!---->
      </div>
    </div>
    <div class="col-12 lg:col-6 lg:col-6 py-3 lg:pl-5">
      <div class="flex align-items-center justify-content-between mb-4">
        <span class="text-900 text-4xl font">{{ model?.first_name }} {{ model?.last_name }}</span>
        <span class="inline-flex align-items-center">
          <i class=" mr-2">Votes:</i>
          <span class="font-bold text-900">{{model?.votes ? model?.votes.length : 0 }}</span>
        </span>
        <span class="inline-flex align-items-center">
            <i class=" mr-2">Likes:</i>
            <span>
                    <i v-if="hasLike(model?.likes)" @click="removeLike(model?.id)" class="pi pi-heart-fill text-yellow-500 mr-1"></i>
                    <i v-else @click="addLike(model?.id)" class="pi pi-heart text-yellow-500 mr-1"></i>
                    <span class="font-medium">{{model?.likes ? model?.likes.length : 0 }}</span>
            </span>
        </span>
      </div>
      <div class="mb-3 flex align-items-center justify-content-between">
                <span class="font-bold text-900">Share on</span>
              </div>
              <div class="grid grid-nogutter align-items-center mb-5">
                <div @click="shareOnFacebook(model?.first_name,model?.last_name,model?.id)" class="col h-3rem text-900 inline-flex justify-content-center align-items-center flex-shrink-0 mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors"> <i class="pi pi-facebook" style="font-size: 1.5rem"></i></div>
                <div @click="shareOnTwitter(model?.first_name,model?.last_name,model?.id)" class="col h-3rem text-900 inline-flex justify-content-center align-items-center flex-shrink-0 mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors"> <i class="pi pi-twitter" style="font-size: 1.5rem"></i></div>
                <div @click="shareOnWhatsapp(model?.first_name,model?.last_name,model?.id)" class="col h-3rem text-900 inline-flex justify-content-center align-items-center flex-shrink-0 mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors"> <i class="pi pi-whatsapp" style="font-size: 1.5rem"></i></div>
     </div>
      <div class="flex mb-5">
         <div class="w-12">
            <Button  v-if="hasVote(model?.votes)" @click="removeVote(model?.id)" label="Remove Vote for Model" icon="pi pi-times" iconPos="right" />
            <Button v-else @click="addVote(model.id,model?.country,model?.continent)" label="Vote for Model" icon="pi pi-plus" iconPos="right" />
         </div>
      </div>
      <div class="flex mb-5">
        <div class="w-6 mr-1">
        <Button class="gallerybutton" @click="openGallery(model?.pictures)" label="Gallery" />
        </div>
        <div class="w-6 ml-1">
        <Button class="gallerybutton" @click="getSelectedModel(model?.id)" label="Compare" />
        </div>
    </div>
    </div>
  </div>
</div>
  <Galleria v-model:visible="displayGallery" :value="images" :responsiveOptions="responsiveOptions" :numVisible="9" containerStyle="max-width: 50%" :circular="true" :fullScreen="true" :showItemNavigators="true"  :showThumbnails="false">
      <template #item="slotProps">
          <img :src="`images/${slotProps.item.image_url}`"  style="width: 100%; display: block" />
      </template>
      <template #thumbnail="slotProps">
          <img :src="`images/${slotProps.item.image_url}`"  style="display: block" />
      </template>
  </Galleria>
  <Dialog v-model:visible="compareDialog" maximizable modal header="Compare Models" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <div class="col-12">
      <DropDown @change="modelToCompare()" v-model="selectedModel" :options="models" filter optionValue="id" optionLabel="first_name"  placeholder="Select Model To Compare With" class="w-full md:w-12 mb-2"/>
     
    </div>
    <div class="grid">
      
    <div class="col-12 md:col-6 flex justify-content-center align-items-center mt-6 sm:mt-0">
      <div class="surface-card shadow-2 border-round p-3" style="border-radius: 6px;">
  
<Galleria :value="first_model?.pictures" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
    :showItemNavigators="true" :showThumbnails="false">
    <template #item="slotProps">
        <img :src="`images/${slotProps.item.image_url}`" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.image_url" style="display: block;" />
    </template>
</Galleria>
  <div class="flex justify-content-between align-items-start">
    <div>
      <div class="text-xl font-medium text-900 mb-2">{{ first_model?.first_name }} {{ first_model?.last_name }}</div>
     
    </div>
  </div>
  <ul class="list-none m-0 p-0">
    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
      <span class="text-600 font-medium text-sm">Votes</span>
      <span class="text-900 font-medium text-sm">{{first_model?.votes ? first_model?.votes.length : 0 }}</span>
    </li>
    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
      <span class="text-600 font-medium text-sm">Likes</span>
      <span class="text-900 font-medium text-sm">{{first_model?.likes ? first_model?.likes.length : 0 }}</span>
    </li>
    <li class="px-0 py-2 flex justify-content-between align-items-center">
      <span class="text-600 font-medium text-sm">Sponsors</span>
      <span class="text-600 pt-2"><i v-for="sponsor in first_model?.sponsors" class="p-tag p-component p-tag-warning trt">{{ sponsor }}</i></span>
    </li>
  </ul>
</div>
      
    </div>
    
    <div v-if="second_model" class="col-12 md:col-6 flex justify-content-center align-items-center mt-6 sm:mt-0">
      
      <div class="surface-card shadow-2 border-round p-3" style="border-radius: 6px;">
      
<Galleria :value="second_model?.pictures" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
    :showItemNavigators="true" :showThumbnails="false">
    <template #item="slotProps">
        <img :src="`images/${slotProps.item.image_url}`" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.image_url" style="display: block;" />
    </template>
</Galleria>
  <div class="flex justify-content-between align-items-start">
    <div>
      <div class="text-xl font-medium text-900 mb-2">{{ second_model?.first_name }} {{ second_model?.last_name }}</div>
     
    </div>
  </div>
  <ul class="list-none m-0 p-0">
    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
      <span class="text-600 font-medium text-sm">Votes</span>
      <span class="text-900 font-medium text-sm">{{second_model?.votes ? second_model?.votes.length : 0 }}</span>
    </li>
    <li class="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
      <span class="text-600 font-medium text-sm">Likes</span>
      <span class="text-900 font-medium text-sm">{{second_model?.likes ? second_model?.likes.length : 0 }}</span>
    </li>
    <li class="px-0 py-2 flex justify-content-between align-items-center">
      <span class="text-600 font-medium text-sm">Sponsors</span>
      <span class="text-600 pt-2"><i v-for="sponsor in second_model?.sponsors" class="p-tag p-component p-tag-warning trt">{{ sponsor }}</i></span>
    </li>
  </ul>
</div>
      
    </div>
    <div v-else class="col-12 md:col-6 flex justify-content-center align-items-center mt-6 sm:mt-0">
      
      <div class="surface-card shadow-2 border-round p-3" style="border-radius: 6px;">
      <p>Select Second Model</p>
</div>
      
    </div>
  </div>
  </Dialog>
  <LandingFooter/>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useToast } from "primevue/usetoast";
import auth from "~/middleware/auth";
import { useAuthStore } from "~/stores/auth";
import { useBackOfficeStore } from "~/stores/backoffice";
import countriesData from "~/countries.json";
definePageMeta({
        middleware: ["auth"]
});
const toast = useToast();
const authStore = useAuthStore()
const backofficeStore = useBackOfficeStore()
const isLoading = ref(false);
const compareDialog = ref(false);
const displayGallery = ref(false);
const { params: { userId, competitionId,modelId } }: any = useRoute();
const competitions = ref()
const competition = ref()
const selectedModel = ref()
const models = ref()
const user = ref()
//@ts-ignore
const { value: { country,continent }} = useCookie('user');
const user_country = ref(country)
const model = ref()
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
const participants = ref([])
const responsiveOptions = ref([
    {
        breakpoint: '1500px',
        numVisible: 5
    },
    {
        breakpoint: '1024px',
        numVisible: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]);
const first_model = ref()
const second_model = ref()
const images = ref()
const searchText = ref()
const goToCompetition = () => {
    navigateTo(`/competitionVoting-${userId}-${competitionId}`)
}
const shareOnFacebook = (name, surname, modelId) => {
    let text = `Please vote for your fave ${name} ${surname} who is competing in the ${competition.value.competition_name}, Click the link below to vote`;
    let link = `http://models.devpreview.net/competitionRedirect-${competitionId}-${modelId}`;
    const facebookIntentURL = "https://www.facebook.com/sharer/sharer.php";
    const contentQuery = `?u=${encodeURIComponent(link)}&description=${encodeURIComponent(text)}`;
    const shareURL = facebookIntentURL + contentQuery;
    window.open(shareURL, "_blank");
};
const shareOnTwitter = (name,surname,modelId) => {
        let text = `Please vote for your fave ${name} ${surname} who is competing in the ${competition.value.competition_name}, Click the link below to vote`
        let link = `http://models.devpreview.net/competitionRedirect-${competitionId}-${modelId}`
        const twitterIntentURL = "https://twitter.com/intent/tweet";
        const contentQuery = `?url=${encodeURIComponent(link)}&text=${encodeURIComponent(text)}`;
        const shareURL = twitterIntentURL + contentQuery;
        window.open(shareURL, "_blank");
}
const shareOnWhatsapp = (name,surname,modelId) => {
        let text = `Please vote for your fave ${name} ${surname} who is competing in the ${competition.value.competition_name}, Click the link below to vote`
        let link = `http://models.devpreview.net/competitionRedirect-${competitionId}-${modelId}`
        const url = "https://wa.me/?text=" + encodeURIComponent(text + "\n" + link);
        window.open(url, "_blank");
}

const filterWithContinent = async () => {
  participants.value = []
  await getModels()
  let parts = participants.value;
  let currentContinent = selectedContinent.value;
  participants.value = parts.filter((participant) => {
    return participant.continent === currentContinent
  })
}
const filterCompetitionsText = async () => {
  await getModels();

  let comps = participants.value;
  let typed = searchText.value;
  let normalizedTypedText = typed.toLowerCase().trim();

  participants.value = comps.filter((participant) => {
    const firstNameMatch = participant.first_name.toLowerCase().includes(normalizedTypedText);
    const lastNameMatch = participant.last_name.toLowerCase().includes(normalizedTypedText);

    return firstNameMatch || lastNameMatch;
  });
};

const modelToCompare = async () => {
  let data = {
    id: selectedModel.value,
    competition_id: competitionId
  }
  let result = await backofficeStore.getModel(data).then((response) => {
    console.log(response?.data?.model)
    second_model.value = response.data.model
   })
}
const getSelectedModel = async (id) => {
  let data = {
    id: id,
    competition_id: competitionId
  }
  let all_models = await backofficeStore.getModels(data).then((modelss) => {
    console.log("my models", modelss)
    models.value = modelss?.data?.model
  })
   let result = await backofficeStore.getModel(data).then((response) => {
    console.log(response?.data?.model)
    first_model.value = response.data.model
    compareDialog.value = true
   })
}

const openGallery = (items) => {
  images.value = null
  displayGallery.value = true
  images.value = items
  console.log("pictures",images.value)
}
const hasLike = (likes) => {
    // Check if likes is not undefined and there is a like with the given user_id and competition_level
    return likes && likes.some(
        (like) =>
        like.user_id === userId && like.competition_level === competition?.value?.competition_level
    );
};

const hasVote = (votes) => {
    console.log("inside has vote", votes);

    // Check if votes is not undefined and there is a vote with the given user_id and competition_level
    return votes && votes.some(
        (like) =>
        like.user_id === userId && like.competition_level === competition?.value?.competition_level
    );
};

const addVote = async (modelId:any,modelCountry:any,modelContinent:any) => {
  if (userId) {
     
    if (competition.value?.competition_level === "COUNTRY") {
  if(user_country.value?.name !== modelCountry) {
       
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
                        let single_model = await backofficeStore.singleModel(modelId).then((data) => {
        console.log(data?.data?.single)
        model.value = data?.data?.single
    })
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
                        let single_model = await backofficeStore.singleModel(modelId).then((data) => {
        console.log(data?.data?.single)
        model.value = data?.data?.single
    })
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

} else if(competition.value?.competition_level === "WORLD") {

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
                      let single_model = await backofficeStore.singleModel(modelId).then((data) => {
        console.log(data?.data?.single)
        model.value = data?.data?.single
    })
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

}  else {

   console.log("no more voting")

}
 }
 else {
   toast.add({ severity: 'info', summary: 'Sign In Required', detail: "Log In first", life: 5000 });
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
            let single_model = await backofficeStore.singleModel(modelId).then((data) => {
        console.log(data?.data?.single)
        model.value = data?.data?.single
    })
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
            let single_model = await backofficeStore.singleModel(modelId).then((data) => {
        console.log(data?.data?.single)
        model.value = data?.data?.single
    })
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
            let single_model = await backofficeStore.singleModel(modelId).then((data) => {
        console.log(data?.data?.single)
        model.value = data?.data?.single
    })
            let results = await backofficeStore.singleCompetition(competitionId).then((data:any) => {
                console.log("data",data.data.single)
                competition.value =data.data?.single
                participants.value = data?.data?.single?.participants
            })
        }
        else {
            toast.add({ severity: 'warn', summary: 'Error', detail: "Could remove vote", life: 5000 });
        }
      })
}

const filterCountries = async () => {
      await filterWithContinent()
      selectedCountry.value = null
      const filteredCountriess = countries.value.filter(country => country.continent === selectedContinent.value);

      // Create a new object with the filtered countries
      filteredCountries.value = filteredCountriess

      return filteredCountriess;
}
const filterWithCountry = async () => {
      participants.value = []
      await getModels()
      let parts = participants.value;
      let currentCountry = selectedCountry.value
      console.log("selected country", currentCountry.name)
      let currentContinent = selectedContinent.value;
      participants.value = parts.filter((participant) => {
       
        return participant.country?.name === selectedCountry.value?.name
        
      })
}
const resetFilter = async () => {
      participants.value = []
      selectedContinent.value = null
      selectedCountry.value = null
      searchText.value = null
      await getModels()
}

const getModels = async () => {
  let results = await backofficeStore.singleCompetition(competitionId).then((data:any) => {
        console.log("data",data.data.single)
        competition.value =data.data?.single
        participants.value = data?.data?.single?.participants
    })
}

onMounted( async () => {

    let single_model = await backofficeStore.singleModel(modelId).then((data) => {
        console.log(data?.data?.single)
        model.value = data?.data?.single
    })
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
.col-12.md\:col-6.lg\:col-3.mb-5.lg\:mb-0.fdjk {
    vertical-align: top;
    /* height: 120px; */
    border-radius: 5px;
    margin-right: 15px;
    background-color: #fff;
    box-shadow: 0 5px 10px 0 rgba(41,61,102,.2);
    cursor: pointer;
    color: #2d3040;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    padding: 0;
    z-index: 1;
}
.p-tag.p-tag-warning {
    background-color: #F59E0B;
    color: #ffffff;
    margin: 2px;
}
button.p-button.p-component.gallerybutton {
    background-color: #A5CB3A;
    border-color: white;
    margin-bottom: 5px;
    font-size: 15px;
}
.custom-shadow-2 {
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 5px 10px 0 rgba(41,61,102,.2);
    border: 1px solid #e1e8f5;
    padding: 24px 20px;
}
.flex.flex-column.md\:flex-row.gap-3.md\:align-items-center.mycolor.border-round-xl.p-3 {
    background-color: #FCAB2B;
}
.flex-1.flex.justify-content-center.align-items-center.bg-primary-400.shadow-1.p-3.border-round-md {
    background-color: #000000 !important;
    color: white;
}
span.bg-blue-50.text-blue-400.border-round.inline-flex.py-1.px-2.text-sm {
    color: white !important;
    background-color: #fcab2b !important;
}
button.p-button.p-component.p-ripple.p-button-outlined.ngt {
    background-color: #A5CB3A;
    color: white;
}
.p-button-outlined.p-button-secondary.w-6.ml-2.fdjl {
    color: white;
    background-color: #A5CB3A;
}
.p-button-outlined.p-button-secondary.w-6.mr-2.dkl {
    background-color: black;
    color: white;
}
button.p-button.p-component.p-button-outlined.p-button-secondary.w-6.ml-2.ghf {
    background-color: #a5cb3a;
    color: white;
}


h1{
  color: #396;
  font-weight: 100;
  font-size: 40px;
  margin: 40px 0px 20px;
}

#clockdiv{
	font-family: sans-serif;
	color: #fff;
	display: inline-block;
	font-weight: 100;
	text-align: center;
	font-size: 30px;
}
#clockdiv > div {
    padding: 10px;
    padding-bottom: 8px;
    margin: 5px;
    margin-left: 0px;
    color: black;
    border-radius: 3px;
    background: #a5cb3a00;
    display: inline-block;
}
.md\:col-6.lg\:col-3.mb-5.lg\:mb-0.fdjk {
    vertical-align: top;
    /* height: 120px; */
    border-radius: 5px;
    margin: 15px;
    width: 275px;
    background-color: #fff;
    box-shadow: 0 5px 10px 0 rgba(41,61,102,.2);
    cursor: pointer;
    color: #2d3040;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    padding: 0;
    z-index: 1;
}


#clockdiv div > span {
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 3px;
    background: #000000;
    display: inline-block;
}

.smalltext {
    padding-top: 0px;
    font-size: 10px;
}
.inner-text {
    color: white;
    font-size: 18px;
}
p.text-600.font-medium.mb-2 {
    padding-top: 33px !important;
    /* background-color: black; */
    font-size: 12px;
    /* color: whitesmoke; */
}
</style>