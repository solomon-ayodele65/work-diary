// import React from  'react'
import { ProfileApi } from '../pages/Users/Apis/UserLogic'




const Profile =   ProfileApi
    
    console.log(Profile)

    const ProfileData={


    
            first: Profile && Profile.first_name,
            last: Profile && Profile.last_name,
        
            // personal profiles 
            name: Profile && Profile.first_name+" "+Profile.last_name,
            dp: Profile && Profile.profile_pics,
            user: Profile && Profile.about_user,
            phone: Profile && Profile.phone_no,
            mail: Profile && Profile.email,
            handle: Profile && Profile.social_handle,
        
            // business profiles 
            b_name: Profile && Profile.business_name,
            business: Profile && Profile.about_business,
            product: Profile && Profile.products,
            service: Profile && Profile.services,
            web: Profile && Profile.business_website,
            address: Profile && Profile.address
        }


    


export { ProfileData }

