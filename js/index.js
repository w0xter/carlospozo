const videos = [
    {
      "link": "https://www.youtube.com/watch?v=Jbe9EIRvupM",
      "nombre": "El Conseguidor",
      "fecha": 2018,
      "estiloVideo": "Cortometraje",
      "categoria": "Ficción",
      "funcion": "Director",
      "portada": null,
      "video": "https://www.youtube.com/embed/Jbe9EIRvupM",
      "rate": 1
    },
    {
      "link": "https://youtu.be/tfhMpl7lBXw",
      "nombre": "El Viaje Más Corto",
      "fecha": 2020,
      "estiloVideo": "Cortometraje",
      "categoria": "Ficción",
      "funcion": "Director",
      "portada": null,
      "video": "https://www.youtube.com/embed/tfhMpl7lBXw",
      "rate": 2
    },
    {
      "link": "https://www.instagram.com/p/CdqKeypK5JJ/",
      "nombre": "PD10",
      "fecha": 2022,
      "estiloVideo": "Spot",
      "categoria": "crown",
      "funcion": "Dop // editor",
      "portada": "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/281270540_302819798706803_2017257695271649002_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=cPo5MNu9W3kAX_NrDU1&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AT87dGjvLPuvIw0uIjt5U841wPgUUvg_mK4M4yyROxYv2g&oe=634CF0BF&_nc_sid=4f375e",
      "video": "https://scontent-mad1-1.cdninstagram.com/v/t50.16885-16/10000000_1145247446254869_71991435426380517_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjEyODAuaWd0di5iYXNlbGluZSIsInFlX2dyb3VwcyI6IltcImlnX3dlYl9kZWxpdmVyeV92dHNfb3RmXCJdIn0&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=4Ua-E8ICMpMAX-APeNq&edm=AP_V10EBAAAA&vs=562472375442866_590111493&_nc_vs=HBksFQAYJEdJQ1dtQUFWeFRhem1CRUVBT1c2ZFQtVXctOEFidlZCQUFBRhUAAsgBABUAGCRHSTQ4d2hDSFNBZU9ocnNMQUJja3I4TnY1d3M5YnZWQkFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACau0uvw%2BsDkPxUCKAJDMywXQFSZmZmZmZoYEmRhc2hfYmFzZWxpbmVfMV92MREAdewHAA%3D%3D&ccb=7-5&oe=634D0F14&oh=00_AT_MiRYZCrGBPYI7l_FUH9X2xN4z1jHx3ZyMTYG4LACdGA&_nc_sid=4f375e",
      "rate": 3
    },
    {
      "link": "https://vimeo.com/507934697",
      "nombre": "Adidas GMR",
      "fecha": 2020,
      "estiloVideo": "Spot",
      "categoria": "crown",
      "funcion": "Director // Dop",
      "portada": null,
      "video": "https://player.vimeo.com/video/507934697",
      "rate": 4
    },
    {
      "link": "https://vimeo.com/472643385",
      "nombre": "Ready For Football",
      "fecha": 2020,
      "estiloVideo": "Spot",
      "categoria": "crown",
      "funcion": "Director // Dop // Editor",
      "portada": null,
      "video": "https://player.vimeo.com/video/472643385",
      "rate": 5
    },
    {
      "link": "https://www.instagram.com/p/CX0uuE3osjo/",
      "nombre": "Discover your talend CS55",
      "fecha": 2021,
      "estiloVideo": "Spot",
      "categoria": "crown",
      "funcion": "Dop",
      "portada": "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/270012130_948786295736657_4331843288596920903_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=u-gTG1hJoQYAX9yAZ6v&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AT_RFS07z3DS1VZyi7pkgSxptlux_dMw5e_E0k--RwA66g&oe=634D4357&_nc_sid=4f375e",
      "video": "https://scontent-mad1-1.cdninstagram.com/v/t50.16885-16/10000000_1194158537658910_5274703942109529961_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5pZ3R2LmJhc2VsaW5lIiwicWVfZ3JvdXBzIjoiW1wiaWdfd2ViX2RlbGl2ZXJ5X3Z0c19vdGZcIl0ifQ&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=DiEHYv5SCVAAX-ZZ7Ju&edm=AP_V10EBAAAA&vs=2469859699810849_3692949018&_nc_vs=HBksFQAYJEdJQ1dtQUFlVW5HekZENEVBR21IeXV4Smd6TkpidlZCQUFBRhUAAsgBABUAGCRHSHBXRnhDbEZpVWU3REFDQUJ4X3R5bG9vNUpYYnZWQkFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACaoyYWh%2Bo7PPxUCKAJDMywXQE37peNT988YEmRhc2hfYmFzZWxpbmVfMV92MREAdewHAA%3D%3D&ccb=7-5&oe=634D56A0&oh=00_AT9xdvary_TVAPcDMdcGKnvRO4Tr_0nDtwJAewKA0Wm7Xw&_nc_sid=4f375e",
      "rate": 6
    },
    {
      "link": "https://www.instagram.com/p/CSFNSe9jqaT/",
      "nombre": "Rafa Nada x Mallorca",
      "fecha": 2021,
      "estiloVideo": "Spot",
      "categoria": "crown",
      "funcion": "Cámara // editor",
      "portada": "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/229166434_210967910969739_7982871880342689757_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=2paK48c_HRsAX8TLdd6&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjYzMTU2ODAwMjA2ODE2MjE5NQ%3D%3D.2-ccb7-5&oh=00_AT9Gb6n5uzwrBVESD_tXRHusngiG-q4ZHd3rwXk5OhlZ4A&oe=63523BD0&_nc_sid=30a2ef",
      "video": "https://tgd-selas-images.s3.eu-west-3.amazonaws.com/videosCarlos/229221015_866901270926556_4926720130200232068_n.mp4",
      "rate": 7
    },
    {
      "link": "https://www.instagram.com/p/CiKy8bppS5R/",
      "nombre": "Futbol emotion Italy",
      "fecha": 2022,
      "estiloVideo": "Spot",
      "categoria": "crown",
      "funcion": "Dop",
      "portada": "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/305081210_161653473122977_3703583367688247735_n.jpg?stp=dst-jpg_e15_p640x640&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=nemt8yXUoF8AX9Psefo&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkyMTM3MTM2MzQ4NzA2NzcyOQ%3D%3D.2-ccb7-5&oh=00_AT9AicZ_0jo7IVauzGhF0p_sqc_uHe54kkrIMaS6EVFLRw&oe=63518DF1&_nc_sid=30a2ef",
      "video": "https://tgd-selas-images.s3.eu-west-3.amazonaws.com/videosCarlos/305013888_502262591734951_3121147083058992063_n.mp4",
      "rate": 8
    },
    {
      "link": "https://vimeo.com/432455234/2b28f7c032",
      "nombre": "Taburete Madrid 2019",
      "fecha": 2019,
      "estiloVideo": "Aftermovie",
      "categoria": "Concierto",
      "funcion": "Cámara // editor",
      "portada": null,
      "video": "https://player.vimeo.com/video/432455234",
      "rate": 9
    },
    {
      "link": "https://www.instagram.com/p/CZhrTcXIEoj/",
      "nombre": "SuperJump",
      "fecha": 2021,
      "estiloVideo": "Spot",
      "categoria": "crown",
      "funcion": "Dop // editor",
      "portada": "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/258877216_315845150351149_2840478590814032634_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=i5NfF6LKkYAAX-nhwyo&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AT9AX79i21ysPX3h3GTZBfUkjXeKhPudGqCkpP3hwp5IsA&oe=634D17FF&_nc_sid=4f375e",
      "video": "https://scontent-mad1-1.cdninstagram.com/v/t50.2886-16/273100772_641407040504855_3917433439020696083_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjEwODAuY2xpcHMuaGlnaCIsInFlX2dyb3VwcyI6IltcImlnX3dlYl9kZWxpdmVyeV92dHNfb3RmXCJdIn0&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=82Ad_bza0AUAX8ZQlk0&edm=AP_V10EBAAAA&vs=467787711461273_4294095605&_nc_vs=HBksFQAYJEdPUXZSeEFYUk00MlcwY0NBQlBDRUJUMWhGMDJicV9FQUFBRhUAAsgBABUAGCRHS3VjU3hBTVdkSXRON3NCQUtiS0JYMmw3aGc4YnFfRUFBQUYVAgLIAQAoABgAGwAVAAAmkumF4c%2Br7z8VAigCQzMsF0AsVP3ztkWiGBJkYXNoX2hpZ2hfMTA4MHBfdjERAHX%2BBwA%3D&ccb=7-5&oe=634CFC19&oh=00_AT-SWtuEV1G8RBZqj74ZjCgyllqJA6PF6340fNiJvR2esQ&_nc_sid=4f375e",
      "rate": 10
    },
    {
      "link": "https://www.instagram.com/p/B-XhkpbISVn//",
      "nombre": "Alex wall Music Concierto",
      "fecha": 2020,
      "estiloVideo": "Aftermovie",
      "categoria": "Concierto",
      "funcion": "cámara // editor",
      "portada": "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/91434167_139888640877408_1978889714516363632_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=QGW6HWrlPeIAX9-BNSJ&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjI3NjQzNTc5MDU3MzY3NTg3OQ%3D%3D.2-ccb7-5&oh=00_AT_JHPZ3N6Y7NrOqo1fPwO_xFRrs_QGOcV3OvgNv1Nx06Q&oe=63515E0C&_nc_sid=30a2ef",
      "video": "https://tgd-selas-images.s3.eu-west-3.amazonaws.com/videosCarlos/91546103_222069562486559_833791233177197872_n.mp4",
      "rate": null
    },
    {
      "link": "https://vimeo.com/264247943",
      "nombre": "Bob",
      "fecha": 2017,
      "estiloVideo": "Cortometraje",
      "categoria": "Ficción",
      "funcion": "Cámara // editor",
      "portada": null,
      "video": "https://player.vimeo.com/video/264247943?h=749cbcbe11",
      "rate": null
    },
    {
      "link": "https://vimeo.com/432432382",
      "nombre": "Pernord Ricard",
      "fecha": 2019,
      "estiloVideo": "Activación",
      "categoria": "",
      "funcion": "Filmaker",
      "portada": null,
      "video": "https://player.vimeo.com/video/432432382",
      "rate": null
    },
    {
      "link": "https://vimeo.com/507931844",
      "nombre": "Acciona Sainz XE TEAM",
      "fecha": 2020,
      "estiloVideo": "Spot",
      "categoria": "crown",
      "funcion": "Cámara // editor",
      "portada": null,
      "video": "https://player.vimeo.com/video/507931844",
      "rate": null
    },
    {
      "link": "https://vimeo.com/507952817",
      "nombre": "InSainziable",
      "fecha": 2021,
      "estiloVideo": "Spot",
      "categoria": "crown",
      "funcion": "Cámara // editor",
      "portada": null,
      "video": "https://player.vimeo.com/video/507952817",
      "rate": null
    },
    {
      "link": "https://www.instagram.com/p/B-gyYuqJWkB/",
      "nombre": "Sun Orphans Concierto",
      "fecha": 2020,
      "estiloVideo": "Aftermovie",
      "categoria": "Concierto",
      "funcion": "cámara // editor",
      "portada": "HACER PORTADA",
      "video": "https://scontent-mad1-1.cdninstagram.com/v/t50.16885-16/10000000_237687280935671_8867157046150419276_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjEyODAuaWd0di5kZWZhdWx0IiwicWVfZ3JvdXBzIjoiW1wiaWdfd2ViX2RlbGl2ZXJ5X3Z0c19vdGZcIl0ifQ&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=SnaIUTwQJ5kAX9y9aYw&tn=BaKer3dqoQNZbHvs&edm=ALQROFkBAAAA&vs=17850198817984408_2589877799&_nc_vs=HBksFQAYJEdJQ1dtQUQzb3ZMaExOZ0FBRXpUWlc5YWVBNTdidlZCQUFBRhUAAsgBABUAGCRHQlltZGdVOWtqb2x0ZHdCQU81MEM0Zi0wYVVJYnZWQkFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACawg6ebnqq1PxUCKAJDMywXQF31T987ZFoYEmRhc2hfYmFzZWxpbmVfMV92MREAdewHAA%3D%3D&ccb=7-5&oe=634D6B19&oh=00_AT9h2vAyeKRpm_pJjcAdo46ZN_n9iZhtSYQq9Kc8SRhUSw&_nc_sid=30a2eff",
      "rate": null
    },
    {
      "link": "https://www.instagram.com/p/CaQELSAgw02/",
      "nombre": "CS55 x Courtois",
      "fecha": 2021,
      "estiloVideo": "Spot",
      "categoria": "crown",
      "funcion": "Dop // editor",
      "portada": "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/274463734_1003731800576035_5178701424883459626_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=6Kb09AldoU4AX-ra-Qr&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AT9lwBdcW-sM9u9M2pt_42SIA5un4HS_mliOpCG-tcdi0Q&oe=634D6008&_nc_sid=4f375e",
      "video": "https://scontent-mad1-1.cdninstagram.com/v/t50.16885-16/10000000_686024002848966_8514478245601635419_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjE5MjAuaWd0di5oaWdoIiwicWVfZ3JvdXBzIjoiW1wiaWdfd2ViX2RlbGl2ZXJ5X3Z0c19vdGZcIl0ifQ&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=7_6i14uod2wAX-9R0UF&edm=AP_V10EBAAAA&vs=378935443585032_3996196291&_nc_vs=HBksFQAYJEdJQ1dtQURHU1A5bzcyOENBRnRzNEV6YWdDbDJidlZCQUFBRhUAAsgBABUAGCRHSUxlWEJERUtOZHdPdE1JQUNtUVpSTHVoZm9HYnZWQkFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACbgs42kvNjPQBUCKAJDMywXQGzmZmZmZmYYEmRhc2hfaGlnaF8xMDgwcF92MREAdewHAA%3D%3D&ccb=7-5&oe=634D5DC0&oh=00_AT-mPxqfPr66gNolcAytiL-OjYebSZOMWYjtAgc2dO5y6g&_nc_sid=4f375e",
      "rate": null
    },
    {
      "link": "https://www.instagram.com/p/CY3uvmnoC2Q/",
      "nombre": "Marcelo 50 millones",
      "fecha": 2022,
      "estiloVideo": "Spot",
      "categoria": "crown",
      "funcion": "Dop // editor",
      "portada": "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/272002410_122083716991868_3885108509666993119_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=Hj0X4XrwV6cAX_K0kOH&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AT939Q__A6chgUhEIpFN0LittIMGT8UF9u-vbQWnTEMmRg&oe=634D4431&_nc_sid=4f375e",
      "video": "https://scontent-mad1-1.cdninstagram.com/v/t50.2886-16/10000000_2000785550100476_8974076477478777139_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjEwODAuY2xpcHMuaGlnaCIsInFlX2dyb3VwcyI6IltcImlnX3dlYl9kZWxpdmVyeV92dHNfb3RmXCJdIn0&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=Sc76oktOP0QAX9VGHDe&edm=AP_V10EBAAAA&vs=251393253801876_3399481128&_nc_vs=HBksFQAYJEdJQ1dtQUQ4Ui13dnRCc0hBRE94VDNNQ1U0cDhicV9FQUFBRhUAAsgBABUAGCRHTktMTVJDX3ZWZXphNndEQU04NTVRakRxY0FoYnFfRUFBQUYVAgLIAQAoABgAGwAVAAAm9O%2BU%2B%2FfJjUAVAigCQzMsF0BJEQYk3S8bGBJkYXNoX2hpZ2hfMTA4MHBfdjERAHX%2BBwA%3D&ccb=7-5&oe=634CD0F5&oh=00_AT9KnTOmpvzfD4Uggw3WLVtYwttBu_iEEWHdn5-Wpwda7g&_nc_sid=4f375e",
      "rate": null
    },
    {
      "link": "https://www.instagram.com/reel/CQG1eG5Cy8o/",
      "nombre": "Joao x Adidas",
      "fecha": 2021,
      "estiloVideo": "Spot",
      "categoria": "crown",
      "funcion": "Dop",
      "portada": "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/201162979_578838086417448_5259082345791110282_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=1pjd81EgaAQAX-g61bE&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AT8EVM1NEykTwXlYUAY_EEVsmV7hhIjh8z52jumauyqBaA&oe=634CF8A7&_nc_sid=4f375e",
      "video": "https://scontent-mad1-1.cdninstagram.com/v/t50.2886-16/201316705_349110663302775_6501869899728798376_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcy5iYXNlbGluZSIsInFlX2dyb3VwcyI6IltcImlnX3dlYl9kZWxpdmVyeV92dHNfb3RmXCJdIn0&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=Tl8QteGvLDkAX_y3vKl&edm=AP_V10EBAAAA&vs=1444595192585637_365516142&_nc_vs=HBksFQAYJEdHSFotd3QzemhLcGd6MEJBS2pDSTdVNVNEdGFicV9FQUFBRhUAAsgBABUAGCRHSVNrQWd3MXhwQmdZQW9HQUZsZEFVRWtCdUEyYnFfRUFBQUYVAgLIAQAoABgAGwAVAAAmuJi9sJi88z8VAigCQzMsF0A3u6XjU%2FfPGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX%2BBwA%3D&ccb=7-5&oe=634D2992&oh=00_AT9lLnxkHaNzRuZSZvAp-JTRwhZ2cxBgtGWCo4NKIq5S_Q&_nc_sid=4f375e",
      "rate": null
    },
    {
      "link": "https://www.instagram.com/p/CVDsLdroN16/",
      "nombre": "EA x Joao",
      "fecha": 2021,
      "estiloVideo": "Spot",
      "categoria": "crown",
      "funcion": "Dop",
      "portada": "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/245699226_1237351320023022_4324773711865910614_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=jn9n007iEhYAX9hCLVj&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AT8a8AcYQQ9NQMGn5dwnAcWVs1NK1ZftFxyDQZuQeddhSQ&oe=634CF5F1&_nc_sid=4f375e",
      "video": "https://scontent-mad1-1.cdninstagram.com/v/t50.2886-16/245882777_333821335167125_2290611970677385904_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcy5iYXNlbGluZSIsInFlX2dyb3VwcyI6IltcImlnX3dlYl9kZWxpdmVyeV92dHNfb3RmXCJdIn0&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=3pwOOc0zuGwAX-c-N4H&edm=ALQROFkBAAAA&vs=979465719283030_1922479089&_nc_vs=HBksFQAYJEdKbmZwdzZWNEJuV215OEJBTENxZTM1ejQ4a2ZicV9FQUFBRhUAAsgBABUAGCRHSGlhcHc0Y25ENmlPek1CQU9zSXRHNGRXSjlQYnFfRUFBQUYVAgLIAQAoABgAGwAVAAAmyPTxo8rc9T8VAigCQzMsF0A37tkWhysCGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX%2BBwA%3D&ccb=7-5&oe=634D3C2D&oh=00_AT-w3DB68mwFGf13dplTwNjH259Yv6yINPNrGZ4aEyvm9Q&_nc_sid=30a2ef",
      "rate": null
    },
    {
      "link": "https://www.instagram.com/p/CgzdjImpCb3/",
      "nombre": "Evento M12 x Db",
      "fecha": 2022,
      "estiloVideo": "Aftermovie",
      "categoria": "crown",
      "funcion": "Cámara // editor",
      "portada": "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/297014658_1579277982470144_6395033506967353383_n.jpg?stp=dst-jpg_e35_p1080x1080_sh0.08&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=HL-xLI1EJpoAX9ncR1K&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AT9C0_no0hSNQHG3KGsOf03jRGO4Fs11v9eXtzV9oLK5Fg&oe=634CF2AF&_nc_sid=4f375e",
      "video": "https://scontent.cdninstagram.com/v/t50.2886-16/10000000_357260986573524_3378514416448606914_n.mp4?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=OvjFW4h_c5UAX_1AqNA&edm=AP_V10EBAAAA&ccb=7-5&oe=634CCB73&oh=00_AT9ke54vjeZZakLdwGmSlLgAAKKiu5q11lLA_eYwVQ0mIA&_nc_sid=4f375e",
      "rate": null
    },
    {
      "link": "https://www.youtube.com/watch?v=0gzva8QmmG0",
      "nombre": "King Chill - She things im gone",
      "fecha": 2019,
      "estiloVideo": "Videoclip",
      "categoria": "Videoclip",
      "funcion": "director // editor",
      "portada": null,
      "video": "https://www.youtube.com/embed/0gzva8QmmG0",
      "rate": null
    },
    {
      "link": "https://www.youtube.com/watch?v=AYcEzECs-EM",
      "nombre": "Hombres G Ensayo",
      "fecha": 2020,
      "estiloVideo": "",
      "categoria": "",
      "funcion": "Cámara // editor",
      "portada": null,
      "video": "https://www.youtube.com/embed/AYcEzECs-EM",
      "rate": null
    },
    {
      "link": "https://www.youtube.com/watch?v=eMuJVrid3qk",
      "nombre": "Nuestra Generación",
      "fecha": 2017,
      "estiloVideo": "Documental",
      "categoria": "Ficción",
      "funcion": "Director",
      "portada": null,
      "video": "https://www.youtube.com/embed/eMuJVrid3qk",
      "rate": null
    },
    {
      "link": "https://www.youtube.com/watch?v=mU-BGQ3vHIU",
      "nombre": "King Chill - Everyday",
      "fecha": 2018,
      "estiloVideo": "Videoclip",
      "categoria": "Videoclip",
      "funcion": "Director // editor",
      "portada": null,
      "video": "https://www.youtube.com/embed/mU-BGQ3vHIU",
      "rate": null
    },
    {
      "link": "https://www.youtube.com/watch?v=SSFH-Ef1CMA",
      "nombre": "Malibu",
      "fecha": 2019,
      "estiloVideo": "Activación",
      "categoria": "",
      "funcion": "Filmaker",
      "portada": null,
      "video": "https://www.youtube.com/embed/SSFH-Ef1CMA",
      "rate": null
    },
    {
      "link": "https://www.instagram.com/p/CQ-6bq6ivzc/",
      "nombre": "Heliocare",
      "fecha": 2021,
      "estiloVideo": "Spot",
      "categoria": "crown",
      "funcion": "director // Camara // editor",
      "portada": "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/211472834_107978361455764_7574552510717054136_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=5Q0pedF9tdsAX9isVQZ&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjYxMTc4MTgyMjEyNDMyNjEwOA%3D%3D.2-ccb7-5&oh=00_AT8uBPZlZpMHTBh1LSZPyPyRDxcVq9Z27_AkUN9AynKuSQ&oe=6351ED2F&_nc_sid=30a2ef",
      "video": "https://tgd-selas-images.s3.eu-west-3.amazonaws.com/videosCarlos/213199566_120517146916014_7685814329290990478_n.mp4",
      "rate": null
    },
    {
      "link": "https://www.instagram.com/p/BtwD4raFarC/",
      "nombre": "Hombres G Promoción",
      "fecha": 2019,
      "estiloVideo": "Spot",
      "categoria": "Spot",
      "funcion": "Cámara",
      "portada": "https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/51797071_633394660433780_2856248045562675349_n.jpg?stp=dst-jpg_e15_s640x640&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=fXl9gthOfu8AX-KroV9&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MTk3NzA5NzMyNTQ1NDQwNDI5MA%3D%3D.2-ccb7-5&oh=00_AT_E_uTZlO6EjlajnV1cSvd_TmznbqOdiiCCJ3LbSxkZ8w&oe=6350BEE6&_nc_sid=30a2ef",
      "video": "https://tgd-selas-images.s3.eu-west-3.amazonaws.com/videosCarlos/52339777_529443077546889_1348813782478787814_n.mp4",
      "rate": null
    }
  ]

