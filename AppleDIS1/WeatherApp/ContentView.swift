//
//  ContentView.swift
//  WeatherApp
//
//  Created by Estar Guan on 2025-04-03.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        HStack {
            DayForecast(day: "Mon", high: 70, low: 50, isRainy:false)
                        
            DayForecast(day: "Tue", high: 60, low: 40, isRainy: true)
                }
    }
}

#Preview {
    ContentView()
}

struct DayForecast: View {
    let day:String
    let high: Int
    let low: Int
    let isRainy:Bool
    var iconName: String {
        return isRainy ? "cloud.rain.fill" : "sun.max.fill"
    }
       
    var iconColor: Color {
        return isRainy ? Color.blue : Color.yellow
    }
    
    
  
    
    var body: some View {
        VStack {
            Text(day)
                .font(.headline)
            Image(systemName: iconName)
                .foregroundStyle(iconColor)
                .font(.largeTitle)
                .padding(5)

            Text("High: \(high)")
                .fontWeight(.semibold)
            
            Text("Low: \(low)")
                .fontWeight(.medium)
                .foregroundStyle(Color.secondary)

        }
        .padding()
    }
}
