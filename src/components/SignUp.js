import React from "react"

export default function SignUp() {
    return(
        <div>
            <form action="">
                <div>
                    <p>Username</p>
                    <label htmlFor="username"/>   
                    <input type="text" placeholder="Username"/>
                </div>
                <div>
                    <p>Email</p>
                    <label htmlFor="username"/>   
                    <input type="email" placeholder="Email"/>
                </div>
                <div>
                    <p>Password</p>
                    <label htmlFor="password"/>   
                    <input type="password" placeholder="******"/>
                </div>
            </form>
        </div>
    )
}