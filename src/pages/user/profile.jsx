


import React from 'react'
import ProfileHead from '../../components/user/profileHead'
import NotificationBar from '../../components/user/notificationBar'
import Resume from '../../components/user/resume'
   
   export default function Profile() {
     return (
       <div >
          <div>
          <ProfileHead/>
          </div> 
          <div className='flex mx-20 mt-10 mb-6 '>
               
                  
                  <NotificationBar/>
                         
                    <div className='mx-20'>
                      <Resume/>
                    </div>
                 
                
              
          </div>
            
       </div>
     )
   }
   