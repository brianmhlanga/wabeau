import { defineStore } from "pinia";
import axios from "axios";

export const useBackOfficeStore = defineStore('backoffice', {
  state: () => ({

    
  }),
  actions: {
  async  addCompetition(info: any){
    var data = JSON.stringify({
        "data": info,
    });
    var config = {
        method: 'post',
        url: '/backoffice/addCompetition',
        headers: { 
            'Content-Type': 'application/json'
        },
        data: data
    };

    const result: any = await axios(config).then(function (response) {
        return {
            data: response.data,
            success: true
         }
    })
    .catch(function (error) {
        console.log(error);
        return {
            success: false
         }
    });
    return result;
  },
  async  changeLevel(info: any){
    var data = JSON.stringify({
        "data": info,
    });
    var config = {
        method: 'post',
        url: '/backoffice/changeLevel',
        headers: { 
            'Content-Type': 'application/json'
        },
        data: data
    };

    const result: any = await axios(config).then(function (response) {
        return {
            data: response.data,
            success: true
         }
    })
    .catch(function (error) {
        console.log(error);
        return {
            success: false
         }
    });
    return result;
  },
  async  addParticipant(info: any){
    var data = JSON.stringify({
        "data": info,
    });
    var config = {
        method: 'post',
        url: '/backoffice/addParticipant',
        headers: { 
            'Content-Type': 'application/json'
        },
        data: data
    };

    const result: any = await axios(config).then(function (response) {
        return {
            data: response.data,
            success: true
         }
    })
    .catch(function (error) {
        console.log(error);
        return {
            success: false
         }
    });
    return result;
  },
  async  addVote(info: any){
    var data = JSON.stringify({
        "data": info,
    });
    var config = {
        method: 'post',
        url: '/backoffice/addVote',
        headers: { 
            'Content-Type': 'application/json'
        },
        data: data
    };

    const result: any = await axios(config).then(function (response) {
        return {
            data: response.data,
            success: true
         }
    })
    .catch(function (error) {
        console.log(error);
        return {
            success: false
         }
    });
    return result;
  },
  async  checkVote(info: any){
    var data = JSON.stringify({
        "data": info,
    });
    var config = {
        method: 'post',
        url: '/backoffice/checkVote',
        headers: { 
            'Content-Type': 'application/json'
        },
        data: data
    };

    const result: any = await axios(config).then(function (response) {
        return {
            data: response.data,
            success: true
         }
    })
    .catch(function (error) {
        console.log(error);
        return {
            success: false
         }
    });
    return result;
  },
  async  getModel(info: any){
    var data = JSON.stringify({
        "data": info,
    });
    var config = {
        method: 'post',
        url: '/backoffice/getModel',
        headers: { 
            'Content-Type': 'application/json'
        },
        data: data
    };

    const result: any = await axios(config).then(function (response) {
        return {
            data: response.data,
            success: true
         }
    })
    .catch(function (error) {
        console.log(error);
        return {
            success: false
         }
    });
    return result;
  },
  async  getModels(info: any){
    var data = JSON.stringify({
        "data": info,
    });
    var config = {
        method: 'post',
        url: '/backoffice/getModels',
        headers: { 
            'Content-Type': 'application/json'
        },
        data: data
    };

    const result: any = await axios(config).then(function (response) {
        return {
            data: response.data,
            success: true
         }
    })
    .catch(function (error) {
        console.log(error);
        return {
            success: false
         }
    });
    return result;
  },
  async  addLike(info: any){
    var data = JSON.stringify({
        "data": info,
    });
    var config = {
        method: 'post',
        url: '/backoffice/addLike',
        headers: { 
            'Content-Type': 'application/json'
        },
        data: data
    };

    const result: any = await axios(config).then(function (response) {
        return {
            data: response.data,
            success: true
         }
    })
    .catch(function (error) {
        console.log(error);
        return {
            success: false
         }
    });
    return result;
  },
  async  removeLike(info: any){
    var data = JSON.stringify({
        "data": info,
    });
    var config = {
        method: 'post',
        url: '/backoffice/removeLike',
        headers: { 
            'Content-Type': 'application/json'
        },
        data: data
    };

    const result: any = await axios(config).then(function (response) {
        return {
            data: response.data,
            success: true
         }
    })
    .catch(function (error) {
        console.log(error);
        return {
            success: false
         }
    });
    return result;
  },
  async  removeVote(info: any){
    var data = JSON.stringify({
        "data": info,
    });
    var config = {
        method: 'post',
        url: '/backoffice/removeVote',
        headers: { 
            'Content-Type': 'application/json'
        },
        data: data
    };

    const result: any = await axios(config).then(function (response) {
        return {
            data: response.data,
            success: true
         }
    })
    .catch(function (error) {
        console.log(error);
        return {
            success: false
         }
    });
    return result;
  },
  async  checkParticipation(info: any){
    var data = JSON.stringify({
        "data": info,
    });
    var config = {
        method: 'post',
        url: '/backoffice/checkParticipation',
        headers: { 
            'Content-Type': 'application/json'
        },
        data: data
    };

    const result: any = await axios(config).then(function (response) {
        return {
            data: response.data,
            success: true
         }
    })
    .catch(function (error) {
        console.log(error);
        return {
            success: false
         }
    });
    return result;
  },
  async  allCompetitions(info: any){
    var config = {
        method: 'post',
        url: '/backoffice/allCompetitions',
        headers: { 
            'Content-Type': 'application/json'
        }
    };

    const result: any = await axios(config).then(function (response) {
        return {
            data: response.data,
            success: true
         }
    })
    .catch(function (error) {
        console.log(error);
        return {
            success: false
         }
    });
    return result;
  },
  async  openCompetition(info: any){
    var config = {
        method: 'post',
        url: '/backoffice/openCompetition',
        headers: { 
            'Content-Type': 'application/json'
        }
    };

    const result: any = await axios(config).then(function (response) {
        return {
            data: response.data,
            success: true
         }
    })
    .catch(function (error) {
        console.log(error);
        return {
            success: false
         }
    });
    return result;
  },
  async   singleCompetition(id:any){
    var data = JSON.stringify({
        "id": id,
    });
    var config = {
        method: 'post',
        url: '/backoffice/single',
        headers: { 
            'Content-Type': 'application/json'
        },
        data: data
    };

    const result: any = await axios(config).then(function (response) {
        return {
            data: response.data,
            success: true
         }
    })
    .catch(function (error) {
        console.log(error);
        return {
            success: false
         }
    });
    return result;
},
async   single2Competition(id:any){
    var data = JSON.stringify({
        "id": id,
    });
    var config = {
        method: 'post',
        url: '/backoffice/single2',
        headers: { 
            'Content-Type': 'application/json'
        },
        data: data
    };

    const result: any = await axios(config).then(function (response) {
        return {
            data: response.data,
            success: true
         }
    })
    .catch(function (error) {
        console.log(error);
        return {
            success: false
         }
    });
    return result;
},
async   statistics(){
    var config = {
        method: 'post',
        url: '/backoffice/statistics',
        headers: { 
            'Content-Type': 'application/json'
        }
    };

    const result: any = await axios(config).then(function (response) {
        return {
            data: response.data,
            success: true
         }
    })
    .catch(function (error) {
        console.log(error);
        return {
            success: false
         }
    });
    return result;
},
async   users(){
    var config = {
        method: 'post',
        url: '/backoffice/users',
        headers: { 
            'Content-Type': 'application/json'
        }
    };

    const result: any = await axios(config).then(function (response) {
        return {
            data: response.data,
            success: true
         }
    })
    .catch(function (error) {
        console.log(error);
        return {
            success: false
         }
    });
    return result;
}

  }
});
