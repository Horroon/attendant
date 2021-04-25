export const User = {
    roles:{
        user:'user',
        admin:'admin'
    },
    status:{
        leave:'Leave',
        available:'Available',
        unavailable:'Unavailable'
    }
}

export const Departments = ['Network Department','Software Engineer', 'Security Manager', 'Vice IT', 'Client Services'];
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