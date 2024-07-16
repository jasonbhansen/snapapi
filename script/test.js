async function get_data() {

 


    return await  fetch("https://marvelsnap.pro/snap/do.php?cmd=getcards", {
      "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "en-US,en;q=0.9",
        "priority": "u=0, i",
        "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "cookie": "usprivacy=1YNY; _lc2_fpi=8d2b7581bd40--01hx2n73vxr2wkyhx9q6mjzf6t; _lc2_fpi_meta=%7B%22w%22%3A1714855055229%7D; _cc_id=f57ed65a28d14485598547b9898a550d; ccuid=d6124d8a-57f2-4c4c-b7b2-e3e34cf85eb3; _scor_uid=f2c95eca2cf94155b044b83beeb1e847; _lr_env_src_ats=true; _lr_hashed_pid=2c619642e9dc34c90a9668a7afdbb6c68addf573317076d7171abed84becd386; _lr_optout=%2F; panoramaId_expiry=1721156278157; panoramaId=710c30c8e0748e6d2eba2af1ba154945a70227fd0b7ab99c96043ed4158f7799; MarvelSnapUser=426184; MarvelSnapToken=e1ae215947c; userHasCollection=1; uuid=82E89AF0-0CA8-4F73-AB5D-AD8FCC7449E8; connectId=%7B%22vmuid%22%3A%22b2xYCUDG4u0WDdXJIbxSlJQnjE67sZYW8bDwgqQXstr9e4F3DYqLhPyQtVyNLigpBCDFlMzB2JGUE1k7VVsfuw%22%2C%22connectid%22%3A%22b2xYCUDG4u0WDdXJIbxSlJQnjE67sZYW8bDwgqQXstr9e4F3DYqLhPyQtVyNLigpBCDFlMzB2JGUE1k7VVsfuw%22%2C%22connectId%22%3A%22b2xYCUDG4u0WDdXJIbxSlJQnjE67sZYW8bDwgqQXstr9e4F3DYqLhPyQtVyNLigpBCDFlMzB2JGUE1k7VVsfuw%22%2C%22ttl%22%3A86400000%2C%22he%22%3A%222c619642e9dc34c90a9668a7afdbb6c68addf573317076d7171abed84becd386%22%2C%22puid%22%3A%22d311f04f-14c1-4d44-9d8b-eb7f05284f9c%22%2C%22lastSynced%22%3A1720974717919%2C%22lastUsed%22%3A1721015898271%7D; cfz_google-analytics_v4=%7B%22caNr_engagementDuration%22%3A%7B%22v%22%3A%220%22%2C%22e%22%3A1752559348899%7D%2C%22caNr_engagementStart%22%3A%7B%22v%22%3A%221721023348899%22%2C%22e%22%3A1752559348899%7D%2C%22caNr_counter%22%3A%7B%22v%22%3A%22413%22%2C%22e%22%3A1752559348899%7D%2C%22caNr_session_counter%22%3A%7B%22v%22%3A%2283%22%2C%22e%22%3A1752559348899%7D%2C%22caNr_ga4%22%3A%7B%22v%22%3A%22f5610d2b-0a93-4f59-8205-8d23ba02e352%22%2C%22e%22%3A1752559348899%7D%2C%22caNr__z_ga_audiences%22%3A%7B%22v%22%3A%22f5610d2b-0a93-4f59-8205-8d23ba02e352%22%2C%22e%22%3A1746391055654%7D%2C%22caNr_let%22%3A%7B%22v%22%3A%221721023348899%22%2C%22e%22%3A1752559348899%7D%2C%22caNr_ga4sid%22%3A%7B%22v%22%3A%221461569163%22%2C%22e%22%3A1721025148899%7D%7D; __gads=ID=7dd902fd780cc607:T=1714855057:RT=1721023349:S=ALNI_Mbsm_OPByUVIIa_4O-9xpKX5kb-pg; __gpi=UID=00000dfd14dd43e2:T=1714855057:RT=1721023349:S=ALNI_MbAAXsN56TAh950-Lya6fuyQGPyDw; __eoi=ID=9a09e918b97bbe9d:T=1714855057:RT=1721023349:S=AA-AfjZ8G72VwrH1HENw4DeQQIrm"
      },
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
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