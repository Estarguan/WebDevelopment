//
//  HeaderView.swift
//  ToDoList
//
//  Created by Estar Guan on 2025-02-23.
//

import SwiftUI

struct HeaderView: View {
    let title:String
    let subtitle: String
    let angle: Double
    let background: Color
    var body: some View {
        ZStack{
            RoundedRectangle(cornerRadius:0)
                .foregroundColor(background)
            //Gives the slanted diagonal effect
                .rotationEffect(Angle(degrees: angle))
            VStack{
                Text(title)
                    .font(.system(size:50))
                    .foregroundColor(Color.white)
                    .bold()
                Text(subtitle)
                    .font(.system(size:30))
                    .foregroundColor(Color.white)
            }
            //Puts space between the VStack and the ZStack
            .padding(.top,80)
        }
        .frame(width:UIScreen.main.bounds.width*3,height:350)
        .offset(y:-150)
    }
}

#Preview {
    HeaderView(title: "Title", subtitle: "Subtitle", angle: 15, background: .blue)
}
