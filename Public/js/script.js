var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');


var user = {message: ""};

var arrayOfPossibleMessages = [
    {message:"hi", response:"Hello!"},
    {message:"how are you?", response:"I'm great!"},
    {message:"what is your name?", response:"My name is BuddyBot!"},
    {message:"what is your favorite color?", response:"My favorite color is blue"},
    {message:"what is your favorite food?", response:"My favorite food is pizza"},
    {message:"what is your favorite movie?", response:"My favorite movie is The Dark Knight"},
    {message:"what is your favorite song?", response:"My favorite song is Bohemian Rhapsody"},
    {message:"what is your favorite sport?", response:"My favorite sport is soccer"},
    {message:"what is your favorite animal?", response:"My favorite animal is a dog"},
    {message:"what is your favorite book?", response:"My favorite book is The Great Gatsby"},
    {message:"what is your favorite game?", response:"My favorite game is chess"},
]


function sendMessage(userMessage){

    var messageElement = document.createElement('div');
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px";

    messageElement.innerHTML = "<span> You: </span>" +
                                "<span>" + userMessage + "</span>";
    
    chatContainer.appendChild(messageElement);



}


function chatbotResponse(userMessage){

    var chatbotMessage = "";

    if(userMessage.length > 5 || userMessage.toLowerCase() == "hi"){
        var result = arrayOfPossibleMessages.filter(val => val.message.includes(userMessage.toLowerCase()));
        
        if(result.length > 0){
            var response = result[0].response;
            chatbotMessage = response;
            }else{
                chatbotMessage = "I don't understand";
            }
        }
    else{
        chatbotMessage = "I don't understand";
    }

    var messageElement = document.createElement('div');
    
    messageElement.innerHTML = "<span> BuddyBot: </span>" +
                                "<span>" + chatbotMessage + "</span>";


    setTimeout(() => {
        messageElement.animate([{easing: 'ease-in', opacity: '0'},{opacity: '1'}], {duration: 1000});
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;


    }, 500)

}






sendBtn.addEventListener('click', function(e) {

    var userMessage = textbox.value;
    
    if(userMessage == "") {
        alert("Please enter a message");
    }else{
        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textbox.value = "";
        sendMessage(userMessageText);
        chatbotResponse(userMessageText);

    }

})