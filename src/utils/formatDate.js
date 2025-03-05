const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });


export { formatDate }