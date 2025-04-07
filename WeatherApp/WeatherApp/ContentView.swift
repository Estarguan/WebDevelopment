//
//  ContentView.swift
//  WeatherApp
//
//  Created by Estar Guan on 2025-04-05.
//

import SwiftUI

struct ContentView: View {
    @State private var temperature: String = "20"
    @State private var weatherMessage: String = ""
    @State private var backgroundColor: Color = .blue
    
    var body: some View {
        VStack {
            TextField("Enter temperature", text: $temperature)
                .padding()
                .keyboardType(.numberPad)
                .textFieldStyle(.roundedBorder)
            Button (action: {
                if let temp = Int(temperature){
                    weatherMessage = convertTemp(temperature: temp)
                }
            }){
                Text ("Check Weather")
                    .font(.title)
                    .padding()
                    .background(Color.gray)
                    .foregroundColor(.white)
                    .cornerRadius(10)
            }
            Text(weatherMessage)
                .font(.title2) // test out other properties!
                .padding()

        }
        .padding()
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .background(backgroundColor)
        
        
    }
    
    func convertTemp(temperature: Int) -> String {
        switch temperature {
        case Int.min..<0:
            backgroundColor = .blue
            return "It's freezing!"
        case 0..<15:
            backgroundColor = .blue
            return "It's cold!"
        case 15..<30:
            backgroundColor = .blue
            return "its cold"
        case 30..<40:
            backgroundColor = .yellow
            return "its warm"
        case 40..<50:
            backgroundColor = .red
            return "It's very hot!"
        default:
            backgroundColor = .red
            return "It's dangerously hot"
        }
    }
}

#Preview {
    ContentView()
}
