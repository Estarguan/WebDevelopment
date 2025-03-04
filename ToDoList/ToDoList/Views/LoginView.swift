//
//  LoginView.swift
//  ToDoList
//
//  Created by Estar Guan on 2025-02-23.
//

import SwiftUI

struct LoginView: View {
    
    @State var email = ""
    @State var password = ""
    
    var body: some View {
        NavigationView{
            VStack{
                //Header
                HeaderView(title: "To Do List",
                           subtitle: "Get things done",
                           angle:15,
                           background:.pink)
                

                //Login Form
                Form{
                    TextField("Email Address", text:$email)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                    SecureField("Password", text:$password)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                    Button{
                        //Attempt log in
                    }label:{
                        ZStack{
                            RoundedRectangle(cornerRadius:10)
                                .foregroundColor(Color.blue)
                            Text("Log in")
                                .foregroundColor(Color.white)
                                .bold()
                        }
                    }
                    .padding()
                }
                
                
                //Create Account
                VStack{
                    Text("New around here?")
                    NavigationLink("Create An Account",destination: RegisterView())
                }
                .padding(.bottom,50)
                
                Spacer()
            }
        }
    }
}

#Preview {
    LoginView()
}
