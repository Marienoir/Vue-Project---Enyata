const app = new Vue({
    el: "#app",
    data: {
        formData: {
            name: "",
            username: "",
            email: "",
            phoneNumber: ""
        },
        tableData: []
    },
    computed: {
        greeting(){
            let today = new Date()
            let hours = today.getHours()
            return hours
            
        }
    },
    methods:{
        submit(){
            console.log(this.formData);
            console.log(this.tableData)
            this.tableData.push({...this.formData})
        }
    }
})

const app1 = new Vue({
    el: "#app1",
    data: {
        details: [{
                name: "Mary Okosun"
            },
            {
                address: "12, Chanchaga Street, Minna, Niger State."
            },
            {
                occupation: "Software Developer"
            },
            {
                food: "Yam , Corn , Fish and Egg"
            },
            {
                countries: "Kenya , Italy , Japan and Korea"
            }
        ]
    }
})
