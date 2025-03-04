//
//  ContentView.swift
//  CalculatorApp
//
//  Created by Estar Guan on 2025-03-03.
//

import SwiftUI

struct ContentView: View {
    @State var result = "12+3+4"
    var body: some View {
        VStack {
            HStack{
                Spacer()
                Text(result)
                    .font(.system(size:30,weight:.bold))
                    .padding()
            }
            .padding(.vertical,15)
            .overlay(
                RoundedRectangle(cornerRadius: 10)
                    .stroke(Color.black,lineWidth:4)
            )
            .padding()
//           Text(result)
//                .font(.system(size: 30,weight:.bold))
//                .padding(.horizontal,150)
//                .padding(.vertical,20)
//                .overlay(
//                    RoundedRectangle(cornerRadius:10)
//                        .stroke(Color.black,lineWidth:4)
//                )
//            
//                .padding(.top,30)
        }
        Spacer()
    }
}

#Preview {
    ContentView()
}
