export function ShowError(error,addToast){
    if (error.response) {
        addToast(error.response.data.error, { appearance: "error" });
      } else {
        addToast("Something went wrong", { appearance: "error" });
      }
}