const physicalText = document.querySelector(".physical h1");
const physical = document.querySelector(".physical");
const dataText = document.querySelector(".dataLink h1");
const data = document.querySelector(".dataLink");
const networkingText = document.querySelector(".networking h1");
const networking = document.querySelector(".networking");
const transportText = document.querySelector(".transport h1");
const transport = document.querySelector(".transport");
const sessionText = document.querySelector(".session h1");
const session = document.querySelector(".session");
const presentationText = document.querySelector(".presentation h1");
const presentation = document.querySelector(".presentation");
const applicationText = document.querySelector(".application h1");
const application = document.querySelector(".application");

function textChange(osiLayer, text, textChange){
    osiLayer.addEventListener("mouseover", ()=>{
        setInterval(() => {
        textChange.textContent = String(text);
            textChange.classList.add("textChange");
            textChange.style.animation = "enter 0.4s";
        }, 1000);
    })
};

textChange(physical, "The physical layer of the OSI model handles the hardware aspect of sending information.", physicalText);
textChange(data, "The data link layer uses MAC addresses to determine where the information needs to go, the senders MAC address is kept here for when the user sends data back.", dataText )
textChange(networking, "The networking layer uses the IP address to make sure that the correct client is recieving the data.", networkingText);
textChange(transport, "The transport layer breaks the information into packets and transmits the data using TCP.", transportText);
textChange(session, "The session layer attempts to set up a connection between the client and the server, though most applications do this anyways.", sessionText);
textChange(presentation, "The presentation layer ensures that the recieved data can be decrypted for the user in a usable format.", presentationText);
textChange(application, "The application layer is where the data is decompressed into a readable format for the user, normally through HTTP.", applicationText);
