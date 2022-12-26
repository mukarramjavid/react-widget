const CommonUtility = {
    GetStringDate: (paramDate) => {
        let newDate = "";
        let d = new Date(paramDate);
        var date = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        newDate = `${month}/${date}/${year}`;
        return newDate;
    }
}

export default CommonUtility