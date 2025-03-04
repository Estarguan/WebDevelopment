//
//  ToDoListApp.swift
//  ToDoList
//
//  Created by Estar Guan on 2025-02-23.
//

import FirebaseCore
import SwiftUI

@main
struct ToDoListApp: App {
    init(){
        FirebaseApp.configure()
    }
    var body: some Scene {
        WindowGroup {
            MainView()
        }
    }
}
