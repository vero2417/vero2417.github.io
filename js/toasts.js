
var toasts = {};


toasts.ShowAlertWarning = (textAShow) => {
    console.log(textAShow);
    Toastify({
        text: textAShow,
        duration: 3000,
        position: "center",
        close: true,
        style: {
            fontSize: "12px",
            color: "#000000",
            background: "linear-gradient(to right, #FFDD00, #FBB034)",
        }
    }).showToast();
};