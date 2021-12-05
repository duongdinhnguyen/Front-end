var songs = [
    {
        id : 1,
        song_name: "Có chàng trai viết lên cây",
        singer_name: "Phan Mạnh Quỳnh",
        singer_image:"./system_files/image/singer/002.jpg",
        song_source: "./system_files/songs/002.mp3"
    },
    {
        id : 2,
        song_name: "Lối nhỏ",
        singer_name: "Đen",
        singer_image:"./system_files/image/singer/001.jpg",
        song_source: "./system_files/songs/001.mp3"
    },
    {
        id : 3,
        song_name: "Trốn tìm",
        singer_name: "Đen",
        singer_image:"./system_files/image/singer/003.jpg",
        song_source: "./system_files/songs/003.mp3"
    },
    {
        id : 4,
        song_name: "Kém duyên",
        singer_name: "Rum",
        singer_image:"./system_files/image/singer/004.jpg",
        song_source: "./system_files/songs/004.mp3"
    },
    {
        id : 5,
        song_name: "Khó vẽ nụ cười" ,
        singer_name: "Đạt G",
        singer_image:"./system_files/image/singer/005.jpg",
        song_source: "./system_files/songs/005.mp3"
    },
    {
        id : 6,
        song_name: "Lạc trôi",
        singer_name: "Sơn tùng mtp",
        singer_image:"./system_files/image/singer/006.jpg",
        song_source: "./system_files/songs/006.mp3"
    },
    {
        id : 7,
        song_name: "Nơi này có anh",
        singer_name: "Sơn tùng mtp",
        singer_image:"./system_files/image/singer/007.jpg",
        song_source: "./system_files/songs/007.mp3"
    },
    {
        id : 8,
        song_name: "Phía sau một cô gái",
        singer_name: "Soobin Hoàng Sơn",
        singer_image:"./system_files/image/singer/008.jpg",
        song_source: "./system_files/songs/008.mp3"
    },
    {
        id : 9,
        song_name: "Thằng điên",
        singer_name: "JustaTee",
        singer_image:"./system_files/image/singer/009.jpg",
        song_source: "./system_files/songs/009.mp3"
    },
    {
        id : 10,
        song_name: "Túy âm",
        singer_name: "Xesi x Masew x Nhatnguyen",
        singer_image:"./system_files/image/singer/010.jpg",
        song_source: "./system_files/songs/010.mp3"
    }
];
var initialIndex = 0;
var isPlay = false; 
var audio = document.querySelector("#audio");
var audio_item = document.querySelector("input[type='range']");
var item_play = document.querySelector(".pause-item");
var pause = document.querySelector(".pause");
var play = document.querySelector(".play");
var back_song = document.querySelector(".back-song");
var back_down_song = document.querySelector(".back-down-song");
var go_up_song = document.querySelector(".go-up-song");
var random_song = document.querySelector(".random-song");

// show song inital
function showCD(index){
    document.querySelector(".name-music h3").textContent = songs[index].song_name;
    document.querySelector(".cd-img").style.backgroundImage = `url("${songs[index].singer_image}")`;
    audio.src = songs[index].song_source;
    
}


function play_CD(){
    isPlay =false;
    isPlay ? audio.pause() : audio.play();
    audio.onplay = function(){
        isPlay = true;
        play.classList.add("un-active");
        pause.classList.remove("un-active");

    }
    audio.onpause =  function(){
        play.classList.remove("un-active");
        pause.classList.add("un-active");
        isPlay = false;
    }
}


// show play list music
function show_Song(){
    var play_list = document.querySelector(".music-lists");
    var html = ``;
    songs.forEach( (song,index)=>{
        html += `<li class="music-item" onclick="handleEventClickSong(${index})">
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
    });
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
        
    }
}


// handle event backInitialSong: currentTime =0, audio auto play
function backInitialSong(){
    back_song.onclick = function(){
        audio_item.value = 0;
        audio.currentTime = 0;
    }
}

// handle event backdownSong
function back_downSong(){
    back_down_song.onclick = function(){
        if(initialIndex > 0){
            initialIndex -= 1;
            showCD(initialIndex);
            play_CD();
        }
        else{
            play_CD();
        }
    }
}   

// pause/play music
function handleEventPause(){
       
    item_play.onclick = function(){
        // if(pause.classList.contains("un-active")){
        //     pause.classList.remove("un-active");
        //     play.classList.add("un-active");
        //     audio.play();
        // }
        // else{
        //     pause.classList.add("un-active");
        //     play.classList.remove("un-active");
        //     audio.pause();
        // }

        isPlay ? audio.pause() : audio.play();
    }
    audio.onplay = function(){
        isPlay = true;
        pause.classList.remove("un-active");
        play.classList.add("un-active");
    }
    audio.onpause = function(){
        isPlay= false;
        pause.classList.add("un-active");
        play.classList.remove("un-active");
    }
}

// handle event go_upSong
function go_upSong(){
    go_up_song.onclick = function(){
        if(initialIndex < songs.length -1){
            initialIndex += 1;
            showCD(initialIndex);
            play_CD();
        }
        else{
            play_CD();
        }
    }
}

// handle event random Song: Math.random() *10 <=> random 0->9 
function randomSong(){
    random_song.onclick = function(){
        initialIndex = Math.floor(Math.random() * songs.length);
        showCD(initialIndex);
        play_CD();
    };
}

// auto next Song
function autoNextSong(){
    audio.onended = function(){
        if(initialIndex < songs.length -1){
            initialIndex += 1;
            showCD(initialIndex);
            play_CD();
        }
        else{
            play_CD();
        }
    }
}


// Khi tiến độ bài hát thay đổi
function forward(){
    // ontimeupdate: audio chạy thời gian
    audio.ontimeupdate = function(){
        // currentTime: time hiện tại, duration: thời lượng audio
        var result = Math.floor(audio.currentTime/audio.duration *100);
    
        audio.currentTime > 0 ? audio_item.value = result : 0;
    }
}
// Khi tua bài hát, dùng onchange để lấy value tại chỗ tua
// từ value=> tính ra số giây tương ứng của bài hát
// dùng currentTime để set time hiện tại cho audio
function tuaSong(){
    audio_item.onchange = function(event){
        // console.log(event.target.value*audio.duration/100);
        audio.currentTime = event.target.value*audio.duration/100;
    };
    
}
function handleEventClickSong(index){
    initialIndex = index;
    showCD(initialIndex);
    play_CD();
}
function start(){
    show_Song();
    showCD(initialIndex);
    handleEventScroll();
    backInitialSong();
    back_downSong();
    handleEventPause();
    go_upSong();
    randomSong();
    forward();
    tuaSong();
    autoNextSong();

}

// Start app
start();