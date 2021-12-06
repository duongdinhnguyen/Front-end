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
var gr_CD; // sử dụng để quay CD
var is_Random = false;
var audio = document.querySelector("#audio");
var audio_item = document.querySelector("input[type='range']");
var item_play = document.querySelector(".pause-item");
var pause = document.querySelector(".pause");
var play = document.querySelector(".play");
var back_song = document.querySelector(".back-song");
var back_down_song = document.querySelector(".back-down-song");
var go_up_song = document.querySelector(".go-up-song");
var random_song = document.querySelector(".random-song");
var header_songName =  document.querySelector(".name-music h3");
var cd = document.querySelector(".cd-img");
var cd_Music = document.querySelector(".cd-music");
var cd_Height = cd_Music.offsetHeight;
var play_list = document.querySelector(".music-lists");


function showCD(index){
    header_songName.textContent = songs[index].song_name;
    cd.style.backgroundImage = `url("${songs[index].singer_image}")`;
    audio.src = songs[index].song_source;
    
}

function show_Song(){
    
    var html = ``;
    songs.forEach( (song,index)=>{
        html += `<li class="music-item ${index === initialIndex ? 'song-active' : ''}" value = "${index}">
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


function go_round_CD(){
    gr_CD = cd.animate([{ transform: 'rotate(360deg)' }],
     {duration: 30000,iterations: Infinity}); 
     // duration: thời lượng, iterations: lặp lại
    gr_CD.pause(); // mặc định là không xoay
}
function audio_Play(){
    gr_CD.play();
    play.classList.add("un-active");
    pause.classList.remove("un-active");
}
function audio_Pause(){
    gr_CD.pause();
    pause.classList.add("un-active");
    play.classList.remove("un-active");
}
// play CD
function play_CD(){
    isPlay = true;
    audio.play();
    audio.onplay = audio_Play;

}






function handleEventScroll(){
    var scrollY= window.scrollY || document.documentElement.scrollTop;
    cd_Music.style.height = cd_Height - scrollY +"px";
    scrollY > 100 ? cd_Music.classList.add("un-active") : cd_Music.classList.remove("un-active"); 
}



function backInitialSong(){
    audio.currentTime = 0;
    audio_item.value = 0;
}


function back_downSong(){
    if(is_Random){
        initialIndex = Math.floor(Math.random() * songs.length);
        
    }
    else{
        initialIndex > 0 ? initialIndex -= 1: initialIndex = songs.length -1;  
    }

    showCD(initialIndex);
    play_CD();

    if(document.querySelector(".song-active")){
        document.querySelector(".song-active").classList.remove("song-active"); 
    }
    document.querySelector(`li[value = '${initialIndex}']`).classList.add("song-active");

    
}   


function handleEventPause(){
    isPlay = !isPlay;
    isPlay ? audio.play() : audio.pause();
    audio.onplay = audio_Play;
    audio.onpause = audio_Pause;
}


// handle event go_upSong
function go_upSong(){
    
    if(is_Random){
        initialIndex = Math.floor(Math.random() * songs.length); 
    }
    else{
        initialIndex < songs.length -1 ? initialIndex += 1 : initialIndex = 0;
    }
    showCD(initialIndex);
    play_CD();
    
    if(document.querySelector(".song-active")){
        document.querySelector(".song-active").classList.remove("song-active"); 
    }
    document.querySelector(`li[value = '${initialIndex}']`).classList.add("song-active");
        
}

// handle event random Song: Math.random() *10 <=> random 0->9 
function randomSong(){
    
    is_Random = !is_Random;
    if(is_Random){
        this.classList.add("random-active");
    }
    else {
        this.classList.remove("random-active");
    }
        

}


// Khi tiến độ bài hát thay đổi
function forward(){
    // ontimeupdate: audio chạy thời gian
    // currentTime: time hiện tại, duration: thời lượng audio
    var result = Math.floor(audio.currentTime/audio.duration *100);
    audio.currentTime > 0 ? audio_item.value = result : 0;
    
}


// dùng onchange để lấy value tại chỗ tua
// từ value=> tính ra số giây tương ứng của bài hát
// dùng currentTime để set time hiện tại cho audio
function tuaSong(){
    audio.currentTime = audio_item.value*audio.duration/100;
    
}


function start(){

    // show song inital
    showCD(initialIndex);

    // show play list music
    show_Song();

    //chuyển bài khi click
    // bắt event khi click element nằm trong thẻ bọc nó
    // dùng cách này thì sẽ bắt đc toàn bộ các element trong nó
    // kể cả các element sau khi chỉnh sửa, update, add, remove,..
    play_list.onclick = function(e){
        
        //e.target => trả về hiện tại
        // trả về phần tử có class là gì đó
        var music_item = e.target.closest(".music-item");
        var details = e.target.closest(".details");
        // nếu click trúng music_item và không trúng details
        if(music_item && ! details){
            
                initialIndex = music_item.value;
                showCD(initialIndex);
                play_CD();
                if(document.querySelector(".song-active")){
                document.querySelector(".song-active").classList.remove("song-active"); 
                }
    
                music_item.classList.add("song-active");
            
            
        }
        // khi click trúng details
        if(details){
            console.log("yeag");
        }
    };

    //zoom out CD when scroll: use window.scrollY 
    //or document.documentElement.scrollTop to get Y-axis browser
    document.onscroll = handleEventScroll;

    // quay CD: use animate 360deg
    // animate: gồm 2 đối số: keyframes(danh sách keyframe) and time options
    go_round_CD();

    // handle event backInitialSong: currentTime =0, audio auto play
    back_song.addEventListener('click', backInitialSong);  

    // handle event backdownSong
    back_down_song.onclick  = back_downSong;

    // pause/play music
    item_play.onclick = handleEventPause;

    // handle event go_upSong
    go_up_song.onclick = go_upSong;

    // handle event random Song: Math.random() *10 <=> random 0->9 
    random_song.onclick = randomSong;

    // Khi tiến độ bài hát thay đổi
    audio.ontimeupdate = forward;

    // Khi tua bài hát
    audio_item.onchange = tuaSong;

    // auto next Song
    audio.onended  = go_upSong;

    
}

// Start app
start();