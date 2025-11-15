if (!sessionStorage.getItem("authenticated")) {
    if (!location.pathname.endsWith("auth.html")) {
        location.href = "auth.html";
    }
}
