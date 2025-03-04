import SwiftUI

struct NewScreenView: View {
    @State private var currentIndex = 0  // Keeps track of the current square
    @State private var textInfo = ""
    @State private var tapped: Bool = false
    private var learnt = ["State","Focused","Navigation View","The arrow", "Modifer Chain"]
    private var allInfos = [
        "A @state variable manages the state of a variable and can be modified during the life of a view,changes to the state will automatically trigger the view to re-render, reflecting the updated state.",
        "A @focused allows you to track and control which view or input field is currently focused (active) or not. This is particularly useful for handling behaviors like moving between text fields or managing the keyboard’s visibility.",
        "A NavigationLink is a view that allows you to navigate from one view to another within a navigation stack. When a user taps or interacts with a NavigationLink, it triggers a navigation action that transitions to a new view (also called a destination view).",
        "Apparently swift has built in images which you can call with systemName: and then a name",
        "In swift the order which you add your modifiers matters, in this code we saw that if .padding() is used first it adds space between the text and the frame, if placed at the end we add padding between the frame and the view"
    ]
    var body: some View {
        
            VStack {
                Text("What was learnt?")
                    .font(.system(size:50))
                    .fontWeight(.bold)
                
                if !tapped{
                    Text("Tap the blue square for more info")
                        .font(.title)
                }
                // Display the current ocean name inside a square
                HStack {
                    // Current square
                    Text(learnt[currentIndex])
                        .font(.title)
                        .foregroundColor(.white)
                        .padding()
                        .frame(width: 150, height: 150)
                        .background(Color.blue)
                        .cornerRadius(10)
                        .onTapGesture {
                            textInfo = allInfos[currentIndex]
                            tapped = true
                        }
                        
                    
                    // Button for navigating to the next square
                    Button(action: {
                        // Go to the next square
                        if currentIndex < learnt.count - 1 {
                            currentIndex += 1
                        }else{
                            currentIndex = 0
                        }
                    }) {
                        Image(systemName: "arrow.right.circle.fill")
                            .font(.largeTitle)
                            .foregroundColor(.blue)
                            .padding(.leading, 20)
                    }
                }
                if !textInfo.isEmpty {
                    Text(textInfo)
                        .padding()
                        .background(Color.gray.opacity(0.3))
                        .cornerRadius(20)
                        .padding(30)
                      
                    
                }
                //Still not too sure what spacer does
                //Spacer()
        }
    }
    
}
#Preview {
    NewScreenView()}
