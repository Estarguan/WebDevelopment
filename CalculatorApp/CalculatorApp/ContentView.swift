//
//  ContentView.swift
//  CalculatorApp
//
//  Created by Estar Guan on 2025-03-03.
//

import SwiftUI

enum CalcButton: String,Hashable{
    case one = "1"
    case two = "2"
    case three = "3"
    case four = "4"
    case five = "5"
    case six = "6"
    case seven = "7"
    case eight = "8"
    case nine = "9"
    case zero = "0"
    case add = "+"
    case subtract = "-"
    case divide = "/"
    case multiply = "x"
    case equal = "="
    case clear = "AC"
    case decimal = "."
    case percent = "%"
    case negative = "-/+"
}

struct ContentView: View {
    
    
    
    @State var result = "0"
    @State var cleared = true
    var body: some View {
        let buttons:[[CalcButton]] = [[.clear,.negative,.percent,.divide],
                                  [.seven,.eight,.nine,.multiply],[.four,.five,.six,.add],[.one,.two,.three,.subtract], [.decimal,.zero,.equal]]
        VStack {
            Text("CASIO")
                .font(.largeTitle)
                .fontWeight(.bold)
                .padding(.bottom,-10)
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

            //Button display
            ForEach(buttons,id:\.self){row in
                
                HStack{
                    ForEach(row,id:\.self){button in
                        
                        Button(action:{
                            if (button.rawValue == "AC"){
                                self.clearResultText()
                            }else if (button.rawValue == "="){
                                self.calculateResultText()
                            }else if (button.rawValue == "-/+"){
                                self.switchResultSign()
                            }
                            else{
                                self.addResultText(text:button.rawValue)
                            }
                        },label:{
                            Text(button.rawValue)
                                .font(.system(size:32))
                                .frame(width:70,height:70)
                                .foregroundColor(.black)
                                .background(Color.blue)
                                .cornerRadius(35)
                        })
                    }
                }
            }
        }
        
        Spacer()
    }
    
    func addResultText(text:String){
        if (cleared){
            result = text
            cleared = false
        }else{
            result += text
        }
    }
    func clearResultText(){
        result="0"
        cleared = true
    }
    func calculateResultText() {
        // Replace "x" with "*" for proper mathematical evaluation
        let formattedExpression = result.replacingOccurrences(of: "x", with: "*")

        if let expr = NSExpression(format: formattedExpression).expressionValue(with: nil, context: nil) as? Double {
            // If whole number we treat it like an int, otherwise we keep the decimal spots
            result = expr.truncatingRemainder(dividingBy: 1) == 0 ? String(format: "%.0f", expr) : String(expr)
        } else {
            result = "Error" // Handle invalid expression
        }
    }
    
    func switchResultSign(){
        print(result.count)
        if (result.count == 1){
            //Check if we have a valid double as a result which we will
            if let doubleValue = Double(result) {
                result = String(doubleValue * -1)
            }
        }
    }

}

#Preview {
    ContentView()
}
