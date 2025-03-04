//
//  RegisterView.swift
//  ToDoList
//
//  Created by Estar Guan on 2025-02-23.
//

import SwiftUI

struct RegisterView: View {
    
    @State var name = ""
    @State var email = ""
    @State var password = ""
    var body: some View {
        VStack{
            //Header
            HeaderView(title:"Register",
                       subtitle:"Start organzing todos",
                       angle:-15,
                       background:.orange)
            
            Form {
                TextField("Full Name", text:$name)
                    .textFieldStyle(DefaultTextFieldStyle())
                TextField("Email Address", text:$email)
                    .textFieldStyle(DefaultTextFieldStyle())
                SecureField("Password", text:$password)
                    .textFieldStyle(DefaultTextFieldStyle())
            }
            .offset(y:-50)
            
            
            Spacer()

        }
    }
}

#Preview {
    RegisterView()
}
