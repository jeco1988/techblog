function formatDate(date) {
    return `${new Date(date).getDate() + 1}/${new Date(date).getMonth()}/${new Date(
        date
      ).getFullYear()}`;
}


module.exports = {
    formatDate
}