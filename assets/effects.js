function scriptInit() {
    document.getElementById("install").addEventListener("click", showInstallOverlay);
    document.getElementsByClassName("install-close")[0].addEventListener("click", hideInstallOverlay);
}

function showInstallOverlay() {
    const installOverlay = document.getElementsByClassName('install-overlay')[0];
    installOverlay.classList.toggle('active');
    const body = document.getElementsByTagName('body')[0];
    body.style.overflow = 'hidden';
}

function hideInstallOverlay() {
    const installOverlay = document.getElementsByClassName('install-overlay')[0];
    installOverlay.classList.toggle('active');
    const body = document.getElementsByTagName('body')[0];
    body.style.overflow = 'auto';
}

window.onload = scriptInit;
