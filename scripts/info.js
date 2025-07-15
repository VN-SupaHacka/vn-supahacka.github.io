const links = {
    discord:"https://discord.gg/2WVEKyz4sa",
    github:"https://github.com/VN-SupaHacka/vn-supahacka.github.io",
    vndb:"https://vndb.org/p25398"
};

for(entry in links) {
    const link = links[entry];
    const anchor = document.getElementById(`link-${entry}`);
    if(anchor != null && link != null)
        anchor.setAttribute("href", link);
}

const emailAnchor = document.getElementById("email");
if(emailAnchor != null) {   
    emailAnchor.innerText = "vnsupahacka@gmail.com";
    emailAnchor.setAttribute("href", `mailto:${emailAnchor.innerText}`);
}

