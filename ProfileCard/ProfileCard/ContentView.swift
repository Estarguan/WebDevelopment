import SwiftUI

struct ContentView: View {
    @State private var username: String = ""
    @State private var tempName: String = ""
    @FocusState private var fieldIsFocused: Bool
    
    var body: some View {
        NavigationView {
            VStack {
                Image("profilePic")
                    .resizable()
                    .scaledToFit()
                    .frame(width: 150, height: 150)
                    .clipShape(Circle())
                    .shadow(radius: 10)
                
                
                Text("Welcome " + username)
                    .font(.title)
                    .fontWeight(.bold)
                    .foregroundStyle(Color.primary)
                
                TextField("Type name and press Enter:", text: $tempName)
                    .foregroundColor(.black)
                    .fontWeight(.bold)
                    .focused($fieldIsFocused)
                    .multilineTextAlignment(.center)
                    .textInputAutocapitalization(.never)
                    .onSubmit {
                        updateName()
                    }
                
                // Button to navigate to the new screen
                NavigationLink(
                    destination: NewScreenView(), // The new screen
                    label: {
                        Text("Change Screen")
                            .font(.title)
                            .foregroundColor(.blue)
                            .padding()
                            .background(Capsule().fill(Color.blue.opacity(0.2)))
                            .padding(.top)
                    })
            }
            .navigationTitle("Profile")
            
        }
    }
    
    func updateName() {
        username = tempName
        tempName = ""
    }
}

#Preview {
    ContentView()
}
