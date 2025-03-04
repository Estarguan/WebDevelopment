//
//  ContentView.swift
//  ToDoList
//
//  Created by Estar Guan on 2025-02-23.
//

import SwiftUI

struct MainView: View {
    var body: some View {
        VStack {
            NavigationView{
                LoginView()
            }
        }
    }
}

#Preview {
    MainView()
}
