



/////////////////////////
// Get data from Google Sheets
////////////////////////
$.ajax("https://spreadsheets.google.com/feeds/list/1nMCs6OEMY5mugd_pzWU_3cMqM_8HQha7TrDFnZw6mBY/1/public/full?alt=json")
//.then for when the data arrives.


//.then for when the data when arrives
.then((data) => {
    console.log(data)
    // Map over the data, generate a simpler dataset
    const projects = data.feed.entry.map((item) => { //Remember, Map lets you convert array into another array
        return {    
            description: item.gsx$description.$t,
            giturl: item.gsx$giturl.$t,
            liveurl: item.gsx$liveurl.$t,
            project: item.gsx$project.$t,
            projectimage: item.gsx$projectimage.$t

        }
    })
    console.log(projects)

    ///////////////////////////
    ///// Jquery to render your projects below
    //////////////////////////
    //////////////////////////

    ///////////////////////////
    ///////////////////////////
    
})

 .catch((error) => {
     console.error(error)

 })