import React from "react";
import me from "../../assets/yummy-smile-emoji-with-tongue-lick-mouth-delicious-tasty-food-symbol-for-social-network-yummy-and-hungry-icon-savory-gourmet-enjoy-food-sign-illustration-isolated-on-yellow-background-vector.jpg";
const Users=()=>{
    const arr=[1,2,3,4] 

    return(
        <section className="tableClass">
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Role</th>
                            <th>Since</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((i)=>(
                                <tr key={i}>
                          <td>#skfsdlkfsd</td>
                          <td>Aman</td>
                          <td>

                            <img src={me} alt="" />
                          </td>
                          <td>Admin</td>
                          <td>{"23-22-2222"}</td>  
                        </tr>
                            ))
                        }
                    </tbody>
                </table>
            </main>
        </section>
    )
};

export default Users;
