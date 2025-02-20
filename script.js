const baseURL = "https://mnregaweb4.nic.in/netnrega";
const mainURL = "https://mnregaweb4.nic.in/netnrega/specific_work_rpt_dtl.aspx?state_name=KARNATAKA&state_code=15&short_name=KN&district_name=KALABURAGI&district_code=1515&block_name=JEVARGI&block_code=1515006&panchayat_name=BALUNDAGI&panchayat_code=1515006031&work_code=1515006031%2fRS%2fGIS%2f1021371&fin_year=2023-2024";

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch(mainURL);
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        const links = doc.querySelectorAll("a[href]");

        let tableBody = document.getElementById("dataBody");

        for (let link of links) {
            let fullURL = baseURL + link.getAttribute("href");
            let row = `<tr><td><a href='${fullURL}' target='_blank'>${fullURL}</a></td></tr>`;
            tableBody.innerHTML += row;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});