const topVideos = [
    {
        "link": "https://www.youtube.com/watch?v=Jbe9EIRvupM",
        "orientacion":"horizontal",
        "nombre": "El Conseguidor",
        "fecha": 2018,
        "estiloVideo": "Cortometraje",
        "categoria": "Ficción",
        "funcion": "Director",
        "portada": null,
        "video": "https://www.youtube.com/embed/Jbe9EIRvupM",
        "rate": 1
      },
      {
        "link": "https://youtu.be/mnYJEQEH6YE",
        "orientacion":"horizontal",
        "nombre": "El Viaje Más Corto",
        "fecha": 2020,
        "estiloVideo": "Cortometraje",
        "categoria": "Ficción",
        "funcion": "Director",
        "portada": null,
        "video": "https://www.youtube.com/embed/mnYJEQEH6YE",
        "rate": 2
      },
      {
        "link": "https://www.instagram.com/p/CdqKeypK5JJ/",
        "orientacion":"horizontal",
        "nombre": "PD10",
        "fecha": 2022,
        "estiloVideo": "Spot",
        "categoria": "crown",
        "funcion": "Dop // editor",
        "portada": "https://tgd-selas-images.s3.eu-west-3.amazonaws.com/videosCarlos/dybala.jpg",
        "video": "https://tgd-selas-images.s3.eu-west-3.amazonaws.com/dybala.mp4",
        "rate": 3
      },
      {
        "link": "https://vimeo.com/507934697",
        "orientacion":"horizontal",
        "nombre": "Adidas GMR",
        "fecha": 2020,
        "estiloVideo": "Spot",
        "categoria": "crown",
        "funcion": "Director // Dop",
        "portada": null,
        "video": "https://player.vimeo.com/video/507934697?h=e7cacb9fdc&color=c59008&title=0&byline=0&portrait=0",
        "rate": 4
      },
      {
        "link": "https://vimeo.com/472643385",
        "orientacion":"horizontal",
        "nombre": "Ready For Football",
        "fecha": 2020,
        "estiloVideo": "Spot",
        "categoria": "crown",
        "funcion": "Director // Dop // Editor",
        "portada": null,
        "video": "https://player.vimeo.com/video/472643385",
        "rate": 5
      },
      {
        "link": "https://www.instagram.com/p/CX0uuE3osjo/",
        "orientacion":"vertical",
        "nombre": "Discover your talend CS55",
        "fecha": 2021,
        "estiloVideo": "Spot",
        "categoria": "crown",
        "funcion": "Dop",
        "portada": "https://tgd-selas-images.s3.eu-west-3.amazonaws.com/videosCarlos/sainz.jpg",
        "video": "https://tgd-selas-images.s3.eu-west-3.amazonaws.com/sainz.mp4",
        "rate": 6
      },
      {
        "link": "https://www.instagram.com/p/CSFNSe9jqaT/",
        "orientacion":"vertical",
        "nombre": "Rafa Nada x Mallorca",
        "fecha": 2021,
        "estiloVideo": "Spot",
        "categoria": "crown",
        "funcion": "Cámara // editor",
        "portada": "https://tgd-selas-images.s3.eu-west-3.amazonaws.com/videosCarlos/rafa.jpg",
        "video": "https://tgd-selas-images.s3.eu-west-3.amazonaws.com/videosCarlos/229221015_866901270926556_4926720130200232068_n.mp4",
        "rate": 7
      },
      {
        "link": "https://www.instagram.com/p/CiKy8bppS5R/",
        "orientacion":"vertical",
        "nombre": "Futbol emotion Italy",
        "fecha": 2022,
        "estiloVideo": "Spot",
        "categoria": "crown",
        "funcion": "Dop",
        "portada": "https://tgd-selas-images.s3.eu-west-3.amazonaws.com/videosCarlos/futbol.jpg",
        "video": "https://tgd-selas-images.s3.eu-west-3.amazonaws.com/videosCarlos/305013888_502262591734951_3121147083058992063_n.mp4",
        "rate": 8
      },
      {
        "link": "https://vimeo.com/432455234/2b28f7c032",
        "nombre": "Taburete Madrid 2019",
        "fecha": 2019,
        "orientacion":"horizontal",
        "estiloVideo": "Aftermovie",
        "categoria": "Concierto",
        "funcion": "Cámara // editor",
        "portada": null,
        "video": "https://player.vimeo.com/video/432455234",
        "rate": 9
      },
      {
        "link": "https://www.instagram.com/p/CZhrTcXIEoj/",
        "nombre": "SuperJump",
        "orientacion":"vertical",
        "fecha": 2021,
        "estiloVideo": "Spot",
        "categoria": "crown",
        "funcion": "Dop // editor",
        "portada": "https://tgd-selas-images.s3.eu-west-3.amazonaws.com/videosCarlos/joao.jpg",
        "video": "https://tgd-selas-images.s3.eu-west-3.amazonaws.com/joao.mp4",
        "rate": 10
      }
]
  const videosContainer = document.getElementById("videos")
  const videosVertical = document.getElementById("videosVertical")
  function includeIframe(data){
    const element = `
    <div class="embed-responsive embed-responsive-16by9 ">
        <iframe class="embed-responsive-item ${data.orientacion === "vertical"?"videoVertical":"videoHorizontal"}" src="${data.video}" allowfullscreen></iframe>
    </div>
    `
    videosContainer.innerHTML += element
  }
  function includeVideoVertical(data){
    const element = `
    <div class="p-1 mx-auto">
    <video
    poster="${data.portada}"
    onclick="this.paused ? this.play() : this.pause();"
    height="600"
    >
    
    <source src="${data.video}" type="video/mp4"></source>
    </video>
    </div>
    `
    videosVertical.innerHTML += element
  }
  function init(){

    for(let i in topVideos){
        if(topVideos[i].orientacion ==="horizontal"){
            includeIframe(topVideos[i])
        }else{
            includeVideoVertical(topVideos[i])
        }
    }

  }

init()

