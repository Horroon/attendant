export const User = {
    roles:{
        user:'user',
        admin:'admin'
    }
}

export const Adminpages = {
    availability:{
        id:'availability',
        name:'Today Availability',
        icon:'fas fa-list',
        subpages:{
            availables:{
                id:'availability-availables',
                name:'Availables',
                icon:'fa fa-clock'
            },
            unavailables:{
                id:'availability-unavailables',
                name:'Un Availables',
                icon:'fas fa-pencil-alt'
            },
            onleaves:{
                id:'availability-onleaves',
                name:'On Leaves',
                icon:'fas fa-sign-out-alt'
            }
        }
    },
    overallstats:{
        id:'overallstats',
        name:'overallstats',
        icon:'fas fa-clipboard'
    },
    setting:{
        id:'setting',
        name:"Setting",
        icon:'fas fa-cog'
    }
}