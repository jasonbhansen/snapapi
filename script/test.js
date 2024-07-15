async function get_data() {
    return await fetch("https://marvelsnap.pro/snap/do.php?cmd=getcards", {
        "headers": {
          "accept": "application/json, text/plain, */*",
          // "accept-language": "en-US,en;q=0.9",
          // "priority": "u=1, i",
          // "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
          // "sec-ch-ua-mobile": "?0",
          // "sec-ch-ua-platform": "\"Windows\"",
          // "sec-fetch-dest": "empty",
          // "sec-fetch-mode": "cors",
          // "sec-fetch-site": "same-origin",
          "Referer": "https://marvelsnap.pro/collection/",
          // "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "mode":"no-cors",
        "method": "GET"
      });
    }

async function main() {
    let response = await get_data();
    console.log(response);
}

main().then(res => {
    console.log("finished");
})