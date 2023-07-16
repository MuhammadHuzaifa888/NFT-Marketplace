// import React from "react";
// import UserNftLogic from "./UserNftLogic";
// const UserNftLayout = ({ children }) => {

//     return (
//         <div className="z-10 relative flex flex-col max-h-fit w-screen    " >

//           <UserNftLogic/>
           
         
//             <main className=" z-20 relative flex flex-col max-h-fit w-screen " >

//                 {children}


//             </main>
  
 


//         </div>)

// }
// export default UserNftLayout
import React from "react";
import UserNftLogic from "./UserNftLogic";
const UserNftLayout = ({ children }) => {

    return (
        <div className="overflow-x-hidden" >

            <UserNftLogic />


            <main className="overflow-x-hidden" >

                {children}


            </main>




        </div>)

}
export default UserNftLayout