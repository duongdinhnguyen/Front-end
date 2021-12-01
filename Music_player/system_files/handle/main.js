var songs = [
    {
        "id": 1,
        "song_name": "Lối nhỏ",
        "singer_name": "Đen",
        "singer_image":"./system_files/image/singer/001.jpg",
        "song_source": "./system_files/songs/001.mp3"
    },
    {
        "id": 2,
        "song_name": "Có chàng trai viết lên cây",
        "singer_name": "Phan Mạnh Quỳnh",
        "singer_image":"./system_files/image/singer/002.jpg",
        "song_source": "./system_files/songs/002.mp3"
    },
    {
        "id": 3,
        "song_name": "Trốn tìm",
        "singer_name": "Đen",
        "singer_image":"./system_files/image/singer/003.jpg",
        "song_source": "./system_files/songs/003.mp3"
    },
    {
        "id": 4,
        "song_name": "Kém duyên",
        "singer_name": "Rum",
        "singer_image":"./system_files/image/singer/004.jpg",
        "song_source": "./system_files/songs/004.mp3"
    },
    {
        "id": 5,
        "song_name": "Khó vẽ nụ cười" ,
        "singer_name": "Đạt G",
        "singer_image":"./system_files/image/singer/005.jpg",
        "song_source": "./system_files/songs/005.mp3"
    },
    {
        "id": 6,
        "song_name": "Lạc trôi",
        "singer_name": "Sơn tùng mtp",
        "singer_image":"./system_files/image/singer/006.jpg",
        "song_source": "./system_files/songs/006.mp3"
    },
    {
        "id": 7,
        "song_name": "Nơi này có anh",
        "singer_name": "Sơn tùng mtp",
        "singer_image":"./system_files/image/singer/007.jpg",
        "song_source": "./system_files/songs/007.mp3"
    },
    {
        "id": 8,
        "song_name": "Phía sau một cô gái",
        "singer_name": "Soobin Hoàng Sơn",
        "singer_image":"./system_files/image/singer/008.jpg",
        "song_source": "./system_files/songs/008.mp3"
    },
    {
        "id": 9,
        "song_name": "Thằng điên",
        "singer_name": "JustaTee",
        "singer_image":"./system_files/image/singer/009.jpg",
        "song_source": "./system_files/songs/009.mp3"
    },
    {
        "id": 10,
        "song_name": "Túy âm",
        "singer_name": "Xesi x Masew x Nhatnguyen",
        "singer_image":"./system_files/image/singer/010.jpg",
        "song_source": "./system_files/songs/010.mp3"
    }
];

function show_Song(){
    var play_list = document.querySelector(".music-lists");

    var html = songs.reduce((initialValue, song)=>{
        return initialValue + `<li class="music-item">
                    <div class="music-item-content">
                        <div class="music-item-img" style='background-image: url("${song.singer_image}");'>

                        </div>
                        <div class="music-item-description">
                            <h3>${song.song_name}</h3>
                            <p>${song.singer_name}</p>
                        </div>
                        <div class="details">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                </li>`;
    },``);
    play_list.innerHTML = html;
    
}
//zoom out CD when scroll: use window.scrollY or document.documentElement.scrollTop to get Y-axis browser
function handleEventScroll(){
    var cd_Music = document.querySelector(".cd-music");    
    var cd_Height = cd_Music.offsetHeight; 

    // var cd_Img = document.querySelector(".cd-img");
    document.onscroll = function(){
        var scrollY= window.scrollY || document.documentElement.scrollTop;
        cd_Music.style.height = cd_Height - scrollY +"px";
        scrollY > 100 ? cd_Music.classList.add("un-active") : cd_Music.classList.remove("un-active");
        
        // if(scrollY>100){
        //     cd_Img.style.height -= (scrollY -100);
        //     cd_Img.style.width -= (scrollY -100);
        // }
        
    };
}

function start(){
    show_Song();
    handleEventScroll();

}

// Start app
start();