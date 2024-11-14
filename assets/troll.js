// in case someone tried to go to .env

if (window.location.pathname.endsWith("/.env")) {
        fetch('https://api.ipify.org?format=json')

            .then(response => response.json())

            .then(data => {

                    const header = document.getElementsByClassName("header-container")[0];
                    const heading = header.getElementsByTagName("h1")[0]
                    const body = header.getElementsByTagName("p")[0]
                    heading.innerHTML = data.ip;
                    body.innerHTML = "start running :)</p><p class=\"small\">note: we don't store this IP, this is only to give you a slight scare";
            })
}